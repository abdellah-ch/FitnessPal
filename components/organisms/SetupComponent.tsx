"use client"
import { HtmlHTMLAttributes, useState } from "react"
import { UnitsModal } from "../molucules/UnitsModal"
import { CheckUser } from "@/lib/checkUser"
import { db } from "@/lib/prisma"
import createProfile from "@/lib/createProfile"
import { toast } from "react-toastify"

interface propsType {
    user: {
        userId: string;
        Username: string;
        imageUrl: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    } | undefined

}

const SetupComponent = (props: propsType) => {

    //handelSubmit
    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var formData = new FormData(e.currentTarget)
        ///
        let form_values = Object.fromEntries(formData)
        console.log(form_values);

        let userId = props.user?.userId

        console.log(userId);

        //TODO : add the profile create a function to handle create profile then redirect to "/account" calculte the daily calories
        //and store in the db  

        userId ? createProfile(userId, form_values, weightUnit, heightUnit).catch((e) => {
            toast.error('error during insertion');
        }) : null

    }
    //units
    const [weightUnit, setWeightUnit] = useState<string>("lbs")
    const [heightUnit, setHeightUnit] = useState<string>("ft")

    //modal
    const [isOpen, setIsopen] = useState<boolean>(false)
    const handelModel = () => {
        setIsopen(!isOpen)
    }
    //handele submit mobel
    const modelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var formData = new FormData(e.currentTarget)
        //chage the iterable "formData" to an object
        let formObject = Object.fromEntries(formData);
        console.log(formObject.unitH);
        if (formObject.unitH) {
            setHeightUnit(formObject.unitH.toString())
        }
        if (formObject.unitW) {
            setWeightUnit(formObject.unitW.toString())
        }
        setIsopen(false)
    }

    return (
        <div className="max-w-[992px] mr-auto ml-auto mt-4 z-20 p-2">
            {isOpen ? <UnitsModal isOpen={isOpen} setIsOpen={setIsopen} modelSubmit={modelSubmit} /> : null}
            <div className=" flex flex-col gap-3">
                <h1 className="py-8 text-2xl font-bold">Setup your diet profile</h1>
                <p className="py-2 ">
                    To help us setup your personalized fitness goals, please setup your profile by making any changes to the values below.
                </p>
                <p className="text-blue-600 cursor-pointer" onClick={handelModel}>Change weight and height units(eg.kg vs lbs)</p>
            </div>

            <div className="mt-7">
                <form onSubmit={handelSubmit} className="flex flex-col gap-3">
                    {/* first row  */}
                    <div className="flex flex-row items-center gap-5">
                        <div className="relative flex flex-row w-[150px] p-4 border-[1px] border-gray-700 rounded-lg">
                            <input type="text" className=" w-[100%] outline-none " placeholder="weight" name="weight" />
                            <p className="absolute right-2 ">{weightUnit}</p>
                        </div>
                        <div>On</div>
                        <div className=" w-[150px] p-4 border-[1px] border-gray-700 rounded-lg cursor-pointer">
                            <input type="date" className=" w-[100%] outline-none" />
                        </div>
                    </div>
                    {/* first row  */}
                    {/*second row */}
                    <div className="relative flex flex-row w-[150px] p-4 border-[1px] border-gray-700 rounded-lg">
                        <input type="text" className=" w-[100%] outline-none" placeholder="height" name="height" />
                        <p className="absolute right-2 ">{heightUnit}</p>
                    </div>
                    {/*second row */}
                    {/*3 row */}
                    <div className="relative flex flex-row w-[150px] p-4 border-[1px] border-gray-700 rounded-lg">
                        <input type="text" className=" w-[100%] outline-none" placeholder="Goal weight" name="GoalWeight" />
                        <p className="absolute right-2 ">{weightUnit}</p>
                    </div>
                    {/*3 row */}
                    {/*4 */}
                    <div>
                        <p className="font-bold py-4">Sex</p>
                        <div className="flex gap-3">
                            <input type="radio" id="female" value="female" name="gender" /> <label htmlFor="female">Female</label>
                            <input type="radio" id="male" value="male" name="gender" /> <label htmlFor="male">Male</label>
                        </div>
                    </div>
                    {/*5 */}
                    <div>
                        <p className="font-bold py-4">Birth date</p>
                        <div className=" w-[250px] p-4 border-[1px] border-gray-700 rounded-lg cursor-pointer">
                            <input type="date" className=" w-[100%] outline-none" name="birthDate" />
                        </div>
                    </div>

                    {/*6*/}
                    <div>
                        <p className="font-bold p-4">How would you describe your normal daily activities?</p>
                        <div className="flex flex-col gap-5">
                            <div>
                                <input type="radio" id="sedentary" name="activityLevel" value="sedentary" />
                                <label htmlFor="sedentary">Sedentary: Spend most of the day sitting (e.g. bank teller, desk job)</label>
                            </div>
                            <div>
                                <input type="radio" id="lightlyActive" name="activityLevel" value="lightlyActive" />
                                <label htmlFor="lightlyActive">Lightly Active: Spend a good part of the day on your feet (e.g. teacher, salesperson)</label>
                            </div>
                            <div>
                                <input type="radio" id="active" name="activityLevel" value="active" />
                                <label htmlFor="active">Active: Spend a good part of the day doing some physical activity (e.g. food server, postal carrier)</label>
                            </div>
                            <div>
                                <input type="radio" id="veryActive" name="activityLevel" value="veryActive" />
                                <label htmlFor="veryActive">Very Active: Spend most of the day doing heavy physical activity (e.g. bike messenger, construction worker)</label>
                            </div>
                        </div>
                    </div>
                    {/* submit button */}
                    <button className="w-[200px] border-[#0066ee80] p-2 border-[2px] mb-20 mt-5 rounded-lg">
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SetupComponent
