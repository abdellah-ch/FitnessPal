import { cookies } from "next/headers";
import { auth } from "./firebase-admin-config";
import { redirect } from "next/navigation";
import { User} from "firebase/auth";

//not prisma currentUserFirebase 
 const currentUserPrisma:any = async ()=>{
    const cookieStore = cookies()
    const session = cookieStore.get("session")?.value.toString();
    if(session){
    //get the user using session
    try {
     const user = await auth.verifySessionCookie(session,true)
    return user;//return the user 
    } catch (error) {
     console.error(error)   
    }
    
    }
    
    return null;
}

 export default currentUserPrisma;