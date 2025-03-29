<script lang="ts">
    import { onMount } from "svelte";
    import { db } from "$lib/firebase";
    import { collection, query, where, getDocs } from "firebase/firestore";
    import SearchItem from "$lib/SearchItem/index.svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { auth } from "$lib/firebase";
    import { user } from "$lib/utils";
    import { searchViewId } from "../../../utils/store";

    export let data;
    const username = $page.params.username;

    let userPosts: any[] = [];
    let totalLikes = 0;
    let totalViews = 0;
    let totalFiles = 0;
    let isLoading = true;

    onMount(async () => {
        // Redirect to /post if viewing own profile
        if ($user?.displayName === username) {
            goto("/post");
            return;
        }

        try {
            // Fetch all posts by this user
            const postsRef = collection(db, "posts");
            const q = query(postsRef, where("user", "==", username));
            const querySnapshot = await getDocs(q);

            userPosts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // Calculate statistics
            userPosts.forEach((post) => {
                totalLikes += post.likes || 0;
                totalViews += post.views || 0;
                totalFiles += post.files?.length || 0;
            });

            isLoading = false;
        } catch (error) {
            console.error("Error fetching user data:", error);
            isLoading = false;
        }
    });

    function handlePostClick(post: any) {
        const index = userPosts.findIndex((p) => p.id === post.id);
        if (index !== -1) {
            searchViewId.set(index);
            goto("/search");
        }
    }

    async function logout() {
        try {
            await auth.signOut();
            goto("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }
</script>

<div class="h-[98vh] w-screen flex justify-center">
    <div class="flex w-[65vw] flex-col">
        <div class="flex flex-row gap-5 mt-10 pl-10">
            <img
                src={$user?.photoURL || "./hannah.jpg"}
                alt=""
                class="h-[20vh] rounded-2xl"
            />
            <div class="flex flex-col item pt-4">
                <h1 class="text-6xl font-medium text-button mb-4">
                    {username}
                </h1>
                <div class="flex flex-row gap-8">
                    <div class="flex flex-col">
                        <p class="text-subText text-xl">
                            Uploads: <span class="font-bold"
                                >{userPosts.length}</span
                            >
                        </p>
                        <p class="text-subText text-xl">
                            Total likes: <span class="font-bold"
                                >{totalLikes}</span
                            >
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-subText text-xl">
                            Total views: <span class="font-bold"
                                >{totalViews}</span
                            >
                        </p>
                        <p class="text-subText text-xl">
                            Files shared: <span class="font-bold"
                                >{totalFiles}</span
                            >
                        </p>
                    </div>
                </div>
                {#if $user?.displayName === username}
                    <button
                        class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50 w-fit"
                        on:click={logout}
                    >
                        Logout
                    </button>
                {/if}
            </div>
        </div>

        <div class="h-[1px] bg-button/30 mt-4"></div>
        <p class="mb-5 opacity-40 font-light text-subText">Uploads</p>

        <div class="overflow-y-scroll show-scrollbar">
            {#if isLoading}
                <p>Loading...</p>
            {:else if userPosts.length === 0}
                <p class="text-subText">No uploads yet</p>
            {:else}
                {#each userPosts as post}
                    <div on:click={() => handlePostClick(post)}>
                        <SearchItem item={post} />
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
