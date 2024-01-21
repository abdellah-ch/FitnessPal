import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

type ChildProps = {
    name: string;
    id: string;
};

const Input_Pass: React.FC<ChildProps> = ({ name, id }) => {
    const [isShowing, setIsShowing] = React.useState<boolean>(true);



    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;

        if (val === "") {
            // Handle empty input (e.g., add a class, show an error message, etc.)
            setIsInputEmpty(true);
        } else {
            // Handle non-empty input
            setIsInputEmpty(false);
        }
    };
    return (
        <div>
            <div className="inline-flex flex-col w-full h-[64px] relative border-2 border-solid border-gray-200 rounded-md opacity-75 cursor-text hover:border-gray-500 mt-4">
                <div className="h-full w-full relative flex justify-center items-center text-base font-normal ">
                    {isShowing ? (
                        <BiHide
                            className="absolute right-[5%] top-[30%] cursor-pointer text-gray-600 text-2xl z-40"
                            onClick={() => setIsShowing(false)}
                        />
                    ) : (
                        <BiShow
                            className="absolute right-[5%] top-[30%] cursor-pointer text-gray-600 text-2xl z-40"
                            onClick={() => setIsShowing(true)}
                        />
                    )}
                    <input
                        className="peer px-[5%] h-full w-full focus:border-blue-500  bg-transparent  border-1 border-solid border-gray-200 rounded-md opacity-75 cursor-text hover:border-gray-500"
                        id={id}
                        name={id}
                        type={isShowing ? "password" : "text"}
                        autoCapitalize="none"
                        autoComplete="false"
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

export default Input_Pass;
