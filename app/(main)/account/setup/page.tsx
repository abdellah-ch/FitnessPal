import SetupComponent from "@/components/organisms/SetupComponent"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { CheckUser } from "@/lib/checkUser"
import { redirect } from "next/navigation"

async function Setup() {
    // check profile
    const user = await CheckUser()
    const profile = await checkProfileprisma()
    if (profile) {
        redirect("/account")
    }
    return (
        <SetupComponent user={user} />
    )
}

export default Setup