

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DdYyzcRn.js","_app/immutable/chunks/scheduler.xxdsvmmB.js","_app/immutable/chunks/index.B7xeB--Q.js"];
export const stylesheets = ["_app/immutable/assets/0.Dc4L8MHc.css"];
export const fonts = [];
