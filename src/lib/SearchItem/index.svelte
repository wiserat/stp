<script lang="ts">
    import { formatFirestoreTimestamp, searchViewId } from "../../utils/store";

    export let item: any;
</script>

<div class="w-full border-b-[1px] border-button/30 py-3">
    <p class="text-sm font-light text-subText/60 -mb-1">
        Posted {formatFirestoreTimestamp(item.timestamp)}
    </p>
    <h1
        class="border-subText tracking-tight mb-1 {$searchViewId === item.id
            ? 'underline opacity-60'
            : ''} hover:underline cursor-pointer font-medium text-xl"
    >
        {item.name}
    </h1>
    <p class="mb-1 leading-tight tracking-tight">{item.description}</p>
    <div class="flex flex-row items-center gap-[2px]">
        <p class="text-xl">
            {item.likes === 0 ? "😐" : item.likes > 0 ? "🔥" : "🥶"}
        </p>
        <p class="text-base font-medium tracking-tighter -mb-[1px]">
            {item.likes}
        </p>
        <p class="text-lg opacity-90 ml-5">👀</p>
        <p class="text-xs opacity-70 font-medium tracking-tighter">
            {item.views}
        </p>
        <!--
        <p class="text-lg opacity-90 ml-5">💬</p>
        <p class="text-xs opacity-70 font-medium tracking-tighter">
            {item.comments}
        </p>
        -->
    </div>
</div>
