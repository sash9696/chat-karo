import { initializeApp } from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7Efbgv637V1BMUKAeSMM0YNub4uPLlkg",
  authDomain: "chat-karo22.firebaseapp.com",
  projectId: "chat-karo22",
  storageBucket: "chat-karo22.appspot.com",
  messagingSenderId: "1054433865913",
  appId: "1:1054433865913:web:30d92fe803c03ff55e6b68"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {auth, db, provider};