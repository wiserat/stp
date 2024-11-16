<script lang="ts">
    import {items} from "$lib/SearchItem/tempObject.ts";
    import SearchItem from "$lib/SearchItem/index.svelte";
    import {searchViewId} from "../../utils/store.ts";
    import DetailedView from "$lib/SearchItem/DetailedView.svelte";
    import Button from "$lib/Button/index.svelte";
    import {onMount} from "svelte";
    import {collection, getDocs} from "firebase/firestore";
    import {db} from "../../clientApp.ts";

    let data = [];

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        console.log(data);
    });

    let search = '';

</script>

<div class="h-[98vh] flex flex-row cursor-default gap-20 items-center justify-center py-10">
    <div class="flex flex-col h-full {$searchViewId === -1 ? 'w-[50%]' : 'w-[30%]'}">
        <div class="w-full flex flex-row gap-2">
            <input
                    bind:value={search}
                    class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"
                    placeholder="Smrt krásných srnců ..."
                    type="text"
            >
            <Button url="/search">Search</Button>

        </div>
        <div>kategorie...</div>
        <ul class="overflow-y-scroll show-scrollbar p-2">
            {#each items as item}
                <li on:click={() => {
                    if ($searchViewId === -1 || $searchViewId !== item.id) {
                        $searchViewId = item.id;
                    } else {
                        $searchViewId = -1
                    }
                }}>
                    <SearchItem {item}/>
                </li>
            {/each}
        </ul>
    </div>
    {#if $searchViewId !== -1}
        <DetailedView/>
    {/if}
</div>