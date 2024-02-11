import SetupComponent from "@/components/organisms/SetupComponent"
import { currentUserIdServer } from "@/lib/CurrentUserIdserver"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function Setup() {
    // check profile
    const profile = await checkProfileprisma()
    const userId = await currentUserIdServer()
    if (profile) {
        redirect("/account")
    }
    return (
        <SetupComponent userId={userId} />
    )
}

export default Setup