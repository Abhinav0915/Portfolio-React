// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4RzV-nGJ9JqBqfjPBMlYxyTZHyx1zxZw",
  authDomain: "portfoliowebsite-a1dca.firebaseapp.com",
  projectId: "portfoliowebsite-a1dca",
  storageBucket: "portfoliowebsite-a1dca.appspot.com",
  messagingSenderId: "384187264526",
  appId: "1:384187264526:web:5b07cad431cdf05dca165f",
  measurementId: "G-MY0XX83712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);