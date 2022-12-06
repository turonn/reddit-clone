// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWlgnlxIKyQAPQNxXgOFInKErzbtQyLTI",
  authDomain: "instrument-inventory.firebaseapp.com",
  projectId: "instrument-inventory",
  storageBucket: "instrument-inventory.appspot.com",
  messagingSenderId: "124742206355",
  appId: "1:124742206355:web:5a81c93c405e9cc1999e66",
  measurementId: "G-JB7K08PD8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);