"use client"
import { FetchUserFood } from "@/lib/FetchUserFood";
import { currentUserIdClient } from "@/lib/currentUserIdclient";
import { useState, useEffect } from "react";


interface propsType {
    type: string;
}

interface foodType {
    foodName: string;
    calories: string;
    carbs: string;
    fat: string;
    protein: string;
    sodium: string;
    sugar: string;
}
const FoodTable = (props: propsType) => {
    let render = false;
    if (props.type === "breakfast") {
        render = true;
    }
    const nutrientHeaders = ["Calories", "Carbs", "Fat", "Protein", "Sodium", "Sugar"];
    const [UserFood, SetUserFood] = useState<any>(undefined);
    useEffect(() => {
        currentUserIdClient().then((res) => {
            console.log(res);

            FetchUserFood(props.type, res).then((res) => {
                SetUserFood(res)
                console.log(res);
            })
        })

    }, [props.type])
    return (<div className="m-4 hidden md:block">
        <table className="md:w-[920px] w-[400px]">
            <thead>
                <tr >
                    <th className="md:w-[40%] w-[20%] text-left font-bold text-blue-900 md:text-2xl">
                        {props.type}</th>
                    {render ? nutrientHeaders.map((val) => (
                        <th key={Math.random()}
                            className="md:p-3 bg-[#00548F] border-white border-[1px] text-white">{val}</th>
                    )) : null
                    }
                </tr>
                {/*fetch the food from the db based on type*/
                    UserFood ? UserFood.map((val: foodType) => (
                        <tr key={Math.random()} className="border-b-[2px] bg-gray-200 text-center">
                            <td key={Math.random()} className="w-[40%] text-left">{val.foodName}</td>
                            <td key={Math.random()} >{val.calories}</td>
                            <td key={Math.random()} >{val.carbs}</td>
                            <td key={Math.random()} >{val.fat}</td>
                            <td key={Math.random()} >{val.protein}</td>
                            <td key={Math.random()} >{val.sodium}</td>
                            <td key={Math.random()} >{val.sugar}</td>
                        </tr>
                    )) : null
                }
                <tr className="border-b-[2px]">
                    <td
                        className="text-blue-400 ml-5 cursor-pointer ">
                        Add food
                    </td>
                </tr>
            </thead>
        </table>
    </div>)
}

export default FoodTable;
