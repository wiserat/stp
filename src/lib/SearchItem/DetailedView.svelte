<script>
    import {items} from "$lib/SearchItem/tempObject.ts";
    import {reformatTimestamp, searchViewId} from "../../utils/store.ts";
    import PeDoFile from "$lib/PeDoFile/index.svelte";
</script>


<div class="w-[40%] border-[2.5px] border-button pt-6 pb-4 px-4 bg-buttonText h-full rounded-2xl">
    <h1 class="text-2xl tracking-tight font-medium">{items[$searchViewId].name} </h1>
    <div class="flex flex-row gap-1 mb-2 text-md tracking-tight">
        <p class="opacity-40">Posted on {reformatTimestamp(items[$searchViewId].timestamp)} by</p>
        <button class="hover:underline hover:opacity-100 opacity-65"> {items[$searchViewId].uploader.username}</button>
    </div>
    <p class="mb-5 pr-6 leading-tight tracking-tight">{items[$searchViewId].description}</p>
    <div class="border-b-[1px] border-button/30 "/>
    <p class="mb-5 opacity-40 font-light text-subText">Files</p>
    <div class="flex flex-row items-center gap-2 mb-5">
        {#each items[$searchViewId].filePaths as filePath}
            <PeDoFile src={filePath}/>
        {/each}
    </div>
    <div class="border-b-[1px] border-button/30 "/>
    <p class="mb-3 opacity-40 font-light text-subText">Links</p>
    <div class="flex flex-col  mb-7 leading-tight">
        {#each items[$searchViewId].resources as resource}
            <a href={resource} class="underline text-black hover:text-subText">{resource}</a>
        {/each}
    </div>
    <div class="border-b-[1px] mb-4 border-button/30 "/>
    <div class="flex ml-5 flex-row gap-10 border-subText/65 w-fit py-[6px] mb-4 px-6 border-b-[2px] items-center">
        <div class="flex flex-row gap-2 items-center w-fit">
            <button class="text-xl hover:scale-[1.4] duration-100">🔥</button>
            <p class="text-md font-semibold tracking-tighter">{items[$searchViewId].likes}</p>
            <button class="text-xl hover:scale-[1.4] duration-100">🥶</button>
        </div>
        <button class="flex flex-row hover:scale-[1.2] duration-100 gap-1 items-center w-fit">
            <p class="text-xl font-semibold">+</p>
            <p class="text-xl -mb-1 font-semibold tracking-tighter">💬</p>
        </button>
        <div class="flex flex-row gap-1 items-center">
            <p class="text-xl">👀</p>
            <p class="text-md font-medium mt-[1px] tracking-tighter">{items[$searchViewId].views}</p>
        </div>
    </div>
    <div class="flex ml-5 flex-col gap-3 pl-3 h-[20vh] overflow-y-scroll show-scrollbar">
        {#each items[$searchViewId].comments as comment}
            <div class="flex flex-col tracking-tight">
                <button class="opacity-70 hover:underline w-fit -mb-[2px] hover:opacity-100 text-sm">{comment.username}</button>
                <p class="leading-tight text-base mb-[2px]">{comment.text}</p>
                <div class="flex flex-row gap-2 items-center w-fit">
                    <button class="text-md hover:scale-[1.2] duration-100">🔥</button>
                    <p class="text-sm font-medium tracking-tighter">{comment.likes}</p>
                    <button class="text-md hover:scale-[1.2] duration-100">🥶</button>
                </div>
            </div>
        {/each}
    </div>
</div>