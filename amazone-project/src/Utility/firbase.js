// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxR04lseuxroaAvVbEAGctYCMesMdbvjs",
  authDomain: "e-clone-393cb.firebaseapp.com",
  projectId: "e-clone-393cb",
  storageBucket: "e-clone-393cb.firebasestorage.app",
  messagingSenderId: "272594626231",
  appId: "1:272594626231:web:5d10d6689c72dbc2de0f32"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();