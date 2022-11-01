// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSEkn2AGbUVR3Rgd5rkvzu19aqXaXHxhM",
  authDomain: "authentication-88767.firebaseapp.com",
  projectId: "authentication-88767",
  storageBucket: "authentication-88767.appspot.com",
  messagingSenderId: "724005682888",
  appId: "1:724005682888:web:df97caeae02c9c7475affd",
  measurementId: "G-6H38GF4YBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
