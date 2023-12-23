// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ozjSDsAdzSiNXRq2J6MGoM4Nlf5TGTk",
  authDomain: "photofolio-app-b2e0f.firebaseapp.com",
  projectId: "photofolio-app-b2e0f",
  storageBucket: "photofolio-app-b2e0f.appspot.com",
  messagingSenderId: "856392900932",
  appId: "1:856392900932:web:603f6bb4b28d8a48a1b711",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
