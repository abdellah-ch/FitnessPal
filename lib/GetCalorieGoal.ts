"use server"
import {db} from "./prisma"


export const GetCalorieGoal = async (userId:string) =>{
  
 const res = await db.dailyCalGoal.findUnique({
        where: {
          userId:userId
        },
    });
return res?.daily || "";
}
    
