import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest, ) {

        let url:string 

        if(process.env.NEXT_PUBLIC_ENV != "dev"){

            url = "https://fitnesspal-ruddy.vercel.app/api/checkUser"
        
        }else{

            url = "http://localhost:3000/api/checkUser" 

        }

        //const res = await fetch(url)

        const res = await fetch(url, {

            credentials: 'include',
            method:"get",
            headers:{
                Cookie: `session=${request.cookies.get("session")?.value}`
            }
        })
    
        const data = await res.json()
        
        if (!data.decodedClaims) {

            return NextResponse.redirect(new URL("/login", request.url));

        }else{

            return NextResponse.next();

        }
    }
    

//Add your protected routes

export const config = {

    matcher: ['/account/:path*', '/Exercice/:path*' ,'/Food/:path*','/Community/:path*' ],

};
