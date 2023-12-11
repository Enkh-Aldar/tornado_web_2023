import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFNoHGPnEW2bODSXRd_7NIyFBaHoxgadw",
  authDomain: "enkh-aldar.firebaseapp.com",
  projectId: "enkh-aldar",
  storageBucket: "enkh-aldar.appspot.com",
  messagingSenderId: "186003011862",
  appId: "1:186003011862:web:e9141c84dcdb2543283837"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);