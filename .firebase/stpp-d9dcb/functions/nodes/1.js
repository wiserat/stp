

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C831pdEA.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/chunks/index.CiKJv4EK.js","_app/immutable/chunks/entry.CytRNOod.js"];
export const stylesheets = [];
export const fonts = [];
