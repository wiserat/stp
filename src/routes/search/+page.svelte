<script lang="ts">
    import { items } from "$lib/SearchItem/tempObject.ts";
    import SearchItem from "$lib/SearchItem/index.svelte";
    import { allCategories, allSubjects, allSchools, searchViewId } from "../../utils/store.ts";
    import DetailedView from "$lib/SearchItem/DetailedView.svelte";
    import Button from "$lib/Button/index.svelte";
    import { onMount } from "svelte";
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "../../clientApp.ts";
    import Category from "$lib/Category/index.svelte";

    let data = [];

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(data);
    });

    let search = '';
    let selectedCategories: string[] = [];
    let selectedSubjects: string[] = [];
    let selectedSchools: string[] = [];
    let showFilter = false;

    // Reactive filteredItems array
    $: filteredItems = items.filter(item => {
        const matchesCategory = selectedCategories.length === 0 || item.categories.some(category => selectedCategories.includes(category));
        const matchesSubject = selectedSubjects.length === 0 || item.subjects.some(subject => selectedSubjects.includes(subject));
        const matchesSchool = selectedSchools.length === 0 || selectedSchools.includes(item.school);
        return matchesCategory && matchesSubject && matchesSchool;
    });
</script>

<div class="h-[98vh] flex flex-row cursor-default gap-20 items-center justify-center py-10">
    <div class="flex flex-col h-full {$searchViewId === -1 ? 'w-[50%]' : 'w-[30%]'}">
        <div class="w-full flex flex-row gap-2">
        <button class="text-subText font-medium text-lg whitespace-nowrap" on:click={() => { showFilter = !showFilter }}>
            Filters {showFilter ? '▲' : '▼'}
        </button>
            <input
                bind:value={search}
                class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"
                placeholder="Smrt krásných srnců ..."
                type="text"
            >
            <Button url="/search">Search</Button>
        </div>

        {#if showFilter}
            <div class="h-[11rem] justify-center flex flex-col gap-1">
            <div class="flex flex-row  overflow-x-auto hide-scrollbar gap-2">
                {#each allCategories as category}
                    <button
                        on:click={() => {
                            if (selectedCategories.includes(category)) {
                                selectedCategories = selectedCategories.filter(c => c !== category);
                            } else {
                                selectedCategories = [...selectedCategories, category];
                            }
                        }}>
                        <Category text={category} selected={selectedCategories.includes(category)} />
                    </button>
                {/each}
            </div>

            <div class="flex flex-row overflow-x-auto  hide-scrollbar gap-2">
                {#each allSubjects as subject}
                    <button
                        on:click={() => {
                            if (selectedSubjects.includes(subject)) {
                                selectedSubjects = selectedSubjects.filter(s => s !== subject);
                            } else {
                                selectedSubjects = [...selectedSubjects, subject];
                            }
                        }}>
                        <Category text={subject} selected={selectedSubjects.includes(subject)} />
                    </button>
                {/each}
            </div>

            <div class="flex flex-row overflow-x-auto  hide-scrollbar gap-2">
                {#each allSchools as school}
                    <button
                        on:click={() => {
                            if (selectedSchools.includes(school)) {
                                selectedSchools = selectedSchools.filter(s => s !== school);
                            } else {
                                selectedSchools = [...selectedSchools, school];
                            }
                        }}>
                        <Category text={school} selected={selectedSchools.includes(school)} />
                    </button>
                {/each}
            </div>
            </div>
        {/if}


        <ul class="overflow-y-scroll show-scrollbar p-2">
            {#each filteredItems as item}
                <li on:click={() => {
                    if ($searchViewId === -1 || $searchViewId !== item.id) {
                        $searchViewId = item.id;
                    } else {
                        $searchViewId = -1;
                    }
                }}>
                    <SearchItem {item} />
                </li>
            {/each}
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