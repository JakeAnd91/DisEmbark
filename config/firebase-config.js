// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrRcLscTATvz_btmABiczkULY_I6SEt4",
  authDomain: "dis-embark-xvnpzx.firebaseapp.com",
  projectId: "dis-embark-xvnpzx",
  storageBucket: "dis-embark-xvnpzx.appspot.com",
  messagingSenderId: "135887322005",
  appId: "1:135887322005:web:cfe2f6c2446ceb33b9149c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = firebase.database();

