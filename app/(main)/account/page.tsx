"use server"
import InitialComponent from "@/components/organisms/initialComponent"
import { checkProfileprisma } from "@/lib/checkProfileprisma"
import { createUserPrisma } from "@/lib/createUserPrisma"
import { redirect } from "next/navigation"
/*
interface profileType {
    bio: string;
    weight: number;
    weightUnit: string;
    height: number;
    heightUnit: string;
    weightGoal: number;
    age: number;
    sex: string;
    activety: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}
export const dailyCaloriesCalc = async (profile: profileType) => {
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
        params: {
            age: profile.age,
            gender: profile.sex,
            height: profile.height,
            weight: profile.weight,
            activitylevel: 'level_1'
        },
        headers: {
            'X-RapidAPI-Key': '9a98358058msh439327998e28f08p18f6dcjsna0b90dbffc59',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}
*/

const page = async () => {
    //check the user if there is no user create one
    await createUserPrisma()
    const profile = await checkProfileprisma()
    if (!profile) {
        redirect("/account/setup")
    } else {
        return (
            <InitialComponent />
        )
    }



}

export default page