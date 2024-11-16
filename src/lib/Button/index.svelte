<script lang="ts">

    import {goto} from "$app/navigation";

    export let url: string;
</script>

<button class="bg-text text-buttonText duration-300 px-7 hover:scale-105 h-full rounded-xl text-xl font-medium"
        on:click={() => {goto(url)}}>
    <slot/>
</button>