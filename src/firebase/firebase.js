// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXk3NWTHL7h9FEAE1tzyQ3qsf2HmwzYXI",
    authDomain: "coderreact-93098.firebaseapp.com",
    projectId: "coderreact-93098",
    storageBucket: "coderreact-93098.appspot.com",
    messagingSenderId: "328713599881",
    appId: "1:328713599881:web:a690ffcc532de1c61bbf58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)