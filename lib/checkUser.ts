import {db} from "./prisma"
import currentUserPrisma from "./currentUserprisma";
export const CheckUser = async ()=>{
    //const profile = await db.profile.findMany
    const user = await currentUserPrisma()  
    //console.log(user);
   if(user){
    const getUser = await db.user.findUnique(
        {
            where : {
                userId:user.user_id
            }
        }
        )
        //console.log(getUser);
        if(!getUser){
           const newUser =  await db.user.create({
                data : {
                    userId:user.user_id,
                    Username:user.name||"User",
                    imageUrl:user.picture||"",
                    email:user.email||"",

                },
            })
            return newUser;
        }else{
            return getUser;
        }
        }
        //else redirect to login page

  }
    
