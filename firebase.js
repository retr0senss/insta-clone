// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRMR0TZvNcUSyYJ5jhk-tb35Lak2ghNw",
  authDomain: "insta-2-clone-c6a5a.firebaseapp.com",
  projectId: "insta-2-clone-c6a5a",
  storageBucket: "insta-2-clone-c6a5a.appspot.com",
  messagingSenderId: "863064088281",
  appId: "1:863064088281:web:de02704e8735502d7668c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
