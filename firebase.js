import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, onValue, set } 
from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBN9tniz_PWXbufmer92Kg13pf37VWmt7c",
  authDomain: "hok-scoreboard.firebaseapp.com",
  databaseURL: "https://hok-scoreboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hok-scoreboard",
  storageBucket: "hok-scoreboard.firebasestorage.app",
  messagingSenderId: "842346710648",
  appId: "1:842346710648:web:01b52760a62d0c5cb28f8d",
  measurementId: "G-2KX56ES70G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// LIVE LISTENER (for iPhone overlay)
export function listenScore(callback) {
  onValue(ref(db, "score"), (snapshot) => {
    callback(snapshot.val());
  });
}

// UPDATE SCORE (for Android control page)
export function updateScore(data) {
  set(ref(db, "score"), data);
}
