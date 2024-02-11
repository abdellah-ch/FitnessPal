
export const currentUserIdClient = async () => {
     let url:string 

        if(process.env.NEXT_PUBLIC_ENV != "dev"){

            url = "https://fitnesspal-ruddy.vercel.app/api/checkUser"
        
        }else{

            url = "http://localhost:3000/api/checkUser" 

        }

    const res = await  fetch(url, {
        credentials: 'include',
        method: "get",
    })
    
    const data = await res.json()
    console.log(data);
    
    return data.decodedClaims.uid
   }