import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCudiBu63ZHu5J2C2Las6PWtWGcyRFBOD4",
  authDomain: "chat-67cdb.firebaseapp.com",
  projectId: "chat-67cdb",
  storageBucket: "chat-67cdb.appspot.com",
  messagingSenderId: "163551992590",
  appId: "1:163551992590:web:3bb7d005134a43f172155f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
