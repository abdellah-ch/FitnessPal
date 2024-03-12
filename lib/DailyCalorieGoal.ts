"use server"
import { db } from "./prisma"
import axios from "axios"

export const DailyCalorieGoal = async (userId: string) => {
    //get user profile
    const profile = await db.profile.findUnique({
        where: {
            userId: userId,
        },
    });

    let daily: number

    if (profile) {
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
        const response = await axios.request(options);
        if (profile.weight < profile.weightGoal) {
            daily = response.data.data.goals["Mild weight gain"].calory;
            await db.dailyCalGoal.create({
                data: {
                    daily: daily,
                    userId: userId
                }
            })
        } else {
            daily = response.data.data.goals["Mild weight loss"].calory;
            await db.dailyCalGoal.create({
                data: {
                    daily: daily,
                    userId: userId
                }
            })
        }


    }


} 
