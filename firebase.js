// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN9tniz_PWXbufmer92Kg13pf37VWmt7c",
  authDomain: "hok-scoreboard.firebaseapp.com",
  projectId: "hok-scoreboard",
  storageBucket: "hok-scoreboard.firebasestorage.app",
  messagingSenderId: "842346710648",
  appId: "1:842346710648:web:b4f4a5a1068793bcb28f8d",
  measurementId: "G-LNW3QX3TB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
