import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from "@/lib/firebase-config"
/*const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });*/

  const signUpWithEmail = async (email:string,password:string) =>{

const res = await createUserWithEmailAndPassword(auth, email, password)
const IdToken = await res.user.getIdToken()

    await fetch("/api/auth", {
           method: "POST",
           headers: {
             Authorization: `Bearer ${IdToken}`,
           },
         });
 
  }

  export default signUpWithEmail;