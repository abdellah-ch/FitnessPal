import SetupComponent from "@/components/organisms/SetupComponent"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function Setup() {
    // check profile
    const profile = await checkProfileprisma()

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

    if (profile) {
        redirect("/account")
    }
    return (
        <SetupComponent userId={data.decodedClaims.uid} />
    )
}

export default Setup