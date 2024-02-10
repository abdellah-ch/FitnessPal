import { cookies } from "next/headers"

export const currentUserIdServer =async () => {
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
   
    return data.decodedClaims.uid;
}