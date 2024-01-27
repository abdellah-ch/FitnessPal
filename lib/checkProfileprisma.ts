import { db } from "./prisma";
import currentUserPrisma from "./currentUserprisma";
export const checkProfileprisma =async () => {
    try {
     const user = await currentUserPrisma()

    const profile = await db.profile.findUnique({
        where: {
            userId: user.user_id,
        },
    });
    
    if(profile){
        return profile
    }else{
        return false
    }    
    } catch (error) {
       console.error(error) 
    }
   
}