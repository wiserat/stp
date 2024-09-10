<script lang="ts">

    import {goto} from "$app/navigation";

    export let url: string;
</script>

<button class="bg-text text-buttonText duration-300 px-7 hover:scale-105 py-3 rounded-xl text-2xl font-medium"
        on:click={() => {goto(url)}}>
    <slot/>
</button>