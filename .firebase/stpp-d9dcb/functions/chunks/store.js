import { c as create_ssr_component } from "./ssr.js";
import "./client.js";
import { w as writable } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  return `<button class="bg-text text-buttonText duration-300 px-7 hover:scale-105 h-full rounded-xl text-xl font-medium">${slots.default ? slots.default({}) : ``}</button>`;
});
let slideToggle = writable(false);
let infoId = writable(0);
let searchViewId = writable(-1);
function reformatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear().toString().slice(-2)}`;
}
export {
  Button as B,
  searchViewId as a,
  infoId as i,
  reformatTimestamp as r,
  slideToggle as s
};
