import { cookies } from "next/headers"

export const checkUserFirebase =async () => {
     let url:string 

        if(process.env.NEXT_PUBLIC_ENV != "dev"){

            url = "https://fitnesspal-ruddy.vercel.app/api/checkUser"
        
        }else{

            url = "http://localhost:3000/api/checkUser" 

        }

    const cookieStore = cookies()

    const token = cookieStore.get('session')
   
    const res = await fetch(url, {

        credentials: 'include',
        method: "get",
        headers: {
            Cookie: `session=${token?.value}`
        }

    })

    const data = await res.json()   
   
    return data;
}