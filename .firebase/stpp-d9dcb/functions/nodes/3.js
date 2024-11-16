

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.YZKxHVvU.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/chunks/index.CiKJv4EK.js","_app/immutable/chunks/store.BfjfVAg0.js","_app/immutable/chunks/entry.CytRNOod.js"];
export const stylesheets = [];
export const fonts = [];
