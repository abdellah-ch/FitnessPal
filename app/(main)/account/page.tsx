import InitialComponent from "@/components/organisms/initialComponent"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { CheckUser } from "@/lib/checkUser"
import { redirect } from "next/navigation"

const page = async () => {
    await CheckUser()
    let profile = await checkProfileprisma()

    if (!profile) {
        redirect("/account/setup")
    } else {
        return (
            <InitialComponent />
        )
    }

}

export default page