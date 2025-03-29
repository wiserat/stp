<script lang="ts">
    import { allCategories, allSchools, allSubjects } from "../../utils/store";
    import Category from "$lib/Category/index.svelte";
    import Button from "$lib/Button/index.svelte";
    import { onMount } from "svelte";
    import { user } from "$lib/utils";
    import { goto } from "$app/navigation";
    import { signOut, type User } from "firebase/auth";
    import { auth, db, storage } from "$lib/firebase";
    import {
        collection,
        addDoc,
        query,
        where,
        getDocs,
        updateDoc,
    } from "firebase/firestore";
    import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

    let userData: User;
    onMount(() => {
        const unsubscribe = user.subscribe(
            async (firebaseUser: User | null) => {
                if (!firebaseUser) {
                    goto("/login");
                } else {
                    console.log(firebaseUser);
                    userData = firebaseUser;
                    await fetchUploadedDocumentsCount();
                    await fetchTotalLikes();
                }
            },
        );
        return unsubscribe;
    });

    let uploadedDocumentsCount = 0; // To store the count of uploaded documents

    async function fetchUploadedDocumentsCount() {
        if (!userData?.displayName) return;

        try {
            const postsRef = collection(db, "posts");
            const q = query(
                postsRef,
                where("user", "==", userData.displayName),
            );
            const querySnapshot = await getDocs(q);

            // Set the count of uploaded documents
            uploadedDocumentsCount = querySnapshot.size;
        } catch (error) {
            console.error("Error fetching uploaded documents count:", error);
        }
    }

    let totalLikes = 0; // To store the total likes for the user's posts

    async function fetchTotalLikes() {
        if (!userData?.displayName) return;

        try {
            const postsRef = collection(db, "posts");
            const q = query(
                postsRef,
                where("user", "==", userData.displayName),
            );
            const querySnapshot = await getDocs(q);

            // Calculate the total likes
            totalLikes = querySnapshot.docs.reduce((sum, doc) => {
                const data = doc.data();
                return sum + (data.likes || 0); // Add the likes property, defaulting to 0 if undefined
            }, 0);
        } catch (error) {
            console.error("Error fetching total likes:", error);
        }
    }

    async function logout() {
        try {
            await signOut(auth);
            goto("/login");
        } catch (error: any) {
            console.error("Error signing out:", error);
        }
    }

    let name: string = "";
    let description: string = "";
    let selectedCategories: string[] = [];
    let selectedSubjects: string[] = [];
    let selectedSchools: string[] = [];
    let links: string[] = [""]; // Starts with one empty link
    let files: File[] = []; // Array to hold uploaded files
    let isDragging = false; // For drag-and-drop state
    let linkValidity: boolean[] = [true]; // Array to track validity of each link

    let fileInput: HTMLInputElement; // Reference to the hidden file input

    async function createPost() {
        try {
            // Create a new document in the "posts" collection
            const docRef = await addDoc(collection(db, "posts"), {
                name,
                description,
                categories: selectedCategories,
                subjects: selectedSubjects,
                schools: selectedSchools,
                links,
                likes: 0,
                views: 0,
                user: userData?.displayName,
                timestamp: new Date(),
                files: [], // Will be populated with file URLs
            });

            // Upload files if any exist
            if (files.length > 0) {
                const fileUrls = await Promise.all(
                    files.map(async (file) => {
                        // Create a reference to the file in Firebase Storage
                        const sanitizedName = name
                            .replace(/[^a-zA-Z0-9-_]/g, "_")
                            .toLowerCase();
                        const storageRef = ref(
                            storage,
                            `posts/${sanitizedName}/${file.name}`,
                        );

                        // Upload the file
                        await uploadBytes(storageRef, file);

                        // Get the download URL
                        const downloadUrl = await getDownloadURL(storageRef);

                        return {
                            name: file.name,
                            url: downloadUrl,
                            type: file.type,
                            size: file.size,
                        };
                    }),
                );

                // Update the post document with file URLs
                await updateDoc(docRef, {
                    files: fileUrls,
                });
            }

            // Create initial comment
            await addDoc(collection(db, "posts", docRef.id, "comments"), {
                user: "system",
                content: "This is the first comment.",
                likes: 0,
                timestamp: new Date(),
            });

            console.log("Document written with ID:", docRef.id);
            goto("/search");
        } catch (error) {
            console.error("Error adding document:", error);
        }
    }

    function addLinkField() {
        if (links.length < 3) {
            links = [...links, ""];
            linkValidity = [...linkValidity, true];
        }
    }

    function updateLink(index: number, value: string) {
        links[index] = value;
        validateLink(index, value);
    }

    function removeLink(index: number) {
        links = links.filter((_, i) => i !== index);
        linkValidity = linkValidity.filter((_, i) => i !== index);
    }

    function validateLink(index: number, value: string) {
        if (value.trim() === "") {
            linkValidity[index] = true; // Empty links are valid
            return;
        }
        try {
            new URL(value); // If the URL constructor doesn't throw, it's valid
            linkValidity[index] = true;
        } catch {
            linkValidity[index] = false;
        }
    }

    function handleFileDrop(event: DragEvent) {
        event.preventDefault();
        isDragging = false;
        if (event.dataTransfer?.files) {
            const newFiles = Array.from(event.dataTransfer.files).slice(
                0,
                5 - files.length,
            );
            files = [...files, ...newFiles];
        }
    }

    function handleFileDragOver(event: DragEvent) {
        event.preventDefault();
        isDragging = true;
    }

    function handleFileDragLeave() {
        isDragging = false;
    }

    function removeFile(index: number) {
        files = files.filter((_, i) => i !== index);
    }

    function handleFileInputChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            const newFiles = Array.from(input.files).slice(0, 5 - files.length);
            files = [...files, ...newFiles];
        }
    }

    function openFileDialog() {
        fileInput.click(); // Programmatically open the file input
    }
</script>

<button
    on:click={() => {
        goto("/search");
    }}
    class="fixed top-5 left-5 text-button">Zpět</button
>
<div class="h-[98vh] w-screen flex justify-center">
    <div class="flex w-[65vw] flex-col">
        <div class="flex flex-row gap-5 mt-10 pl-10">
            <img
                src={userData ? userData.photoURL : "./hannah.jpg"}
                alt=""
                class="h-[20vh] rounded-2xl"
            />
            <div class="flex flex-col item pt-4">
                <h1 class="text-6xl font-medium text-button mb-4">
                    {userData ? userData.displayName : ""}
                </h1>
                <p class="text-subText text-xl">
                    Number of uploaded documents: <span class="font-bold"
                        >{uploadedDocumentsCount}</span
                    >
                </p>
                <p class="text-subText text-xl">
                    Total rating on uploaded documents: <span class="font-bold"
                        >{totalLikes}</span
                    >
                </p>
                <button
                    class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50 w-fit"
                    on:click={() => {
                        logout();
                    }}>Logout</button
                >
            </div>
        </div>

        <div class="h-[1px] bg-button/30 mt-4"></div>
        <p class="mb-5 opacity-40 font-light text-subText">Upload</p>

        <div class="flex flex-row gap-4">
            <!-- Left Column -->
            <div class="flex flex-col w-1/2">
                <input
                    bind:value={name}
                    class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top"
                    placeholder="Name (e.g., Smrt krásných srnců - čtenářák)"
                    type="text"
                />

                <div class="h-[11rem] justify-center flex flex-col gap-1 mt-4">
                    <div
                        class="flex flex-row overflow-x-auto hide-scrollbar gap-2"
                    >
                        {#each allCategories as category}
                            <button
                                on:click={() => {
                                    if (selectedCategories.includes(category)) {
                                        selectedCategories =
                                            selectedCategories.filter(
                                                (c) => c !== category,
                                            );
                                    } else {
                                        selectedCategories = [
                                            ...selectedCategories,
                                            category,
                                        ];
                                    }
                                }}
                            >
                                <Category
                                    text={category}
                                    selected={selectedCategories.includes(
                                        category,
                                    )}
                                />
                            </button>
                        {/each}
                    </div>

                    <div
                        class="flex flex-row overflow-x-auto hide-scrollbar gap-2 mt-2"
                    >
                        {#each allSubjects as subject}
                            <button
                                on:click={() => {
                                    if (selectedSubjects.includes(subject)) {
                                        selectedSubjects =
                                            selectedSubjects.filter(
                                                (s) => s !== subject,
                                            );
                                    } else {
                                        selectedSubjects = [
                                            ...selectedSubjects,
                                            subject,
                                        ];
                                    }
                                }}
                            >
                                <Category
                                    text={subject}
                                    selected={selectedSubjects.includes(
                                        subject,
                                    )}
                                />
                            </button>
                        {/each}
                    </div>

                    <div
                        class="flex flex-row overflow-x-auto hide-scrollbar gap-2 mt-2"
                    >
                        {#each allSchools as school}
                            <button
                                on:click={() => {
                                    if (selectedSchools.includes(school)) {
                                        selectedSchools =
                                            selectedSchools.filter(
                                                (s) => s !== school,
                                            );
                                    } else {
                                        selectedSchools = [
                                            ...selectedSchools,
                                            school,
                                        ];
                                    }
                                }}
                            >
                                <Category
                                    text={school}
                                    selected={selectedSchools.includes(school)}
                                />
                            </button>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="flex flex-col w-1/2">
                <textarea
                    bind:value={description}
                    class="border-[2.5px] border-button w-full h-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top resize-none"
                    placeholder="Description (e.g., Brief summary or details)"
                ></textarea>
            </div>
        </div>

        <!-- Links and File Upload Section -->
        <div class="mt-4 flex gap-8">
            <!-- Links Section -->
            <div class="w-1/2">
                <h2 class="text-xl font-medium text-button mb-2">Add Links</h2>
                {#each links as link, index}
                    <div class="flex items-center gap-2 mb-2">
                        <input
                            bind:value={links[index]}
                            on:input={(e) => {
                                const target = e.currentTarget;
                                updateLink(index, target.value);
                            }}
                            class={`border-[2.5px] ${linkValidity[index] ? "border-button" : "border-red-500"} w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top`}
                            placeholder={`Link ${index + 1}`}
                            type="url"
                        />
                        <button
                            on:click={() => removeLink(index)}
                            class="text-red-500 font-medium"
                        >
                            Remove
                        </button>
                    </div>
                {/each}
                <button
                    on:click={addLinkField}
                    class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50"
                    disabled={links.length >= 3}
                >
                    Add Another Link
                </button>
            </div>

            <!-- File Upload Section -->
            <div class="w-1/2">
                <h2 class="text-xl font-medium text-button mb-2">
                    Upload Files
                </h2>
                <div
                    class={`border-[2.5px] border-dashed ${isDragging ? "border-subText" : "border-button"} w-full bg-buttonText text-subText text-base px-4 py-8 rounded-xl font-medium flex justify-center items-center cursor-pointer`}
                    on:dragover={handleFileDragOver}
                    on:dragleave={handleFileDragLeave}
                    on:drop={handleFileDrop}
                    on:click={openFileDialog}
                >
                    {#if files.length > 0}
                        <ul>
                            {#each files as file, index}
                                <li
                                    class="flex justify-between items-center gap-2 mb-1"
                                >
                                    <span>{file.name}</span>
                                    <button
                                        on:click={() => removeFile(index)}
                                        class="text-red-500 font-medium"
                                    >
                                        Remove
                                    </button>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p>Drag and drop files here or click to upload</p>
                    {/if}
                </div>
                <input
                    type="file"
                    bind:this={fileInput}
                    on:change={handleFileInputChange}
                    class="hidden"
                    multiple
                />
                <p class="text-sm text-subText mt-1">
                    Maximum 5 files allowed.
                </p>
            </div>
        </div>
        <div class="h-full flex justify-center items-end pb-4">
            <button
                class="bg-button text-white w-[10rem] h-14 rounded-xl font-medium text-xl mt-2"
                disabled={links.length >= 3}
                on:click={createPost}
            >
                Upload
            </button>
        </div>
    </div>
</div>
