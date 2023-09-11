// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional  
   
const firebaseConfig = {
  apiKey: "AIzaSyABWGeW_Jswrggv7IKxmjLIYKF1KlCqjtk",
  authDomain: "gamemate-5d2e1.firebaseapp.com",
  projectId: "gamemate-5d2e1",
  storageBucket: "gamemate-5d2e1.appspot.com",
  messagingSenderId: "906940104201",
  appId: "1:906940104201:web:870ec3eb2e5259d91842d8",
  measurementId: "G-34CD6D2MSG"
};

  
// Initialize Firebase 
export  const app = initializeApp(firebaseConfig) 
export const auth =getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app); 
