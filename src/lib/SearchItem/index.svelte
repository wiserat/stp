<script lang="ts">
    import type {Item} from "./tempObject";

    export let item: Item;

</script>

<div class="w-full border-b-[1px] border-button/30">
    <h1 class="border-subText tracking-tight font-medium text-3xl">{item.name}</h1>
</div>