import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOkXPkSnGuPjas_IuV2Ty2uYKipvBNAyI",
    authDomain: "stpp-d9dcb.firebaseapp.com",
    projectId: "stpp-d9dcb",
    storageBucket: "stpp-d9dcb.appspot.com",
    messagingSenderId: "936485037628",
    appId: "1:936485037628:web:1c38d6de3edd4bea4f0539",
    measurementId: "G-84794JZ7BF"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);