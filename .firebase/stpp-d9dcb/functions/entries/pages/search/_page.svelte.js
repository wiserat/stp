import { c as create_ssr_component, a as subscribe, e as escape, d as each, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { d as searchViewId, f as formatFirestoreTimestamp } from "../../../chunks/store.js";
import { a as allPosts, d as db$1 } from "../../../chunks/utils.js";
import { doc, updateDoc, increment, getFirestore } from "firebase/firestore";
import { w as writable } from "../../../chunks/index.js";
import { B as Button } from "../../../chunks/index2.js";
import { initializeApp } from "firebase/app";
const SearchItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchViewId, $$unsubscribe_searchViewId;
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$unsubscribe_searchViewId();
  return `<div class="w-full border-b-[1px] border-button/30 py-3"><p class="text-sm font-light text-subText/60 -mb-1">Posted ${escape(formatFirestoreTimestamp(item.timestamp))}</p> <h1 class="${"border-subText tracking-tight mb-1 " + escape($searchViewId === item.id ? "underline opacity-60" : "", true) + " hover:underline cursor-pointer font-medium text-xl"}">${escape(item.name)}</h1> <p class="mb-1 leading-tight tracking-tight">${escape(item.description)}</p> <div class="flex flex-row items-center gap-[2px]"><p class="text-xl">${escape(item.likes === 0 ? "😐" : item.likes > 0 ? "🔥" : "🥶")}</p> <p class="text-base font-medium tracking-tighter -mb-[1px]">${escape(item.likes)}</p> <p class="text-lg opacity-90 ml-5" data-svelte-h="svelte-16w9id3">👀</p> <p class="text-xs opacity-70 font-medium tracking-tighter">${escape(item.views)}</p> </div></div>`;
});
function setCookie(name, value, days) {
  let expires = "";
  {
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}
const DetailedView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchViewId, $$unsubscribe_searchViewId;
  let $allPosts, $$unsubscribe_allPosts;
  let $comments, $$unsubscribe_comments;
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  $$unsubscribe_allPosts = subscribe(allPosts, (value) => $allPosts = value);
  const comments = writable([]);
  $$unsubscribe_comments = subscribe(comments, (value) => $comments = value);
  let postId = $allPosts[$searchViewId].id;
  async function votePost(newVote) {
    const cookieName = `vote_post_${postId}`;
    const previousVoteStr = getCookie(cookieName);
    const previousVote = previousVoteStr ? parseInt(previousVoteStr) : 0;
    if (previousVote === newVote) {
      alert("You have already voted in that direction!");
      return;
    }
    const voteDiff = newVote - previousVote;
    try {
      const postRef = doc(db$1, "posts", postId);
      await updateDoc(postRef, { likes: increment(voteDiff) });
      setCookie(cookieName, newVote.toString(), 1);
      allPosts.update((posts) => {
        const index = posts.findIndex((post) => post.id === postId);
        if (index !== -1) {
          posts[index].likes = (posts[index].likes || 0) + voteDiff;
        }
        return posts;
      });
    } catch (error) {
      console.error("Error updating post vote:", error);
    }
  }
  function likePost() {
    votePost(1);
  }
  function dislikePost() {
    votePost(-1);
  }
  if ($$props.likePost === void 0 && $$bindings.likePost && likePost !== void 0) $$bindings.likePost(likePost);
  if ($$props.dislikePost === void 0 && $$bindings.dislikePost && dislikePost !== void 0) $$bindings.dislikePost(dislikePost);
  $$unsubscribe_searchViewId();
  $$unsubscribe_allPosts();
  $$unsubscribe_comments();
  return `<div class="w-[40%] border-[2.5px] border-button pt-6 pb-4 px-4 bg-buttonText h-full rounded-2xl"><h1 class="text-2xl tracking-tight font-medium">${escape($allPosts[$searchViewId].name)}</h1> <div class="flex flex-row gap-1 mb-2 text-md tracking-tight"><p class="opacity-40">Posted on ${escape(formatFirestoreTimestamp($allPosts[$searchViewId].timestamp))} by</p> <button class="hover:underline hover:opacity-100 opacity-65">${escape($allPosts[$searchViewId].user)}</button></div> <p class="mb-5 pr-6 leading-tight tracking-tight">${escape($allPosts[$searchViewId].description)}</p> <div class="border-b-[1px] border-button/30"></div> <p class="mb-5 opacity-40 font-light text-subText" data-svelte-h="svelte-1qxlko8">Files coming soon</p>  <div class="border-b-[1px] border-button/30"></div> <p class="mb-3 opacity-40 font-light text-subText" data-svelte-h="svelte-tf2e">Links</p> <div class="flex flex-col mb-7 leading-tight">${$allPosts[$searchViewId].resources && $allPosts[$searchViewId].resources.length > 0 ? `${each($allPosts[$searchViewId].resources, (resource) => {
    return `<a${add_attribute("href", resource, 0)} class="underline text-black hover:text-subText">${escape(resource)}</a>`;
  })}` : ``}</div> <div class="border-b-[1px] mb-4 border-button/30"></div> <div class="flex ml-5 flex-row gap-10 border-subText/65 w-fit py-[6px] mb-4 px-6 border-b-[2px] items-center"><div class="flex flex-row gap-2 items-center w-fit"><button class="text-xl hover:scale-[1.4] duration-100" data-svelte-h="svelte-1agh3eu">🔥</button> <p class="text-md font-semibold tracking-tighter">${escape($allPosts[$searchViewId].likes)}</p> <button class="text-xl hover:scale-[1.4] duration-100" data-svelte-h="svelte-xywjjq">🥶</button></div> <button class="flex flex-row hover:scale-[1.2] duration-100 gap-1 items-center w-fit" data-svelte-h="svelte-m7qzau"><p class="text-xl font-semibold">+</p> <p class="text-xl -mb-1 font-semibold tracking-tighter">💬</p></button> <div class="flex flex-row gap-1 items-center"><p class="text-xl" data-svelte-h="svelte-8kn7vk">👀</p> <p class="text-md font-medium mt-[1px] tracking-tighter">${escape($allPosts[$searchViewId].views)}</p></div></div> <div class="flex ml-5 flex-col gap-3 pl-3 h-fit overflow-y-scroll show-scrollbar">${each($comments, (comment) => {
    return `<div class="flex flex-col tracking-tight"><button class="opacity-70 hover:underline w-fit -mb-[2px] hover:opacity-100 text-sm">${escape(comment.user)}</button> <p class="leading-tight text-base mb-[2px]">${escape(comment.content)}</p> <div class="flex flex-row gap-2 items-center w-fit"><button class="text-md hover:scale-[1.2] duration-100" data-svelte-h="svelte-y5izdb">🔥</button> <p class="text-sm font-medium tracking-tighter">${escape(comment.likes)}</p> <button class="text-md hover:scale-[1.2] duration-100" data-svelte-h="svelte-11hj0f5">🥶</button></div> </div>`;
  })} <div class=""><textarea class="w-full border rounded p-2" rows="4" placeholder="Enter your comment here...">${escape("")}</textarea> <button class="bg-button text-white px-3 py-2 rounded-xl font-medium text-sm mt-2 disabled:opacity-50 w-fit" data-svelte-h="svelte-zjhs9g">Upload</button></div></div></div>`;
});
const firebaseConfig = {
  apiKey: "AIzaSyAOkXPkSnGuPjas_IuV2Ty2uYKipvBNAyI",
  authDomain: "stpp-d9dcb.firebaseapp.com",
  projectId: "stpp-d9dcb",
  storageBucket: "stpp-d9dcb.appspot.com",
  messagingSenderId: "936485037628",
  appId: "1:936485037628:web:1c38d6de3edd4bea4f0539",
  measurementId: "G-84794JZ7BF"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let $allPosts, $$unsubscribe_allPosts;
  let $searchViewId, $$unsubscribe_searchViewId;
  $$unsubscribe_allPosts = subscribe(allPosts, (value) => $allPosts = value);
  $$unsubscribe_searchViewId = subscribe(searchViewId, (value) => $searchViewId = value);
  let search = "";
  let selectedCategories = [];
  let selectedSubjects = [];
  let selectedSchools = [];
  async function incrementDocumentViews(documentId) {
    try {
      const docRef = doc(db, "posts", documentId);
      await updateDoc(docRef, { views: increment(1) });
      console.log("Views updated successfully");
    } catch (error) {
      console.error("Error updating views:", error);
    }
  }
  if ($$props.incrementDocumentViews === void 0 && $$bindings.incrementDocumentViews && incrementDocumentViews !== void 0) $$bindings.incrementDocumentViews(incrementDocumentViews);
  filteredItems = $allPosts.filter((item) => {
    const matchesCategory = selectedCategories.length === 0 || item.categories?.some((category) => selectedCategories.includes(category.toLowerCase()));
    const matchesSubject = selectedSubjects.length === 0 || item.subjects?.some((subject) => selectedSubjects.includes(subject.toLowerCase()));
    const matchesSchool = selectedSchools.length === 0 || selectedSchools.includes(item.school);
    return matchesCategory && matchesSubject && matchesSchool;
  });
  $$unsubscribe_allPosts();
  $$unsubscribe_searchViewId();
  return `<div class="h-[98vh] flex flex-row cursor-default gap-20 items-center justify-center py-10"><div class="${"flex flex-col h-full " + escape($searchViewId === -1 ? "w-[50%]" : "w-[30%]", true)}"><div class="w-full flex flex-row gap-2"><button class="text-subText font-medium text-lg whitespace-nowrap">Filters ${escape("▼")}</button> <input class="border-[2.5px] border-button w-full bg-buttonText text-subText text-base px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none" placeholder="Smrt krásných srnců ..." type="text"${add_attribute("value", search, 0)}> ${validate_component(Button, "Button").$$render($$result, { url: "/search" }, {}, {
    default: () => {
      return `Search`;
    }
  })}</div> ${``} <ul class="overflow-y-scroll show-scrollbar p-2">${filteredItems.length > 0 ? `${each(filteredItems, (item, i) => {
    return `<li>${validate_component(SearchItem, "SearchItem").$$render($$result, { item }, {}, {})} </li>`;
  })}` : `<li data-svelte-h="svelte-1h6sger">No items found</li>`}</ul></div> ${$searchViewId !== -1 ? `${validate_component(DetailedView, "DetailedView").$$render($$result, {}, {}, {})}` : ``}</div> <div class="fixed right-10 bottom-10 h-[3.8rem]">${validate_component(Button, "Button").$$render($$result, { url: "/post" }, {}, {
    default: () => {
      return `<span class="font-black" data-svelte-h="svelte-lttvid">+</span>
        upload`;
    }
  })}</div>`;
});
export {
  Page as default
};
