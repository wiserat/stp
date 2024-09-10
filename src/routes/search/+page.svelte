<script>
    import {itemList} from "$lib/SearchItem/tempObject.ts";
    import SearchItem from "$lib/SearchItem/index.svelte";

    let search = '';

    let view = -1;
</script>

<div class="h-[98vh] flex flex-row gap-20 items-center justify-center py-10">
    <div class="flex flex-col h-full w-[30%]">
        <input
                bind:value={search}
                class="border-[2.5px] border-button bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"
                placeholder="Smrt krásných srnců ..."
                type="text"
        >
        <div>kategorie...</div>
        <ul>
            {#each itemList.items as item}
                <li on:click={() => {
                    if (view === -1 || view !== item.id) {
                        view = item.id;
                    } else {
                        view = -1
                    }
                }}>
                    <SearchItem {item}/>
                </li>
            {/each}
        </ul>
    </div>
    {#if view !== -1}
        <div class="w-[40%] border-[2.5px] border-button bg-buttonText h-full rounded-2xl">
            {itemList.items[view - 1].name}
        </div>
    {/if}
</div>