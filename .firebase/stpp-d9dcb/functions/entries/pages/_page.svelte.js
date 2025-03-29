import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/index2.js";
import { s as slideToggle, i as infoId } from "../../chunks/store.js";
const info = [
  {
    heading: "Introduction",
    text: "This is the introduction section. It provides an overview of the content, setting the stage for what is to follow. We will explore various concepts and features that are central to the topic at hand. The introduction aims to give you a clear idea of what you can expect from the subsequent sections, ensuring you are well-prepared to dive deeper into the details."
  },
  {
    heading: "Features",
    text: "In this section, we delve into the key features of our product or service. These features are designed to provide value, solve specific problems, and enhance the overall user experience. From performance optimizations to unique functionalities, we cover all aspects that set this product apart from the competition. Each feature has been carefully crafted based on user feedback and industry standards to meet your needs."
  },
  {
    heading: "Pricing",
    text: "Pricing is an important aspect when considering a product or service. In this section, we break down the different pricing plans available, catering to a wide range of budgets and use cases. Whether you're a small business owner looking for an affordable option or a large enterprise in need of advanced features, our pricing structure is designed to be flexible and scalable. We also offer detailed comparisons between plans to help you make an informed decision."
  },
  {
    heading: "Contact Us",
    text: "If you have any questions or need further assistance, this section provides various ways to get in touch with us. Whether through email, phone, or live chat, our customer support team is here to help you. We value your feedback and are committed to providing prompt and effective solutions to any issues you may encounter. Don't hesitate to reach out to us – we're here to ensure you have the best experience possible."
  },
  {
    heading: "Our mission",
    text: "Our mission is to make school life easier for students by providing a platform to share notes, assignments, and study materials. Created by a student, for students, this app is about saving time and supporting each other when deadlines loom or inspiration runs dry. We’re building a community where collaboration and quick solutions help us navigate the challenges of education—because sometimes, a little help (or a shortcut) can make all the difference."
  }
];
const css = {
  code: ".slide-container.svelte-yr06fq.svelte-yr06fq{--tw-bg-opacity:0;visibility:hidden;transition:opacity 0.5s ease, visibility 0.5s ease}.slide-container.visible.svelte-yr06fq.svelte-yr06fq{--tw-bg-opacity:1;visibility:visible}.slide-content.svelte-yr06fq.svelte-yr06fq{transform:translateX(-100%);transition:transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1)}.slide-container.visible.svelte-yr06fq .slide-content.svelte-yr06fq{transform:translateX(0)}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { infoId, slideToggle } from \\"../../utils/store.ts\\";\\nimport { info } from \\"$lib/Slide/info\\";\\nimport { onMount } from \\"svelte\\";\\nonMount(() => {\\n  const closeElement = document.getElementById(`close-element`);\\n  const closetip = document.getElementById(`closetip`);\\n  if (closeElement && closetip) {\\n    closeElement.addEventListener(\\"mousemove\\", (e) => {\\n      closetip.classList.remove(\\"hidden\\");\\n      closetip.style.left = `${e.pageX + 10}px`;\\n      closetip.style.top = `${e.pageY + 10}px`;\\n    });\\n    closeElement.addEventListener(\\"mouseleave\\", () => {\\n      closetip.classList.add(\\"hidden\\");\\n    });\\n  }\\n});\\n<\/script>\\n\\n<div class=\\"fixed w-full h-full z-40 flex flex-row bg-black/50 backdrop-blur slide-container {$slideToggle ? \'visible\' : \'\'}\\">\\n    <div class=\\"w-[45vw] pl-16 pr-12 flex flex-col items-center justify-center gap-5 bg-text text-buttonText border-r-2 border-buttonText slide-content\\">\\n        <h1 class=\\"tracking-tight w-full text-5xl\\">{info[$infoId].heading}</h1>\\n        <p class=\\"text-lg tracking-tight leading-tight\\">{info[$infoId].text}</p>\\n        <button class=\\"medievalsharp-regular text-5xl mt-7 hover:scale-110 duration-300\\"\\n                on:click={() => { $slideToggle = !$slideToggle; }}>X\\n        </button>\\n    </div>\\n    <button class=\\"w-[55vw]\\" id=\\"close-element\\" on:click={() => { $slideToggle = !$slideToggle; }}></button>\\n</div>\\n<div class=\\"hidden absolute z-50 w-32 text-buttonText tracking-tight font-medium text-center\\"\\n     id=\\"closetip\\">\\n    Click to close\\n</div>\\n\\n<style>\\n    .slide-container {\\n        --tw-bg-opacity: 0;\\n        visibility: hidden;\\n        transition: opacity 0.5s ease, visibility 0.5s ease;\\n    }\\n\\n    .slide-container.visible {\\n        --tw-bg-opacity: 1;\\n        visibility: visible;\\n    }\\n\\n    .slide-content {\\n        transform: translateX(-100%);\\n        transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);\\n    }\\n\\n    .slide-container.visible .slide-content {\\n        transform: translateX(0);\\n    }\\n</style>"],"names":[],"mappings":"AAmCI,4CAAiB,CACb,eAAe,CAAE,CAAC,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,IACnD,CAEA,gBAAgB,oCAAS,CACrB,eAAe,CAAE,CAAC,CAClB,UAAU,CAAE,OAChB,CAEA,0CAAe,CACX,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAC/D,CAEA,gBAAgB,sBAAQ,CAAC,4BAAe,CACpC,SAAS,CAAE,WAAW,CAAC,CAC3B"}'
};
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $slideToggle, $$unsubscribe_slideToggle;
  let $infoId, $$unsubscribe_infoId;
  $$unsubscribe_slideToggle = subscribe(slideToggle, (value) => $slideToggle = value);
  $$unsubscribe_infoId = subscribe(infoId, (value) => $infoId = value);
  $$result.css.add(css);
  $$unsubscribe_slideToggle();
  $$unsubscribe_infoId();
  return `<div class="${"fixed w-full h-full z-40 flex flex-row bg-black/50 backdrop-blur slide-container " + escape($slideToggle ? "visible" : "", true) + " svelte-yr06fq"}"><div class="w-[45vw] pl-16 pr-12 flex flex-col items-center justify-center gap-5 bg-text text-buttonText border-r-2 border-buttonText slide-content svelte-yr06fq"><h1 class="tracking-tight w-full text-5xl">${escape(info[$infoId].heading)}</h1> <p class="text-lg tracking-tight leading-tight">${escape(info[$infoId].text)}</p> <button class="medievalsharp-regular text-5xl mt-7 hover:scale-110 duration-300" data-svelte-h="svelte-1dlmiyv">X</button></div> <button class="w-[55vw]" id="close-element"></button></div> <div class="hidden absolute z-50 w-32 text-buttonText tracking-tight font-medium text-center" id="closetip" data-svelte-h="svelte-1domt3u">Click to close
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slideToggle;
  let $$unsubscribe_infoId;
  $$unsubscribe_slideToggle = subscribe(slideToggle, (value) => value);
  $$unsubscribe_infoId = subscribe(infoId, (value) => value);
  let search = "";
  $$unsubscribe_slideToggle();
  $$unsubscribe_infoId();
  return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {})} <div class="bg-background h-[98vh] relative cursor-default hide-scrollbar"> <div class="absolute inset-0 flex z-0 flex-col text-center items-center justify-center gap-12"><div class="text-text text-6xl font-bold tracking-tight underline" data-svelte-h="svelte-hfrggn">Search for test answers, <br> homeworks and other!</div> <div class="flex flex-row items-center gap-2"><input class="border-[2.5px] border-button w-[25vw] bg-buttonText text-subText text-xl px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none" placeholder="Smrt krásných srnců ..." type="text"${add_attribute("value", search, 0)}> ${validate_component(Button, "Button").$$render($$result, { url: "/search" }, {}, {
    default: () => {
      return `Search`;
    }
  })}</div> <button class="flex -mb-40 mt-32 flex-col underline text-subText tracking-tight items-center cursor-pointer z-10 justify-center" data-svelte-h="svelte-1csjase">About our mission</button></div></div>`;
});
export {
  Page as default
};
