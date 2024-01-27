import { auth } from "@/lib/firebase-admin-config";
//try to change the logic return first 
export async function POST(request: Request, response: Response) {

    const session = await request.json()

    if (!session.token) {
    return Response.json({ isLogged: "alo" }, { status: 200 });
    }

const decodedClaims = await auth.verifySessionCookie(session.token, true)
   //console.log(decodedClaims);
    /*.catch(()=>{
    return Response.json({ isLogged: false }, { status: 200 });
    })*/

  if (!decodedClaims) {
    return Response.json({ isLogged: "alo"}, { status: 200 });
  }
  
    return Response.json({ isLogged: "true" ,decodedClaims},{status:200})
}