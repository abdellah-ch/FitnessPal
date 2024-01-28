import { auth } from "@/lib/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest) {
  const session = request.cookies.get("session");
  //Validate if the cookie exist in the request
  if (!session?.value) {
    return Response.json({ isLogged: false }, { status: 200 });
  }

  //Use Firebase Admin to validate the session cookie
  const decodedClaims = await auth.verifySessionCookie(session.value, true);

  if (!decodedClaims) {
    return Response.json({ isLogged: false }, { status: 200 });
  }

  return Response.json({ isLogged: true }, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");

  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth.verifyIdToken(idToken);
    
    if (decodedToken) {
      //Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
        SameSite:"Lax"
      };

      //Add the cookie to the browser
      cookies().set(options);
    }
  }

  return Response.json({}, { status: 200 });
  
}
