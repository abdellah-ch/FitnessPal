"use client";
import signInEmail from "@/lib/signInWithEmail";
import { toast } from "react-toastify";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Input from "../atoms/Input";
import Input_Pass from "../atoms/Input_Pass";
import { Button } from "../atoms/button";
import { auth, provider } from "@/lib/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
const LogIn = () => {
    const [active, setActive] = useState<boolean>(false)
    const router = useRouter()

    const handleGoogleSignIn = async (e: any) => {
        //make loading true
        e.preventDefault()
        setActive(!active)
        signInWithPopup(auth, provider).then((res) => {
            //loading false
            res.user.getIdToken().then((res) => {
                fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${res}`,
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }).then(() => {
                    router.push("/account")
                })

            })
        }).catch((err) => {
            toast.error("pls try again")
        });
    };

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActive(!active)
        var formData = new FormData(e.currentTarget);
        //get the form Object 
        const form_values: { [key: string]: FormDataEntryValue } =
            Object.fromEntries(formData);

        signInWithEmailAndPassword(auth, form_values.email.toString(), form_values.password.toString())
            .then((res) => {
                res.user.getIdToken().then((res) => {
                    fetch("/api/auth", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${res}`,
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }).then(() => {
                        router.push("/account")
                    }).catch((error) => {
                        console.error(error)
                    })
                })
            })
            .catch(() => {
                toast.error("incorrect email or password");
            });

        //console.log("form values", form_values);;
    };
    return (
        <div className="h-full flex  items-center flex-col">
            <div className="flex justify-center items-center sm:shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-xl sm:h-[510px] sm:w-[500px] w-full h-full mt-[48px]">
                <div className="sm:w-[75%] sm:h-[80%] w-[90%] h-[100%]">
                    <div>
                        <div>
                            <div>
                                <div className="text-center pb-6">
                                    <h1 className=" font-bold text-2xl">Member Login</h1>
                                </div>
                                <div className="inline-flex w-full flex-col h-full">
                                    <div>
                                        <form onSubmit={handlesubmit}>
                                            <div>
                                                <Input name={"Email Address"} id={"email"} />
                                                <Input_Pass name={"Password"} id={"password"} />
                                                <div className="mt-3 text-blue-700">
                                                    <p>
                                                        <Link href="#">Forgot you password?</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button
                                                    type="submit"
                                                    className="bg-blue-600 font-bold text-lg hover:bg-blue-700 w-full h-14 py-3 rounded-sm mt-5 mb-2"
                                                    disabled={active}
                                                >
                                                    Log In
                                                </Button>
                                                <p className="w-full text-center h-[24px]">or</p>
                                                <Button
                                                    type="submit"
                                                    className="bg-[#EBEBF0] text-black text-lg font-bold w-full h-14 py-3 rounded-sm mt-2 hover:shadow-lg hover:bg-[#EBEBF0] relative"
                                                    onClick={handleGoogleSignIn}
                                                    disabled={active}
                                                >
                                                    <FcGoogle className="absolute left-3 text-2xl" />
                                                    continue with google
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <p className="sm:m-4 sm:mb-1 mb-72 mt-4">
                Not A member yet?
                <Link href="register" className="text-blue-500">
                    Sign up now
                </Link>
            </p>
        </div >
    );
};

export default LogIn;
