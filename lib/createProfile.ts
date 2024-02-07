"use server"
import { redirect } from "next/navigation";
import { db } from "./prisma";
import { toast } from "react-toastify";


const ageCalculation = (birthdate:string)=>{
    const birthYear = Number(birthdate.substring(0,4));    

    const d = new Date();
    let year = d.getFullYear();


    let age = year - birthYear;

    return age;
}

const createProfile = async (userId:string,formValues: {[k: string]: FormDataEntryValue},weightUnit:string,heightUnit:string)=>{
 //insert formValues
 let age =  ageCalculation(formValues.birthDate.toString())

  await db.profile.create({
    data: {
    bio:"change it later",
    weight: Number(formValues.weight) ,    
    weightUnit:weightUnit, 
    height:Number(formValues.height), 
    heightUnit:heightUnit,
    age:age, 
    sex : formValues.gender.toString(),
    activety:formValues.activityLevel.toString(),
    weightGoal:Number(formValues.GoalWeight), 
    userId:userId 
    },
  });

    
 redirect("/account")

}

export default createProfile