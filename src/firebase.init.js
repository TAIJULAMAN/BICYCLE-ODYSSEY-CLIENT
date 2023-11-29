// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwliUcO_08jZM4NQcdNSdmjh2pnlM8HM",
  authDomain: "car-shop-client.firebaseapp.com",
  projectId: "car-shop-client",
  storageBucket: "car-shop-client.appspot.com",
  messagingSenderId: "373127409381",
  appId: "1:373127409381:web:3e03a41619c956ffb26e0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
