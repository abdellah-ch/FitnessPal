import SetupComponent from "@/components/organisms/SetupComponent"
import { CheckUser } from "@/lib/checkUser"
import { useState } from "react"

async function Setup() {
    // check profile
    const user = await CheckUser()
    return (
        <SetupComponent user={user} />
    )
}

export default Setup