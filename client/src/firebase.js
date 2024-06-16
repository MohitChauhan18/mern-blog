// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsDABFXgSQga8xJ5-LItcs6qCVBUTr3-Q",
  authDomain: "mern-blog-8b520.firebaseapp.com",
  projectId: "mern-blog-8b520",
  storageBucket: "mern-blog-8b520.appspot.com",
  messagingSenderId: "90719085114",
  appId: "1:90719085114:web:270e1d4476d15ef9168b03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);