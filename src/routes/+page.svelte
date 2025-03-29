<script lang="ts">
    import Button from "$lib/Button/index.svelte";
    import LandingBento from "$lib/LandingBento/index.svelte";
    import Slide from "$lib/Slide/index.svelte";
    import Image from "$lib/LandingBento/image.svelte";
    import { info } from "$lib/Slide/info.ts";
    import { infoId, slideToggle } from "../utils/store";

    let search = "";
</script>

<Slide />
<div class="bg-background h-[98vh] relative cursor-default hide-scrollbar">
    <!-- <div class="flex flex-col items-center justify-center w-full h-full">
        <div class="flex flex-row items-center justify-center w-full h-full p-32 gap-32">
            <LandingBento uniqueId="0">
                {info[0].heading}
                <Image src="./cat.gif"/>
            </LandingBento>
            <LandingBento uniqueId="1">
                {info[1].heading}
            </LandingBento>
        </div>
        <div class="flex flex-row items-center justify-center w-full h-full p-32 gap-32">
            <LandingBento uniqueId="2">
                {info[2].heading}
            </LandingBento>
            <LandingBento uniqueId="3">
                {info[3].heading}
            </LandingBento>
        </div>
    </div> -->

    <div
        class="absolute inset-0 flex z-0 flex-col text-center items-center justify-center gap-12"
    >
        <div class="text-text text-6xl font-bold tracking-tight underline">
            Search for test answers, <br /> homeworks and other!
        </div>
        <div class="flex flex-row items-center gap-2">
            <input
                bind:value={search}
                class="border-[2.5px] border-button w-[25vw] bg-buttonText text-subText text-xl px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"
                placeholder="Smrt krásných srnců ..."
                type="text"
            />
            <Button url="/search">Search</Button>
        </div>
        <button
            class="flex -mb-40 mt-32 flex-col underline text-subText tracking-tight items-center cursor-pointer z-10 justify-center"
            on:click={() => {
                $slideToggle = !$slideToggle;
                $infoId = 4;
            }}
        >
            About our mission
        </button>
    </div>
</div>
