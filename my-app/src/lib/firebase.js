// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBETQM4M0RUFsmWUGH9FD_-gj3tJFZgNC8",
  authDomain: "hijab-gallery.firebaseapp.com",
  projectId: "hijab-gallery",
  storageBucket: "hijab-gallery.firebasestorage.app",
  messagingSenderId: "469162100177",
  appId: "1:469162100177:web:9b0a769331d1a76987ccf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
