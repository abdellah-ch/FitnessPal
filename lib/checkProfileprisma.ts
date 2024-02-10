"use server"
import { currentUserIdServer } from "./CurrentUserIdserver";
import { db } from "./prisma";
export const checkProfileprisma = async () => {
    const userId = await currentUserIdServer()
    try {

    const profile = await db.profile.findUnique({
        where: {
            userId: userId,
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