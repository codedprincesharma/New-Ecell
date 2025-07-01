// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2vfsyK414tCVmz0PZhB534XS9bpHbkK4",
  authDomain: "re-ecell.firebaseapp.com",
  projectId: "re-ecell",
  storageBucket: "re-ecell.firebasestorage.app",
  messagingSenderId: "258154280855",
  appId: "1:258154280855:web:cc96aa5d04873044e936d2",
  measurementId: "G-JHF7841YS6"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Setup Auth and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
console.log("data getting recive",auth);


// 📦 Export for use in your React app
export { auth, provider };
