<script lang="ts">
    import SearchItem from "$lib/SearchItem/index.svelte";
    import {
        allCategories,
        allSubjects,
        allSchools,
        searchViewId,
    } from "../../utils/store";
    import DetailedView from "$lib/SearchItem/DetailedView.svelte";
    import Button from "$lib/Button/index.svelte";
    import { onMount } from "svelte";
    import {
        collection,
        doc,
        getDocs,
        increment,
        updateDoc,
    } from "firebase/firestore";
    import { db } from "../../clientApp";
    import Category from "$lib/Category/index.svelte";
    import { allPosts } from "$lib/utils";

    let data = [];

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(data);
    });

    let search = "";
    let selectedCategories: string[] = [];
    let selectedSubjects: string[] = [];
    let selectedSchools: string[] = [];
    let showFilter = false;
    let allPostsLocal = $allPosts;

    $: filteredItems = $allPosts.filter((item: any) => {
        const matchesCategory =
            selectedCategories.length === 0 ||
            item.categories?.some((category: string) =>
                selectedCategories.includes(category.toLowerCase()),
            );
        const matchesSubject =
            selectedSubjects.length === 0 ||
            item.subjects?.some((subject: string) =>
                selectedSubjects.includes(subject.toLowerCase()),
            );
        const matchesSchool =
            selectedSchools.length === 0 ||
            selectedSchools.includes(item.school);
        return matchesCategory && matchesSubject && matchesSchool;
    });

    export async function incrementDocumentViews(
        documentId: string,
    ): Promise<void> {
        try {
            const docRef = doc(db, "posts", documentId);
            await updateDoc(docRef, {
                views: increment(1),
            });
            console.log("Views updated successfully");
        } catch (error) {
            console.error("Error updating views:", error);
        }
    }
</script>

<div
    class="h-[98vh] flex flex-row cursor-default gap-20 items-center justify-center py-10"
>
    <div
        class="flex flex-col h-full {$searchViewId === -1
            ? 'w-[50%]'
            : 'w-[30%]'}"
    >
        <div class="w-full flex flex-row gap-2">
            <button
                class="text-subText font-medium text-lg whitespace-nowrap"
                on:click={() => {
                    showFilter = !showFilter;
                }}
            >
                Filters {showFilter ? "▲" : "▼"}
            </button>
            <input
                bind:value={search}
                class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"
                placeholder="Smrt krásných srnců ..."
                type="text"
            />
            <Button url="/search">Search</Button>
        </div>

        {#if showFilter}
            <div class="h-[11rem] justify-center flex flex-col gap-1">
                <div class="flex flex-row overflow-x-auto hide-scrollbar gap-2">
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
                                        category.toLowerCase(),
                                    ];
                                }
                            }}
                        >
                            <Category
                                text={category}
                                selected={selectedCategories.includes(category)}
                            />
                        </button>
                    {/each}
                </div>

                <div class="flex flex-row overflow-x-auto hide-scrollbar gap-2">
                    {#each allSubjects as subject}
                        <button
                            on:click={() => {
                                if (selectedSubjects.includes(subject)) {
                                    selectedSubjects = selectedSubjects.filter(
                                        (s) => s !== subject,
                                    );
                                } else {
                                    selectedSubjects = [
                                        ...selectedSubjects,
                                        subject.toLowerCase(),
                                    ];
                                }
                            }}
                        >
                            <Category
                                text={subject}
                                selected={selectedSubjects.includes(subject)}
                            />
                        </button>
                    {/each}
                </div>

                <div class="flex flex-row overflow-x-auto hide-scrollbar gap-2">
                    {#each allSchools as school}
                        <button
                            on:click={() => {
                                if (selectedSchools.includes(school)) {
                                    selectedSchools = selectedSchools.filter(
                                        (s) => s !== school,
                                    );
                                } else {
                                    selectedSchools = [
                                        ...selectedSchools,
                                        school.toLowerCase(),
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
        {/if}

        <ul class="overflow-y-scroll show-scrollbar p-2">
            {#if filteredItems.length > 0}
                {#each filteredItems as item, i}
                    <li
                        on:click={async () => {
                            if ($searchViewId === -1 || $searchViewId !== i) {
                                $searchViewId = i;
                            } else {
                                $searchViewId = -1;
                            }
                            console.log($searchViewId);
                            await incrementDocumentViews(item.id);
                        }}
                    >
                        <SearchItem {item} />
                    </li>
                {/each}
            {:else}
                <li>No items found</li>
            {/if}
        </ul>
    </div>
    {#if $searchViewId !== -1}
        <DetailedView />
    {/if}
</div>

<div class="fixed right-10 bottom-10 h-[3.8rem]">
    <Button url="/post">
        <span class="font-black">+</span>
        upload
    </Button>
</div>
