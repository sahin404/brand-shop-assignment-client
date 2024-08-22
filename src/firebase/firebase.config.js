// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNjSGlCAbw9uFCC6WtQB6J4J0iGRS6duY",
  authDomain: "brand-shop-assignment-client.firebaseapp.com",
  projectId: "brand-shop-assignment-client",
  storageBucket: "brand-shop-assignment-client.appspot.com",
  messagingSenderId: "740216111221",
  appId: "1:740216111221:web:73e540f345ed23cf14383c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);