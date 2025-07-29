// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOm-mOv2-JRm1LqsIoEDW1RsWKvn_AHk",
  authDomain: "netflix-gpt-b1fbb.firebaseapp.com",
  projectId: "netflix-gpt-b1fbb",
  storageBucket: "netflix-gpt-b1fbb.firebasestorage.app",
  messagingSenderId: "295991208501",
  appId: "1:295991208501:web:84ba69ab71cf8bfb241f7c",
  measurementId: "G-MJNTV70M42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
