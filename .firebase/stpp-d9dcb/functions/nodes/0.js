

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Cu3vWzUT.js","_app/immutable/chunks/scheduler.Df_9wCsF.js","_app/immutable/chunks/index.CiKJv4EK.js"];
export const stylesheets = ["_app/immutable/assets/0.fZbHum85.css"];
export const fonts = [];
