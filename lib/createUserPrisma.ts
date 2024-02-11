import { checkUserFirebase } from "./checkUserFirebase"
import {db} from "./prisma"
export const createUserPrisma = async ()=>{

   const currentUser = await checkUserFirebase() 
   if(currentUser.status === 200){
        const getUser = await db.user.findUnique({
            where : {
                userId:currentUser.decodedClaims.uid            }
            })
        if(!getUser){
           const newUser =  await db.user.create({
                data : {
                    userId:currentUser.decodedClaims.uid,
                    Username:currentUser.decodedClaims.name||"User",
                    imageUrl:currentUser.decodedClaims.picture||"",
                    email:currentUser.decodedClaims.email||"",
                },
            })
        }}

  }