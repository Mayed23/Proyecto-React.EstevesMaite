
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mystore-8508f.firebaseapp.com",
  projectId: "mystore-8508f",
  storageBucket: "mystore-8508f.appspot.com",
  messagingSenderId: "413172481414",
  appId: "1:413172481414:web:2ae64de3b417edd0e6c007"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


