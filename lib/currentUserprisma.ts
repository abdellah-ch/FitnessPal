import { cookies } from "next/headers";
import { auth } from "./firebase-admin-config";
import { redirect } from "next/navigation";
import { User} from "firebase/auth";

 
 const currentUserPrisma:any= async ()=>{
    const cookieStore = cookies()
    const session = cookieStore.get("session")?.value.toString();
    if(session){
    //get the user using session
    const user = await auth.verifySessionCookie(session,true)
    return user;
    }
    
    return null;
}

 export default currentUserPrisma;