import { auth } from "@/lib/firebase-admin-config";

import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function GET(request:NextRequest) {
   
    const cookieStore = cookies()    

    const token = cookieStore.get('session')
   

    if(token && token.value != "undefined"){

        const decodedClaims = await  auth.verifySessionCookie(token.value, false)
        
        if (!decodedClaims) {

            return Response.json( { status: 401 });

        }

        return Response.json({decodedClaims,status:200})
    }
    
   return Response.json( { status: 401 });
    
  
}