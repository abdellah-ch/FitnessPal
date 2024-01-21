import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
type Config = {
    apiKey:string,
    authDomain:string,
    projectId:string,
    storageBuket:string,
   messagingSenderId:string
   appId:string
}
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,   
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_ADMIN_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export {auth, provider}
