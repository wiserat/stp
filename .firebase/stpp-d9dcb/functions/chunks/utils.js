import { w as writable } from "./index.js";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOkXPkSnGuPjas_IuV2Ty2uYKipvBNAyI",
  authDomain: "stpp-d9dcb.firebaseapp.com",
  projectId: "stpp-d9dcb",
  storageBucket: "stpp-d9dcb.appspot.com",
  messagingSenderId: "936485037628",
  appId: "1:936485037628:web:1c38d6de3edd4bea4f0539",
  measurementId: "G-84794JZ7BF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const allPosts = writable([]);
async function fetchItems() {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    allPosts.set(docs);
  } catch (error) {
    console.error("Error fetching Firestore data: ", error);
  }
}
fetchItems();
const user = writable(null);
onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
});
export {
  allPosts as a,
  db as d
};
