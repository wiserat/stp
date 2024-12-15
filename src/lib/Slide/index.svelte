<script lang="ts">
    import {infoId, slideToggle} from "../../utils/store.ts";
    import {info} from "$lib/Slide/info";
    import {onMount} from "svelte";


    onMount(() => {
        const closeElement = document.getElementById(`close-element`);
        const closetip = document.getElementById(`closetip`);

        if (closeElement && closetip) {
            closeElement.addEventListener('mousemove', (e: MouseEvent) => {
                closetip.classList.remove('hidden');
                closetip.style.left = `${e.pageX + 10}px`;
                closetip.style.top = `${e.pageY + 10}px`;
            });

            closeElement.addEventListener('mouseleave', () => {
                closetip.classList.add('hidden');
            });
        }
    });
</script>

<div class="fixed w-full h-full z-40 flex flex-row bg-black/50 backdrop-blur slide-container {$slideToggle ? 'visible' : ''}">
    <div class="w-[45vw] pl-16 pr-12 flex flex-col items-center justify-center gap-5 bg-text text-buttonText border-r-2 border-buttonText slide-content">
        <h1 class="tracking-tight w-full text-5xl">{info[$infoId].heading}</h1>
        <p class="text-lg tracking-tight leading-tight">{info[$infoId].text}</p>
        <button class="medievalsharp-regular text-5xl mt-7 hover:scale-110 duration-300"
                on:click={() => { $slideToggle = !$slideToggle; }}>X
        </button>
    </div>
    <button class="w-[55vw]" id="close-element" on:click={() => { $slideToggle = !$slideToggle; }}></button>
</div>
<div class="hidden absolute z-50 w-32 text-buttonText tracking-tight font-medium text-center"
     id="closetip">
    Click to close
</div>

<style>
    .slide-container {
        --tw-bg-opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .slide-container.visible {
        --tw-bg-opacity: 1;
        visibility: visible;
    }

    .slide-content {
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    .slide-container.visible .slide-content {
        transform: translateX(0);
    }
</style>