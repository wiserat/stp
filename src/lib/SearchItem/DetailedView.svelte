<script lang="ts">
    import { formatFirestoreTimestamp, searchViewId } from "../../utils/store";
    import PeDoFile from "$lib/PeDoFile/index.svelte";
    import { allPosts } from "$lib/utils";
    import { onMount } from "svelte";
    import {
        addDoc,
        collection,
        doc,
        getDocs,
        increment,
        updateDoc,
    } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import { writable } from "svelte/store";

    const comments = writable<any[]>([]);

    onMount(async () => {
        try {
            const querySnapshot = await getDocs(
                collection(
                    db,
                    "posts",
                    $allPosts[$searchViewId].id,
                    "comments",
                ),
            );
            let docs: any[] = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            comments.set(docs);
        } catch (error) {
            console.error("Error fetching Firestore data: ", error);
        }
    });

    let postId = $allPosts[$searchViewId].id; // Make sure this is defined correctly in your context

    // Cookie helper functions
    function setCookie(name: string, value: string, days: number) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name: string): string | null {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    // Fetch comments from the "comments" subcollection
    onMount(async () => {
        try {
            const querySnapshot = await getDocs(
                collection(db, "posts", postId, "comments"),
            );
            let docs: any[] = [];
            querySnapshot.forEach((docSnap) => {
                docs.push({ id: docSnap.id, ...docSnap.data() });
            });
            comments.set(docs);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    });

    /**
     * Vote on a comment.
     * @param commentId The comment's document ID.
     * @param newVote The vote value: 1 for like, -1 for dislike.
     */
    async function voteComment(commentId: string, newVote: number) {
        // Use a cookie per comment to store the vote: "1" for like, "-1" for dislike.
        const cookieName = `vote_comment_${commentId}`;
        const previousVoteStr = getCookie(cookieName);
        const previousVote = previousVoteStr ? parseInt(previousVoteStr) : 0;

        if (previousVote === newVote) {
            alert("You have already voted in that direction!");
            return;
        }

        // Calculate the vote difference: if switching from 1 to -1, diff = -2; if from -1 to 1, diff = 2.
        const voteDiff = newVote - previousVote;

        try {
            const commentRef = doc(db, "posts", postId, "comments", commentId);
            await updateDoc(commentRef, {
                likes: increment(voteDiff),
            });
            // Update the cookie with the new vote value (1 or -1) for 1 day.
            setCookie(cookieName, newVote.toString(), 1);
            // Update the local store to reflect the new likes count.
            comments.update((current) =>
                current.map((comment) =>
                    comment.id === commentId
                        ? { ...comment, likes: (comment.likes || 0) + voteDiff }
                        : comment,
                ),
            );
        } catch (error) {
            console.error("Error updating comment vote:", error);
        }
    }

    // Wrapper functions for clarity.
    function likeComment(commentId: string) {
        voteComment(commentId, 1);
    }

    function dislikeComment(commentId: string) {
        voteComment(commentId, -1);
    }

    // Local state for the modal and new comment content.
    let showModal = false;
    let newCommentContent = "";

    // Fetch comments from the "comments" subcollection
    onMount(async () => {
        try {
            const querySnapshot = await getDocs(
                collection(db, "posts", postId, "comments"),
            );
            let docs: any[] = [];
            querySnapshot.forEach((docSnap) => {
                docs.push({ id: docSnap.id, ...docSnap.data() });
            });
            comments.set(docs);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    });

    /**
     * Uploads a new comment to Firestore and updates the local store.
     */
    async function uploadComment() {
        if (!newCommentContent.trim()) {
            alert("Please enter a comment.");
            return;
        }

        try {
            // Create a new document in the "comments" subcollection
            const docRef = await addDoc(
                collection(db, "posts", postId, "comments"),
                {
                    user: "current user", // Replace with your current user's name/id.
                    content: newCommentContent,
                    likes: 0,
                    timestamp: Date.now(), // Firestore server timestamp
                },
            );

            // Optionally update the local comments store so the UI updates immediately.
            comments.update((current) => [
                ...current,
                {
                    id: docRef.id,
                    user: "current user",
                    content: newCommentContent,
                    likes: 0,
                    timestamp: new Date(), // This may differ from serverTimestamp() until updated
                },
            ]);

            // Reset the modal state
            newCommentContent = "";
            showModal = false;
        } catch (error) {
            console.error("Error uploading comment:", error);
        }
    }

    async function votePost(newVote: number) {
        const cookieName = `vote_post_${postId}`;
        const previousVoteStr = getCookie(cookieName);
        const previousVote = previousVoteStr ? parseInt(previousVoteStr) : 0;

        if (previousVote === newVote) {
            alert("You have already voted in that direction!");
            return;
        }

        const voteDiff = newVote - previousVote;

        try {
            const postRef = doc(db, "posts", postId);
            await updateDoc(postRef, {
                likes: increment(voteDiff),
            });
            setCookie(cookieName, newVote.toString(), 1);
            // Update local store so UI reflects the new likes count immediately
            allPosts.update((posts) => {
                const index = posts.findIndex((post) => post.id === postId);
                if (index !== -1) {
                    posts[index].likes = (posts[index].likes || 0) + voteDiff;
                }
                return posts;
            });
        } catch (error) {
            console.error("Error updating post vote:", error);
        }
    }

    export function likePost() {
        votePost(1);
    }

    export function dislikePost() {
        votePost(-1);
    }
</script>

<div
    class="w-[40%] border-[2.5px] border-button pt-6 pb-4 px-4 bg-buttonText h-full rounded-2xl"
>
    <h1 class="text-2xl tracking-tight font-medium">
        {$allPosts[$searchViewId].name}
    </h1>
    <div class="flex flex-row gap-1 mb-2 text-md tracking-tight">
        <p class="opacity-40">
            Posted on {formatFirestoreTimestamp(
                $allPosts[$searchViewId].timestamp,
            )} by
        </p>
        <button class="hover:underline hover:opacity-100 opacity-65">
            {$allPosts[$searchViewId].user}</button
        >
    </div>
    <p class="mb-5 pr-6 leading-tight tracking-tight">
        {$allPosts[$searchViewId].description}
    </p>
    <div class="border-b-[1px] border-button/30" />
    <p class="mb-5 opacity-40 font-light text-subText">Files coming soon</p>
    <!--

    <div class="flex flex-row items-center gap-2 mb-5">
        {#each $allPosts[$searchViewId].filePaths as filePath}
            <PeDoFile src={filePath} />
        {/each}
    </div>
                    -->

    <div class="border-b-[1px] border-button/30" />
    <p class="mb-3 opacity-40 font-light text-subText">Links</p>
    <div class="flex flex-col mb-7 leading-tight">
        {#if $allPosts[$searchViewId].resources && $allPosts[$searchViewId].resources.length > 0}
            {#each $allPosts[$searchViewId].resources as resource}
                <a
                    href={resource}
                    class="underline text-black hover:text-subText"
                    >{resource}</a
                >
            {/each}
        {/if}
    </div>
    <div class="border-b-[1px] mb-4 border-button/30" />
    <div
        class="flex ml-5 flex-row gap-10 border-subText/65 w-fit py-[6px] mb-4 px-6 border-b-[2px] items-center"
    >
        <div class="flex flex-row gap-2 items-center w-fit">
            <button
                class="text-xl hover:scale-[1.4] duration-100"
                on:click={() => {
                    likePost();
                }}>🔥</button
            >
            <p class="text-md font-semibold tracking-tighter">
                {$allPosts[$searchViewId].likes}
            </p>
            <button
                class="text-xl hover:scale-[1.4] duration-100"
                on:click={() => {
                    dislikePost();
                }}>🥶</button
            >
        </div>
        <button
            class="flex flex-row hover:scale-[1.2] duration-100 gap-1 items-center w-fit"
        >
            <p class="text-xl font-semibold">+</p>
            <p class="text-xl -mb-1 font-semibold tracking-tighter">💬</p>
        </button>
        <div class="flex flex-row gap-1 items-center">
            <p class="text-xl">👀</p>
            <p class="text-md font-medium mt-[1px] tracking-tighter">
                {$allPosts[$searchViewId].views}
            </p>
        </div>
    </div>
    <div
        class="flex ml-5 flex-col gap-3 pl-3 h-fit overflow-y-scroll show-scrollbar"
    >
        {#each $comments as comment}
            <div class="flex flex-col tracking-tight">
                <button
                    class="opacity-70 hover:underline w-fit -mb-[2px] hover:opacity-100 text-sm"
                    >{comment.user}</button
                >
                <p class="leading-tight text-base mb-[2px]">
                    {comment.content}
                </p>
                <div class="flex flex-row gap-2 items-center w-fit">
                    <button
                        class="text-md hover:scale-[1.2] duration-100"
                        on:click={() => likeComment(comment.id)}>🔥</button
                    >
                    <p class="text-sm font-medium tracking-tighter">
                        {comment.likes}
                    </p>
                    <button
                        class="text-md hover:scale-[1.2] duration-100"
                        on:click={() => dislikeComment(comment.id)}>🥶</button
                    >
                </div>
            </div>
        {/each}
        <div class="">
            <textarea
                class="w-full border rounded p-2"
                rows="4"
                placeholder="Enter your comment here..."
                bind:value={newCommentContent}
            />
            <button
                class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50 w-fit"
                on:click={() => {
                    uploadComment();
                }}>Upload</button
            >
        </div>
    </div>
</div>
