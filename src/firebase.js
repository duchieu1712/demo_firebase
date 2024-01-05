import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJo4_FT6FQ4Vul7QwHK0dKWT3uQ8CDT4s",
  authDomain: "demoauthfirebase-246a7.firebaseapp.com",
  projectId: "demoauthfirebase-246a7",
  storageBucket: "demoauthfirebase-246a7.appspot.com",
  messagingSenderId: "944999517635",
  appId: "1:944999517635:web:4791c1cad2817c3d2dc176",
  measurementId: "G-SKPBZ1PTTQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
