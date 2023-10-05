// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN6byqus8q-ATY_VReiKiOwbcMRAplQsQ",
  authDomain: "dragon-news-7251a.firebaseapp.com",
  projectId: "dragon-news-7251a",
  storageBucket: "dragon-news-7251a.appspot.com",
  messagingSenderId: "546336151303",
  appId: "1:546336151303:web:ea897e3d30af55b8d357a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app