"use client"
import { IoMdClose } from "react-icons/io";

interface ModelProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const UnitsModal = (props: ModelProps) => {
    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] z-30 bg-[#00000080]">
            <div className="relative h-[500px] bg-white w-[320px]">
                <IoMdClose className="absolute right-2 top-2 text-2xl cursor-pointer" onClick={() => { props.setIsOpen(false) }} />
                <h1 className="text-lg font-bold py-5 px-3 mt-2">Change Units</h1>
                <form className="px-3 ">
                    <div>
                        <p className="text-sm py-2">How would you like to measure weight?</p>
                        <div className="py-2">
                            <input className="mr-3 w-5 h-5 p-2 " type="radio" value="kg" name="unitW" id="Kilograms" />
                            <label className="text-lg" htmlFor="Kilograms">Kilograms</label>
                        </div>
                        <div className="py-2">
                            <input className="mr-3 w-5 h-5 p-2" type="radio" value="lbs" name="unitW" id="Pounds" />
                            <label className="text-lg" htmlFor="Pounds">Pounds</label>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm py-2">How would you like to measure weight?</p>
                        <div className="py-2">
                            <input className="mr-3 w-5 h-5 p-2" type="radio" value="cm" name="unitW" id="Centimeters" />
                            <label className="text-lg" htmlFor="Centimeters">Centimeters</label>
                        </div>
                        <div className="py-2">
                            <input className="mr-3 w-5 h-5 p-2" type="radio" value="ft" name="unitW" id="Feet" />
                            <label className="text-lg" htmlFor="Feet">Feet</label>
                        </div>
                    </div>

                    <button type="submit" className="border-[3px] w-[95%] absolute bottom-0 left-0 p-2 m-2 border-solid border-[#0066ee80]">Save changes</button>
                </form>
            </div>
        </div>
    )
}
