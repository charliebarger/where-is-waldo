// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA85hx2G-FxPseYn6e6pocMfsxtrhCqP8Q",
  authDomain: "where-s-waldo-8496c.firebaseapp.com",
  projectId: "where-s-waldo-8496c",
  storageBucket: "where-s-waldo-8496c.appspot.com",
  messagingSenderId: "606167582432",
  appId: "1:606167582432:web:90f18d286f6b8c8c43f285",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
