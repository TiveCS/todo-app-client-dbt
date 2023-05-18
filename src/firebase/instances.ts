// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYYyXAsBWXjLsEwHwoD6fWHJ1EsGsxD4w",
  authDomain: "rehoukrel-lab.firebaseapp.com",
  databaseURL:
    "https://rehoukrel-lab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rehoukrel-lab",
  storageBucket: "rehoukrel-lab.appspot.com",
  messagingSenderId: "641410507887",
  appId: "1:641410507887:web:a444ba9e1762e53c06199a",
  measurementId: "G-XM49MTEEGR",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const fireAnalytics = getAnalytics(fireApp);
const fireDatabase = getDatabase(fireApp);

export { fireAnalytics, fireDatabase, fireApp };
