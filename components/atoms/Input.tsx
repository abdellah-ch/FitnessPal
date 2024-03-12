"use Client"
import { cn } from "@/lib/utils";

import React, { useState } from "react";

type ChildProps = {
    name: string;
    id: string;
};

const Input: React.FC<ChildProps> = ({ name, id }) => {
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        if (val === "") {
            // Handle empty input (e.g., add a class, show an error message, etc.)
            setIsInputEmpty(true);
        } else {
            // Handle non-empty input
            setIsInputEmpty(false);
        }
    };
    return (
        <div className="mt-4">
            <div className="inline-flex flex-col w-full h-[64px] relative border-2 border-solid border-gray-200 rounded-md opacity-75 cursor-text hover:border-gray-500 ">
                <div className="h-full w-full relative flex justify-center items-center text-base font-normal ">
                    <input
                        className="peer px-[5%] h-full w-full focus:border-blue-500  bg-transparent  border-1 border-solid border-gray-200 rounded-md opacity-75 cursor-text hover:border-gray-500"
                        id={id}
                        type={name != "Email Address" ? "text" : id}
                        name={id}
                        autoCapitalize="none"
                        autoCorrect="off"
                        placeholder={name}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor={id}
                        className={cn(
                            "bg-transparent cursor-text absolute top-[30%] left-[5%] peer-focus:bg-white peer-focus:-top-3 peer-focus:left-2 transition-all peer-focus:text-blue-500 peer-focus:text-sm peer-focus:px-2 ",
                            {
                                "-top-3 left-2 text-blue-500 text-sm bg-white px-2":
                                    !isInputEmpty,
                            }
                        )}
                    >
                        {name}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Input;
