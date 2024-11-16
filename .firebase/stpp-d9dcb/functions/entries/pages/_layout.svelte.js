import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[2vh] w-full flex justify-center"><ul class="flex flex-row justify-between w-full max-w-screen-2xl items-center text-subText/60 text-sm tracking-tighter px-40"><li class="cursor-pointer" data-svelte-h="svelte-15a6w0x">LinkedIn</li> <li class="" data-svelte-h="svelte-hw14v8">jonas.tenora@gmail.com</li> <li class="cursor-pointer" data-svelte-h="svelte-mwi28v">Github</li></ul></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1a8hi44_START --><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin href="https://fonts.gstatic.com" rel="preconnect"><link href="https://fonts.googleapis.com/css2?family=MedievalSharp&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-1a8hi44_END -->`, ""} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
