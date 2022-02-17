// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDbNLjF92CRH3ZNm4ZMrioPCOO_QLztpDM",
	authDomain: "insta-2-db.firebaseapp.com",
	projectId: "insta-2-db",
	storageBucket: "insta-2-db.appspot.com",
	messagingSenderId: "352946939379",
	appId: "1:352946939379:web:aeb21bf64b33220c731e86"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };