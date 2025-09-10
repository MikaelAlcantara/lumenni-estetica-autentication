import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
