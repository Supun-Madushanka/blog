// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "blog-e89d1.firebaseapp.com",
  projectId: "blog-e89d1",
  storageBucket: "blog-e89d1.firebasestorage.app",
  messagingSenderId: "738807405903",
  appId: "1:738807405903:web:dd222cb15a0e20776db93a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);