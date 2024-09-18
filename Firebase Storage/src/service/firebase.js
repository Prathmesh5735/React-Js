// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { doc, getDoc, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJ-H-KM6dFQE8LJ6ySbYs1usFhJhSdfQ",
  authDomain: "auth-fdddd.firebaseapp.com",
  projectId: "auth-fdddd",
  storageBucket: "auth-fdddd.appspot.com",
  messagingSenderId: "1058526028947",
  appId: "1:1058526028947:web:85c13808b77bd720e8d966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db}