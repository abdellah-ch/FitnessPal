"use client"
import {useState,useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import user from "@/public/user.png"
import { FaNotesMedical } from "react-icons/fa";
import Link from "next/link";
import { currentUserIdClient } from "@/lib/currentUserIdclient";
import {GetCalorieGoal} from "@/lib/GetCalorieGoal"; 
//import { useCookies } from 'next-client-cookies';
//install it 
const DailyBox = () => {
    const router = useRouter();
    const [Daily,SetDaily] = useState<string>("");
    
    useEffect(()=>{
      currentUserIdClient().then((res) => {
        //res is the userId
        GetCalorieGoal(res).then(res =>  SetDaily(res.toString()))
        //make a request to get the goal calorie
        //get todays food calories
      });
    },[])
        /* 
        get the cookie in client side 


        const cookies = useCookies();
        <p>My cookie value: {cookies.get('my-cookie')}</p>
     */
    return (
        <div className="flex flex-col md:w-[100%]  w-[90%] m-auto md:m-0">
            <div className="flex flex-wrap bg-[#0a5282] px-2 text-white items-center justify-between  h-[36px]">
                <div className="h-full flex items-center ">
                    <h1>
                        Your Daily Summary
                    </h1>
                </div>
                <div className="h-full flex items-center">
                    <p className="text-4xl">2</p>
                    <p className="text-xs">DAY <br /> STREAK</p>
                </div>
            </div>
            <div className="bg-[#F6F6F6]">
                <div className="flex mt-10 ml-3 gap-4">
                    <div className="max-w-[130px] ml-2 h-[100%]">
                        <Image src={user} alt="user" width={120} />
                        <div className="flex justify-between">
                            <div>
                                <p> <span className="text-2xl text-green-500">0 </span>lbs</p>
                                <p className="text-xs">LOST</p>
                            </div>
                            <FaNotesMedical className="text-2xl mt-2" />
                        </div>
                    </div>
                    <div className="w-full ">
                        <p className="text-xs mb-2">Calories Remaining <Link href="" className="text-sm text-blue-600">Change</Link></p>
                        <div className="flex flex-col gap-2 lg:flex-row p-3">
                            <span className="text-5xl font-bold text-green-500 md:w-[30%]">{Daily}</span>
                            <div className="flex flex-col gap-2 lg:flex-row lg:w-[70%] ">
                                <button onClick={()=>router.push("/Exercice")} 
                                className=" border-1 text-[#666666] bg-white border-[#D2D2D2]
                                hover:bg-[#B2B2B2] rounded-md px-[20px]  w-[80%] py-1 md:w-[70%]">
                                  Add Exercice
                                </button>
                                <button onClick={()=>router.push("/Food")} className=" border-1 text-[#666666] bg-white border-[#D2D2D2] hover:bg-[#B2B2B2] rounded-md px-[20px] w-[80%] py-1 md:w-[70%]">Add Food</button>
                            </div>

                        </div>
                        <div className=" border-t-2 py-3 w-[95%] hidden md:block m-auto  ">
                            <div className="flex flex-row justify-around ">
                                <div className="border-r-2 pr-5">
                                    <p>{Daily}</p>
                                    <p>Goal</p>
                                </div>
                                <div>
                                    <p>0</p>
                                    <p>Food</p>
                                </div>
                                <p>-</p>
                                <div>
                                    <p>0</p>
                                    <p>Exercice</p>
                                </div>
                                <p>=</p>
                                <div>
                                    <p>0</p>
                                    <p>Net</p>
                                </div>
                            </div>
                            <div className="border-4 mt-2 w-full"></div>
                        </div>
                    </div>
                </div>
                <div className=" border-t-2 py-3 w-[95%] md:hidden m-auto ">
                    <div className="flex flex-row justify-around ">
                        <div className="border-r-2 pr-5">
                            <p>2590</p>
                            <p>Goal</p>
                        </div>
                        <div>
                            <p>0</p>
                            <p>Food</p>
                        </div>
                        <p>-</p>
                        <div>
                            <p>0</p>
                            <p>Exercice</p>
                        </div>
                        <p>=</p>
                        <div>
                            <p>0</p>
                            <p>Net</p>
                        </div>
                    </div>
                    <div className="border-4 mt-2"></div>
                </div>
            </div>
        </div>
    )
}
export default DailyBox; 
