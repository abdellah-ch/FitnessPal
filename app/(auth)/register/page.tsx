//import { customInitApp } from "@/lib/firebase-admin-config";

import Register from "@/components/organisms/Register";

export default async function Registerpage() {
    /* createUserWithEmailAndPassword(
      auth,
      "abdellahchotta5@gmail.com",
      "12345678"
    ).then((userCredential: UserCredential) => {
      //If a user is successfully created with an appropriate email
      sendEmailVerification(userCredential.user);
    });
  */
    return <Register />;
}
