import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { a as searchViewId, r as reformatTimestamp, B as Button } from "../../../chunks/store.js";
const items = [
  {
    id: 0,
    name: "Complete Study Guide for Biology 101",
    categories: ["Biology", "Cheat Sheets", "Guides"],
    description: "This study guide contains everything you need to pass Biology 101, including detailed explanations of key concepts, diagrams, and practice questions.",
    timestamp: "2024-09-15T10:32:00Z",
    likes: 25,
    views: 120,
    uploader: { username: "studentHelper01" },
    comments: [
      { username: "user123", text: "Super helpful! Got an A.", likes: 15 },
      { username: "cheater123", text: "Could use more diagrams.", likes: 2 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.khanacademy.org", "https://www.coursera.org", "https://www.biologystudyguide.com"]
  },
  {
    id: 1,
    name: "Chemistry Equations Cheat Sheet",
    categories: ["Chemistry", "Formulas", "Cheat Sheets"],
    description: "A concise cheat sheet covering all major chemistry equations, perfect for quick reference during exams.",
    timestamp: "2024-09-14T09:45:00Z",
    likes: 32,
    views: 240,
    uploader: { username: "scienceGuru" },
    comments: [
      { username: "examCracker", text: "Saved me so much time!", likes: 20 },
      { username: "quizMaster", text: "Missing some key equations.", likes: -3 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.chemguide.co.uk", "https://www.edx.org", "https://www.chemteam.info"]
  },
  {
    id: 2,
    name: "History Exam Notes",
    categories: ["History", "Notes", "Exams"],
    description: "Detailed notes on key events in world history, perfect for exam prep. Covers ancient civilizations to modern history.",
    timestamp: "2024-09-13T15:22:00Z",
    likes: -5,
    views: 95,
    uploader: { username: "historyBuff" },
    comments: [
      { username: "factChecker", text: "Some dates are wrong.", likes: -10 },
      { username: "aceStudent", text: "Great for last-minute review.", likes: 5 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.history.com", "https://www.britannica.com", "https://www.academic.oup.com"]
  },
  {
    id: 3,
    name: "Math Formulas Handbook",
    categories: ["Mathematics", "Formulas", "Handbook"],
    description: "Comprehensive handbook of all major math formulas, from algebra to calculus, with examples and applications.",
    timestamp: "2024-09-12T13:00:00Z",
    likes: 50,
    views: 350,
    uploader: { username: "mathWhiz" },
    comments: [
      { username: "calcMaster", text: "Exactly what I needed for the test.", likes: 25 },
      { username: "strugglingStudent", text: "Wish it had more examples.", likes: 3 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.wolframalpha.com", "https://www.khanacademy.org/math", "https://www.desmos.com"]
  },
  {
    id: 4,
    name: "Essay Template for English 101",
    categories: ["English", "Essays", "Templates"],
    description: "A template that outlines the structure of an English 101 essay, complete with tips on introduction, body, and conclusion writing.",
    timestamp: "2024-09-11T08:50:00Z",
    likes: 10,
    views: 78,
    uploader: { username: "wordSmith" },
    comments: [
      { username: "essayPro", text: "Well-organized template.", likes: 8 },
      { username: "noviceWriter", text: "The conclusion section is lacking.", likes: 1 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.grammarly.com", "https://www.purdue.edu/owl", "https://www.prowritingaid.com"]
  },
  {
    id: 5,
    name: "Physics Problem Solving Strategies",
    categories: ["Physics", "Problem Solving", "Guides"],
    description: "This guide provides step-by-step strategies for solving common physics problems, with a focus on mechanics and electromagnetism.",
    timestamp: "2024-09-10T12:10:00Z",
    likes: -12,
    views: 54,
    uploader: { username: "physicsFanatic" },
    comments: [
      { username: "solver99", text: "Didn’t really help me.", likes: -5 },
      { username: "mechanicsMaster", text: "Good strategies, but hard to follow.", likes: 3 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.phys.org", "https://www.physicsclassroom.com", "https://www.howstuffworks.com"]
  },
  {
    id: 6,
    name: "Short Summary of Macbeth",
    categories: ["English", "Literature", "Summaries"],
    description: "A brief but thorough summary of Shakespeare’s Macbeth, covering key plot points, themes, and character analysis.",
    timestamp: "2024-09-09T18:30:00Z",
    likes: 0,
    views: 112,
    uploader: { username: "litLover" },
    comments: [
      { username: "theaterFan", text: "Perfect summary for class discussions.", likes: 10 },
      { username: "sparkNotesFan", text: "Not as detailed as I hoped.", likes: 2 }
    ],
    filePaths: [
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0",
      "http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
    ],
    resources: ["https://www.sparknotes.com", "https://www.cliffsnotes.com", "https://www.shakespeare.org.uk"]
  }
];
const SearchItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchViewId, $$unsubscribe_searchViewId;
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$unsubscribe_searchViewId();
  return `<div class="w-full border-b-[1px] border-button/30 py-3"><p class="text-sm font-light text-subText/60 -mb-1">Posted ${escape(reformatTimestamp(item.timestamp))}</p> <h1 class="${"border-subText tracking-tight mb-1 " + escape($searchViewId === item.id ? "underline opacity-60" : "", true) + " hover:underline cursor-pointer font-medium text-xl"}">${escape(item.name)}</h1> <p class="mb-1 leading-tight tracking-tight">${escape(item.description)}</p> <div class="flex flex-row items-center gap-[2px]"><p class="text-xl">${escape(item.likes === 0 ? "😐" : item.likes > 0 ? "🔥" : "🥶")}</p> <p class="text-base font-medium tracking-tighter -mb-[1px]">${escape(item.likes)}</p> <p class="text-lg opacity-90 ml-5" data-svelte-h="svelte-16w9id3">👀</p> <p class="text-xs opacity-70 font-medium tracking-tighter">${escape(item.views)}</p> <p class="text-lg opacity-90 ml-5" data-svelte-h="svelte-tzo363">💬</p> <p class="text-xs opacity-70 font-medium tracking-tighter">${escape(item.comments.length)}</p></div></div>`;
});
const PeDoFile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  console.log(src);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  return `<button class="mb-7" style="position: relative; padding: 0; border: none; background: none; display: inline-block;"> <div class="w-[8vw] h-[14vh]" style="position: relative; overflow: hidden;"><iframe class=""${add_attribute("src", src, 0)} style="width: 100%; height: 100%; pointer-events: none;"></iframe></div></button> ${``}`;
});
const DetailedView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchViewId, $$unsubscribe_searchViewId;
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  $$unsubscribe_searchViewId();
  return `<div class="w-[40%] border-[2.5px] border-button pt-6 pb-4 px-4 bg-buttonText h-full rounded-2xl"><h1 class="text-2xl tracking-tight font-medium">${escape(items[$searchViewId].name)}</h1> <div class="flex flex-row gap-1 mb-2 text-md tracking-tight"><p class="opacity-40">Posted on ${escape(reformatTimestamp(items[$searchViewId].timestamp))} by</p> <button class="hover:underline hover:opacity-100 opacity-65">${escape(items[$searchViewId].uploader.username)}</button></div> <p class="mb-5 pr-6 leading-tight tracking-tight">${escape(items[$searchViewId].description)}</p> <div class="border-b-[1px] border-button/30 "></div> <p class="mb-5 opacity-40 font-light text-subText" data-svelte-h="svelte-hcu6i6">Files</p> <div class="flex flex-row items-center gap-2 mb-5">${each(items[$searchViewId].filePaths, (filePath) => {
    return `${validate_component(PeDoFile, "PeDoFile").$$render($$result, { src: filePath }, {}, {})}`;
  })}</div> <div class="border-b-[1px] border-button/30 "></div> <p class="mb-3 opacity-40 font-light text-subText" data-svelte-h="svelte-tf2e">Links</p> <div class="flex flex-col mb-7 leading-tight">${each(items[$searchViewId].resources, (resource) => {
    return `<a${add_attribute("href", resource, 0)} class="underline text-black hover:text-subText">${escape(resource)}</a>`;
  })}</div> <div class="border-b-[1px] mb-4 border-button/30 "></div> <div class="flex ml-5 flex-row gap-10 border-subText/65 w-fit py-[6px] mb-4 px-6 border-b-[2px] items-center"><div class="flex flex-row gap-2 items-center w-fit"><button class="text-xl hover:scale-[1.4] duration-100" data-svelte-h="svelte-dpwcmh">🔥</button> <p class="text-md font-semibold tracking-tighter">${escape(items[$searchViewId].likes)}</p> <button class="text-xl hover:scale-[1.4] duration-100" data-svelte-h="svelte-otaw8r">🥶</button></div> <button class="flex flex-row hover:scale-[1.2] duration-100 gap-1 items-center w-fit" data-svelte-h="svelte-y3b27k"><p class="text-xl font-semibold">+</p> <p class="text-xl -mb-1 font-semibold tracking-tighter">💬</p></button> <div class="flex flex-row gap-1 items-center"><p class="text-xl" data-svelte-h="svelte-8kn7vk">👀</p> <p class="text-md font-medium mt-[1px] tracking-tighter">${escape(items[$searchViewId].views)}</p></div></div> <div class="flex ml-5 flex-col gap-3 pl-3 h-[20vh] overflow-y-scroll show-scrollbar">${each(items[$searchViewId].comments, (comment) => {
    return `<div class="flex flex-col tracking-tight"><button class="opacity-70 hover:underline w-fit -mb-[2px] hover:opacity-100 text-sm">${escape(comment.username)}</button> <p class="leading-tight text-base mb-[2px]">${escape(comment.text)}</p> <div class="flex flex-row gap-2 items-center w-fit"><button class="text-md hover:scale-[1.2] duration-100" data-svelte-h="svelte-47otpq">🔥</button> <p class="text-sm font-medium tracking-tighter">${escape(comment.likes)}</p> <button class="text-md hover:scale-[1.2] duration-100" data-svelte-h="svelte-angb5g">🥶</button></div> </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchViewId, $$unsubscribe_searchViewId;
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  let search = "";
  $$unsubscribe_searchViewId();
  return `<div class="h-[98vh] flex flex-row cursor-default gap-20 items-center justify-center py-10"><div class="${"flex flex-col h-full " + escape($searchViewId === -1 ? "w-[50%]" : "w-[30%]", true)}"><div class="w-full flex flex-row gap-2"><input class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none" placeholder="Smrt krásných srnců ..." type="text"${add_attribute("value", search, 0)}> ${validate_component(Button, "Button").$$render($$result, { url: "/search" }, {}, {
    default: () => {
      return `Search`;
    }
  })}</div> <div data-svelte-h="svelte-1dqe5n1">kategorie...</div> <ul class="overflow-y-scroll show-scrollbar p-2">${each(items, (item) => {
    return `<li>${validate_component(SearchItem, "SearchItem").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul></div> ${$searchViewId !== -1 ? `${validate_component(DetailedView, "DetailedView").$$render($$result, {}, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
