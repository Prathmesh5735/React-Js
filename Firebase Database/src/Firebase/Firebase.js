
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2c8KcND_QN-3go8mDuGjQKMoxwxAlRUM",
  authDomain: "axiospost-5acc3.firebaseapp.com",
  projectId: "axiospost-5acc3",
  storageBucket: "axiospost-5acc3.appspot.com",
  messagingSenderId: "1088104517355",
  appId: "1:1088104517355:web:77ebc8390584d866d1f8ae",
  measurementId: "G-FRNRB4EYGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();