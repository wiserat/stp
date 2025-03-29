import { c as create_ssr_component } from "./ssr.js";
import "./client.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  return `<button class="bg-text text-buttonText duration-300 px-7 hover:scale-105 h-full rounded-xl text-xl font-medium">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
