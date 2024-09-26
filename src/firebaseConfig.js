import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAbpjht90xBJPi_LHOZNn5NMKQWmRGAIE",
  authDomain: "rafaelss-3bf82.firebaseapp.com",
  projectId: "rafaelss-3bf82",
  storageBucket: "rafaelss-3bf82.appspot.com",
  messagingSenderId: "99107427597",
  appId: "1:99107427597:web:b6a0a634eefb51b8e4cc44",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
