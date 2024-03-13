"use server"
import {db} from "./prisma"


export const GetCalorieGoal = async (userId:String) =>{
  
 const {daily} = await db.dailyCalGoal.findUnique({
        where: {
          userId:userId
        },
    });
return daily;
}
    
