import { writable } from "svelte/store";
import { auth } from "$lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { db } from "$lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const allPosts = writable<any[]>([]);

export async function fetchItems() {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        let docs: any[] = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        allPosts.set(docs);
    } catch (error) {
        console.error("Error fetching Firestore data: ", error);
    }
}

fetchItems();


export const user = writable<User | null>(null);

onAuthStateChanged(auth, (firebaseUser) => {
    user.set(firebaseUser);
});
