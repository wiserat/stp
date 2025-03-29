

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.rXhZ-NUP.js","_app/immutable/chunks/scheduler.xxdsvmmB.js","_app/immutable/chunks/index.B7xeB--Q.js","_app/immutable/chunks/utils.B69g9IoG.js","_app/immutable/chunks/entry.9APSKGOP.js"];
export const stylesheets = ["_app/immutable/assets/3.DfEZMctz.css"];
export const fonts = [];
