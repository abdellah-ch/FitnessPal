"use client"
import { useState } from "react"
import { UnitsModal } from "../molucules/UnitsModal"

const SetupComponent = () => {
    //handelSubmit
    const handelSubmit = () => {

    }
    //units
    const [weightUnit, setWeightUnit] = useState<string>("lbs")
    const [heightUnit, setHeightUnit] = useState<string>("ft")

    //modal
    const [isOpen, setIsopen] = useState<boolean>(false)
    const handelModel = () => {
        setIsopen(!isOpen)
    }


    return (
        <div className="max-w-[992px] mr-auto ml-auto mt-4 z-20">
            {isOpen ? <UnitsModal isOpen={isOpen} setIsOpen={setIsopen} /> : null}
            <div className=" flex flex-col gap-3">
                <h1 className="py-8 text-2xl font-bold">Setup your diet profile</h1>
                <p className="py-2 ">
                    To help us setup your personalized fitness goals, please setup your profile by making any changes to the values below.
                </p>
                <p className="text-blue-600 cursor-pointer" onClick={handelModel}>Change weight and height units(eg.kg vs lbs)</p>
            </div>

            <div className="">
                <form onSubmit={handelSubmit}></form>
            </div>
        </div>
    )
}

export default SetupComponent
