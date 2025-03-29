import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/utils.js";
import "../../../chunks/client.js";
import "firebase/auth";
const css = {
  code: "button.svelte-9dw05k{outline:none}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!-- src/routes/login.svelte -->\\n<script lang=\\"ts\\">import { auth } from \\"$lib/firebase\\";\\nimport { user } from \\"$lib/utils.js\\";\\nimport { onMount } from \\"svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport {\\n  GoogleAuthProvider,\\n  signInWithPopup,\\n  onAuthStateChanged\\n} from \\"firebase/auth\\";\\nlet errorMsg = \\"\\";\\nonMount(() => {\\n  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {\\n    if (firebaseUser) {\\n      goto(\\"/post\\", { replaceState: true });\\n    }\\n  });\\n  return unsubscribe;\\n});\\nasync function loginWithGoogle() {\\n  errorMsg = \\"\\";\\n  const provider = new GoogleAuthProvider();\\n  try {\\n    await signInWithPopup(auth, provider);\\n    goto(\\"/post\\", { replaceState: true });\\n  } catch (error) {\\n    errorMsg = error.message;\\n  }\\n}\\n<\/script>\\n\\n<div class=\\"flex flex-col items-center justify-center h-[97vh]\\">\\n    <button\\n        on:click={loginWithGoogle}\\n        class=\\"flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300\\"\\n    >\\n        <img\\n            src=\\"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png\\"\\n            alt=\\"Google Logo\\"\\n            class=\\"w-6 h-6\\"\\n        />\\n        <span>Login with Google</span>\\n    </button>\\n    {#if errorMsg}\\n        <p class=\\"text-red-500 mt-4\\">{errorMsg}</p>\\n    {/if}\\n</div>\\n\\n<style>\\n    button {\\n        outline: none;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAiDI,oBAAO,CACH,OAAO,CAAE,IACb"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <div class="flex flex-col items-center justify-center h-[97vh]"><button class="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 svelte-9dw05k" data-svelte-h="svelte-1ev85e"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="Google Logo" class="w-6 h-6"> <span>Login with Google</span></button> ${``} </div>`;
});
export {
  Page as default
};
