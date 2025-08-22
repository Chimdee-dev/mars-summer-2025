import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Google-ийн функцүүдийг нэмэв
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjxRhQhO5FXhZgI1lvbdF16cwdYE8FlBU",
    authDomain: "ecommerse-447ca.firebaseapp.com",
    projectId: "ecommerse-447ca",
    storageBucket: "ecommerse-447ca.firebasestorage.app",
    messagingSenderId: "802221597512",
    appId: "1:802221597512:web:05b960913f651e7721097d",
    measurementId: "G-Q1HGH69R6B"
};

// Firebase-ийг эхлүүлэх
const app = initializeApp(firebaseConfig);

// Authentication болон Firestore-ийг авах
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Provider-ийг үүсгэх
const googleProvider = new GoogleAuthProvider();

// Google-ээр нэвтрэх функц
export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};
// Firebase-ийг экспортлох