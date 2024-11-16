<script lang="ts">

    export let src: string;
    console.log(src)
    let open = false;


</script>

<button
        class=" mb-7"
        on:click={() => open = !open}
        style="position: relative; padding: 0; border: none; background: none; display: inline-block;"
>
    <!-- Wrapper around iframe to control width/height -->
    <div
            class="w-[8vw] h-[14vh]"
            style="position: relative; overflow: hidden;"
    >
        <iframe
                class=""
                src={src}
                style="width: 100%; height: 100%; pointer-events: none;"
        ></iframe>
    </div>
</button>

{#if open}
    <div class="fixed w-screen top-0 flex left-0 h-screen items-center justify-center z-30 bg-black/70 backdrop-blur"
         on:click={() => open = !open}>
        <iframe
                class="w-[60vw] h-[95vh]"
                src={src}
        ></iframe>
        <div class="h-full flex items-start">
            <button on:click={() => open = !open}
                    class="medievalsharp-regular pl-3 text-6xl mt-10 duration-300 text-background">
                X
            </button>
        </div>
    </div>
{/if}