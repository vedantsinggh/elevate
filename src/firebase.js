// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyW6xfC8FJyveRzrtQ2YNJLWljGy03Zqw",
  authDomain: "elev-b8faa.firebaseapp.com",
  projectId: "elev-b8faa",
  storageBucket: "elev-b8faa.appspot.com",
  messagingSenderId: "800479320225",
  appId: "1:800479320225:web:03d586d0c1ce11aa45f8e0",
  measurementId: "G-6QJCW5TMX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, doc, getDoc, setDoc, addDoc, collection, RecaptchaVerifier};