import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKhroyyQ-bCKk_EQ7StXOXmcic9PeUfBE",
  authDomain: "i-blog-app.firebaseapp.com",
  projectId: "i-blog-app",
  storageBucket: "i-blog-app.appspot.com",
  messagingSenderId: "12332381175",
  appId: "1:12332381175:web:5e9e364a2d2ac5f01df4f2",
  measurementId: "G-GPJLWFXCYR"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);