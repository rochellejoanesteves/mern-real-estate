// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-95153.firebaseapp.com",
  projectId: "mern-real-estate-95153",
  storageBucket: "mern-real-estate-95153.appspot.com",
  messagingSenderId: "19177525790",
  appId: "1:19177525790:web:7d469b454053e8175e140f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);