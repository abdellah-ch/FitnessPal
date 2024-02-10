//import { redirect } from "next/navigation";
//import { signOutUser } from "@/lib/signOut";

import InitialComponent from "@/components/organisms/initialComponent";
import { CheckUser } from "@/lib/checkUser"
//import { auth } from "@/lib/firebase-admin-config";
import { checkProfileprisma } from "@/lib/checkProfileprisma";
import { redirect } from "next/navigation";
import currentUserPrisma from "@/lib/currentUserprisma"
import LandingPage from "@/components/organisms/LandingPage";
import { cookies } from "next/headers";
const MainPage = async () => {
    const cookieStore = cookies()

    const token = cookieStore.get('session')

    const res = await fetch("http://localhost:3000/api/checkUser", {

        credentials: 'include',
        method: "get",
        headers: {
            Cookie: `session=${token?.value}`
        }

    })

    const data = await res.json()
    if (data.status === 401)
        return <LandingPage />
    else
        redirect("/account")
}

export default MainPage;