//import { redirect } from "next/navigation";
//import { signOutUser } from "@/lib/signOut";

import InitialComponent from "@/components/organisms/initialComponent";
import { CheckUser } from "@/lib/checkUser"
//import { auth } from "@/lib/firebase-admin-config";
import { checkProfileprisma } from "@/lib/checkProfileprisma";
import { redirect } from "next/navigation";
import currentUserPrisma from "@/lib/currentUserprisma"
import LandingPage from "@/components/organisms/LandingPage";
const MainPage = async () => {
    const user = await currentUserPrisma()
    if (user != null) {
        redirect("/account")
    }
    return <LandingPage />
}

export default MainPage;