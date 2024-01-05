import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBIk94tpwAkhFA_hrw_JOsq7N6NfmxDK0",
  authDomain: "authfirebase-95c8a.firebaseapp.com",
  projectId: "authfirebase-95c8a",
  storageBucket: "authfirebase-95c8a.appspot.com",
  messagingSenderId: "192274817881",
  appId: "1:192274817881:web:2e3913bdbb56a53aae6248",
  measurementId: "G-M60MLRX83C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
