import InitialComponent from "@/components/organisms/initialComponent"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { redirect } from "next/navigation"

const page = async () => {

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