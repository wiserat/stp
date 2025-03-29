import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { a as allCategories, b as allSubjects, c as allSchools } from "../../../chunks/store.js";
import "../../../chunks/client.js";
import "../../../chunks/utils.js";
import "firebase/auth";
import "firebase/firestore";
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { selected } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  return `<div class="${"$" + escape(
    !selected ? " text-button border-button/70" : " bg-buttonText text-subText border-button/100",
    true
  ) + " whitespace-nowrap rounded-xl border-[2.5px] px-2 py-1"}">${escape(text)}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let uploadedDocumentsCount = 0;
  let totalLikes = 0;
  let name = "";
  let selectedCategories = [];
  let selectedSubjects = [];
  let selectedSchools = [];
  let links = [""];
  let files = [];
  let linkValidity = [true];
  return `<button class="fixed top-5 left-5 text-button" data-svelte-h="svelte-ppqv8m">Zpět</button> <div class="h-[98vh] w-screen flex justify-center"><div class="flex w-[65vw] flex-col"><div class="flex flex-row gap-5 mt-10 pl-10"><img${add_attribute("src", "./hannah.jpg", 0)} alt="" class="h-[20vh] rounded-2xl"> <div class="flex flex-col item pt-4"><h1 class="text-6xl font-medium text-button mb-4">${escape("")}</h1> <p class="text-subText text-xl">Number of uploaded documents: <span class="font-bold">${escape(uploadedDocumentsCount)}</span></p> <p class="text-subText text-xl">Total rating on uploaded documents: <span class="font-bold">${escape(totalLikes)}</span></p> <button class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50 w-fit" data-svelte-h="svelte-1bks3fl">Logout</button></div></div> <div class="h-[1px] bg-button/30 mt-4"></div> <p class="mb-5 opacity-40 font-light text-subText" data-svelte-h="svelte-1q6rfg6">Upload</p> <div class="flex flex-row gap-4"> <div class="flex flex-col w-1/2"><input class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top" placeholder="Name (e.g., Smrt krásných srnců - čtenářák)" type="text"${add_attribute("value", name, 0)}> <div class="h-[11rem] justify-center flex flex-col gap-1 mt-4"><div class="flex flex-row overflow-x-auto hide-scrollbar gap-2">${each(allCategories, (category) => {
    return `<button>${validate_component(Category, "Category").$$render(
      $$result,
      {
        text: category,
        selected: selectedCategories.includes(category)
      },
      {},
      {}
    )} </button>`;
  })}</div> <div class="flex flex-row overflow-x-auto hide-scrollbar gap-2 mt-2">${each(allSubjects, (subject) => {
    return `<button>${validate_component(Category, "Category").$$render(
      $$result,
      {
        text: subject,
        selected: selectedSubjects.includes(subject)
      },
      {},
      {}
    )} </button>`;
  })}</div> <div class="flex flex-row overflow-x-auto hide-scrollbar gap-2 mt-2">${each(allSchools, (school) => {
    return `<button>${validate_component(Category, "Category").$$render(
      $$result,
      {
        text: school,
        selected: selectedSchools.includes(school)
      },
      {},
      {}
    )} </button>`;
  })}</div></div></div>  <div class="flex flex-col w-1/2"><textarea class="border-[2.5px] border-button w-full h-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top resize-none" placeholder="Description (e.g., Brief summary or details)">${escape("")}</textarea></div></div>  <div class="mt-4 flex gap-8"> <div class="w-1/2"><h2 class="text-xl font-medium text-button mb-2" data-svelte-h="svelte-1mms5wk">Add Links</h2> ${each(links, (link, index) => {
    return `<div class="flex items-center gap-2 mb-2"><input${add_attribute("class", `border-[2.5px] ${linkValidity[index] ? "border-button" : "border-red-500"} w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:ring-0 focus:shadow-none focus:outline-none placeholder:text-left placeholder:align-top`, 0)}${add_attribute("placeholder", `Link ${index + 1}`, 0)} type="url"${add_attribute("value", links[index], 0)}> <button class="text-red-500 font-medium" data-svelte-h="svelte-ss570m">Remove</button> </div>`;
  })} <button class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50" ${links.length >= 3 ? "disabled" : ""}>Add Another Link</button></div>  <div class="w-1/2"><h2 class="text-xl font-medium text-button mb-2" data-svelte-h="svelte-hc5yzw">Upload Files</h2> <div${add_attribute("class", `border-[2.5px] border-dashed ${"border-button"} w-full bg-buttonText text-subText text-base px-4 py-8 rounded-xl font-medium flex justify-center items-center cursor-pointer`, 0)}>${files.length > 0 ? `<ul>${each(files, (file, index) => {
    return `<li class="flex justify-between items-center gap-2 mb-1"><span>${escape(file.name)}</span> <button class="text-red-500 font-medium" data-svelte-h="svelte-7j63xg">Remove</button> </li>`;
  })}</ul>` : `<p data-svelte-h="svelte-1xl3ohe">Drag and drop files here or click to upload</p>`}</div> <input type="file" class="hidden" multiple> <p class="text-sm text-subText mt-1" data-svelte-h="svelte-13jlllt">Maximum 5 files allowed.</p></div></div> <div class="h-full flex justify-center items-end pb-4"><button class="bg-button text-white w-[10rem] h-14 rounded-xl font-medium text-xl mt-2" ${links.length >= 3 ? "disabled" : ""}>Upload</button></div></div></div>`;
});
export {
  Page as default
};
