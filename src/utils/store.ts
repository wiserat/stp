import {writable} from "svelte/store";

export let slideToggle = writable(false);
export let infoId = writable(0);

export let searchViewId = writable(-1);

export function reformatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear().toString().slice(-2)}`;
}