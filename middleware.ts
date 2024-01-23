import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, ) {
  const session = request.cookies.get("session")?.value;
  //console.log(session);
  

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

     
  //fetch
  const res = await fetch("/api/checkUser", {
        method: "POST",
        body: JSON.stringify({token:session}),
      })

  const data = await res.json()


  //Return to /login if token is not authorized
 if (data.isLogged === "alo") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
    matcher: ['/account/:path*', '/Exercice/:path*' ,'/Food/:path*','/Community/:path*' ],
};