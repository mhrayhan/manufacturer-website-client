// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
  apiKey: "AIzaSyAOmL9YCxSuYolZnvCp_woNi3XtQzt6cGU",
  authDomain: "tools-cart.firebaseapp.com",
  projectId: "tools-cart",
  storageBucket: "tools-cart.appspot.com",
  messagingSenderId: "672597034475",
  appId: "1:672597034475:web:95835f3bb7598990b305ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;