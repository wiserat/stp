<!-- src/routes/login.svelte -->
<script lang="ts">
    import { auth } from "$lib/firebase";
    import { user } from "$lib/utils.js";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import {
        type User,
        GoogleAuthProvider,
        signInWithPopup,
        onAuthStateChanged,
    } from "firebase/auth";

    let errorMsg = "";

    onMount(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                goto("/post", { replaceState: true }); // Redirect if logged in
            }
        });
        return unsubscribe; // Cleanup on unmount
    });

    async function loginWithGoogle() {
        errorMsg = "";
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            goto("/post", { replaceState: true });
        } catch (error: any) {
            errorMsg = error.message;
        }
    }
</script>

<div class="flex flex-col items-center justify-center h-[97vh]">
    <button
        on:click={loginWithGoogle}
        class="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
    >
        <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Google Logo"
            class="w-6 h-6"
        />
        <span>Login with Google</span>
    </button>
    {#if errorMsg}
        <p class="text-red-500 mt-4">{errorMsg}</p>
    {/if}
</div>

<style>
    button {
        outline: none;
    }
</style>
