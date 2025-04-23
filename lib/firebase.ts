
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6T4QRE8UseXPx7LQe8T0sSbcD1mXwOzA",
  authDomain: "chemcycle-36f1c.firebaseapp.com",
  projectId: "chemcycle-36f1c",
  storageBucket: "chemcycle-36f1c.firebasestorage.app",
  messagingSenderId: "640314805301",
  appId: "1:640314805301:web:9cdd11e43751d0e488b57c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
