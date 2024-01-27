import { auth } from "@/lib/firebase-config";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export async function signOutUser() {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    await fetch("/api/signOut", {
      method: "POST",
    });

  }