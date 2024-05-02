// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApLYvcU-tElW5FfmPGbS7KRfGZod0ReHs",
  authDomain: "jee-elevate.firebaseapp.com",
  projectId: "jee-elevate",
  storageBucket: "jee-elevate.appspot.com",
  messagingSenderId: "1048317725319",
  appId: "1:1048317725319:web:12773431c0dd85c2df8622",
  measurementId: "G-ZXG7W3PS9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);