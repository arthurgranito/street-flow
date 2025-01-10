// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw5eZALtqD5smkxbXm0junmqbOhEfAs2c",
  authDomain: "streetflow-b9780.firebaseapp.com",
  projectId: "streetflow-b9780",
  storageBucket: "streetflow-b9780.firebasestorage.app",
  messagingSenderId: "546292845370",
  appId: "1:546292845370:web:03552966e57ef351031e03",
  measurementId: "G-3DRCZYYNPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);