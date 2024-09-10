<script lang="ts">
    import {onMount} from 'svelte';
    import {infoId, slideToggle} from "../../utils/store";

    export let uniqueId: string;

    onMount(() => {
        const hoverElement = document.getElementById(`hover-element${uniqueId}`);
        const tooltip = document.getElementById(`tooltip${uniqueId}`);

        if (hoverElement && tooltip) {
            hoverElement.addEventListener('mousemove', (e: MouseEvent) => {
                tooltip.classList.remove('hidden');
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY + 10}px`;
            });

            hoverElement.addEventListener('mouseleave', () => {
                tooltip.classList.add('hidden');
            });
        }
    });

</script>


<button class="flex flex-col items-center cursor-pointer z-10 justify-center w-full h-full relative"
        id={`hover-element${uniqueId}`}
        on:click={() => {$slideToggle = !$slideToggle; $infoId = +uniqueId}}>
    <slot/>
</button>
<div class="hidden absolute z-10 w-28 text-button tracking-tight font-medium text-center"
     id={`tooltip${uniqueId}`}>
    Click for info
</div>