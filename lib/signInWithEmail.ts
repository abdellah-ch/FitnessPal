import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/lib/firebase-config"

const signInEmail = async (email:string,password:string) =>{
    const res = await signInWithEmailAndPassword(auth, email, password)
    const IdToken = await res.user.getIdToken()

    await fetch("/api/auth", {
           method: "POST",
           headers: {
             Authorization: `Bearer ${IdToken}`,
           },
         });

} 

export default signInEmail;


