// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 Yahan tumhara Firebase config use ho raha hai:
const firebaseConfig = {
  apiKey: "AIzaSyB2vfsyK141tCVmz0PZhB534XS9bpHbkK4",
  authDomain: "re-ecell.firebaseapp.com",
  projectId: "re-ecell",
  storageBucket: "re-ecell.appspot.com",
  messagingSenderId: "258154280855",
  appId: "1:258154280855:web:cc96aa5d04873044e936d2",
  measurementId: "G-JHF7841YS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth Setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
