// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBab0O2WDLqi7f_ZtSUUFsdZhffuglkk5g",
  authDomain: "the-new-dragon-project-8cbc6.firebaseapp.com",
  projectId: "the-new-dragon-project-8cbc6",
  storageBucket: "the-new-dragon-project-8cbc6.appspot.com",
  messagingSenderId: "949283146880",
  appId: "1:949283146880:web:dabcfd5ced6dc6f187ea65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app