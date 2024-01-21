import { auth, provider } from "@/lib/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export async function signInUser() {
    //Sign in with the Firebase client
    const res = await signInWithPopup(auth,provider);
    const IdToken = await res.user.getIdToken()
    
    const result = await fetch("/api/auth", {
           method: "POST",
           headers: {
               Authorization: `Bearer ${IdToken}`,
           },
    });

    //const data = await result.json()
    //return data;       
    //Clear the cookies in the server
    /* await fetch("http://localhost:3000/api/signOut", {
      method: "POST",
    });
    */
  }