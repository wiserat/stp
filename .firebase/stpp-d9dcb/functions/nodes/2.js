

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BVqWcwdC.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/chunks/index.CiKJv4EK.js","_app/immutable/chunks/store.BfjfVAg0.js","_app/immutable/chunks/entry.CytRNOod.js"];
export const stylesheets = ["_app/immutable/assets/2.DRXETXMS.css"];
export const fonts = [];
