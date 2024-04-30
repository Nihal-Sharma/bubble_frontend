
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAXfII09atbY2pfL-DM5qd9-R-XhFMPnUw",
  authDomain: "bubbles-1bc05.firebaseapp.com",
  projectId: "bubbles-1bc05",
  storageBucket: "bubbles-1bc05.appspot.com",
  messagingSenderId: "1047825960415",
  appId: "1:1047825960415:web:effc6c1acd72b2f385086a",
  measurementId: "G-B9WEJK2100"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)