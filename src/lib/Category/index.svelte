<script lang="ts">
    export let text:string;
    export let selected:boolean;
</script>


<div class="${!selected ? ' text-button border-button/70' : ' bg-buttonText text-subText border-button/100'} whitespace-nowrap rounded-xl border-[2.5px] px-2 py-1">
    {text}
</div>