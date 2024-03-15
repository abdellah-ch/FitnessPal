"use server"
import {db} from "./prisma";

export const FetchUserFood =async (mealtype:string,userId:string) =>{
 
  const StartOfDay = new Date();
  StartOfDay.setHours(0,0,0,0)
  const endOfDay = new Date(); 
  endOfDay.setHours(23,59,59,999)
  const foods = await db.foods.findMany({
      where : {
          userId:userId,
          mealtype:mealtype,
          createdAt:{
            gte : StartOfDay,
            lte : endOfDay,
          }
      },
      select : {
          foodName:true,
          calories:true,
          carbs:true,
          fat:true,
          protein:true,
          sodium:true,
          sugar:true,
      }
  })

  return foods || undefined;
}
