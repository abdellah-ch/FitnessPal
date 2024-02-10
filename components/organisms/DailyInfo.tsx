"use client"
import DailyBox from "../molucules/DailyBox"

export const DailyInfo = () => {

    return (
        <div className="max-w-[992px] mr-auto ml-auto">
            <div className="flex gap-3">
                <div className="flex-1 p-3">
                    <div className="flex flex-col w-full mt-10 gap-3">
                        <div className="w-full m-auto sm:m-0 ">
                            <DailyBox />
                        </div>
                        <div className="md:w-full m-auto h-[200px] bg-gray-200 w-[90%]">Todo : Email Varification</div>
                        <div>Todo : News Feed</div>
                    </div>
                </div>
                <div className="md:w-[300px] md:h-[700px] bg-gray-400 hidden md:inline-block mt-20 p-3">

                </div>
            </div>
        </div>
    )
}
