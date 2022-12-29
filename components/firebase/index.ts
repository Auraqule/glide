import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = process.env.NEXT_PUBLIC_MY_FIREBASE_API_KEY;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId: "glide-5f379",
  storageBucket,
  messagingSenderId,
  appId,
  measurementId: "G-3RJY6JSWBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
export const get = getDoc;
export const storage = getStorage(app);
