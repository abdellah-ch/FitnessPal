import { cookies } from "next/headers"

export const currentUserIdClient = async (server?:boolean) => {
    if(!server){
    const res = await  fetch("http://localhost:3000/api/checkUser", {
        credentials: 'include',
        method: "get",
    })
    
    const data = await res.json()
    console.log(data);
    
    return data.decodedClaims.uid
    }
   }