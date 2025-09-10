// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV3ny1x2Y_JXylVspt797G5p56zCJ-Gco",
  authDomain: "lumenni-estetica-autentication.firebaseapp.com",
  databaseURL: "https://lumenni-estetica-autentication-default-rtdb.firebaseio.com",
  projectId: "lumenni-estetica-autentication",
  storageBucket: "lumenni-estetica-autentication.firebasestorage.app",
  messagingSenderId: "481878336776",
  appId: "1:481878336776:web:b808b922b64026c7f8b8bd",
  measurementId: "G-B433W9ZE86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);