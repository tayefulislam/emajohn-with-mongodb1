
import getAuth from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeSdOyz5uw7IWRhI3WghYN1COjytvSq2I",
    authDomain: "ema-jhon-simple1-4f2ca.firebaseapp.com",
    projectId: "ema-jhon-simple1-4f2ca",
    storageBucket: "ema-jhon-simple1-4f2ca.appspot.com",
    messagingSenderId: "1079827941687",
    appId: "1:1079827941687:web:e9eeeebef50b4db6b572b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app)
export default auth;