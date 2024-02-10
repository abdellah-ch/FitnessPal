"use client";
import Input from "../atoms/Input";
import Input_Pass from "../atoms/Input_Pass";
import { Button } from "../atoms/button";
import { FcGoogle } from "react-icons/fc";
import signUpWithEmail from "@/lib/signUpWithEmail";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";

const Register = () => {
    const [active, setActive] = useState<boolean>(false)
    const router = useRouter()
    const handleGoogleSignIn = (e: any) => {
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
        const form_values: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData);
        //console.log(form_values);

        if (form_values.password != form_values.Confirm_Password) {
            toast.error("passwords do not match");
        } else {
            signUpWithEmail(
                form_values.email.toString(),
                form_values.password.toString()
            )
                .then(() => {
                    router.push("/account")
                })
                .catch(() => {
                    toast.error(" pls check your info and try again");
                });
        }

        //console.log("form values", form_values);;
    };
    return (
        <div className="h-full flex  items-center flex-col">
            <div className="flex justify-center items-center sm:shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-xl sm:h-[560px] sm:w-[500px] w-full h-full mt-[48px]">
                <div className="sm:w-[75%] sm:h-[90%] w-[90%] h-[100%]">
                    <div>
                        <div>
                            <div>
                                <div className="text-center pb-6">
                                    <h1 className=" font-bold text-2xl">Register</h1>
                                </div>
                                <div className="inline-flex w-full flex-col h-full">
                                    <div className="h-full overflow-y-hidden">
                                        <form onSubmit={handlesubmit}>
                                            <div>
                                                <Input name={"Email Address"} id={"email"} />
                                                <Input_Pass name={"Password"} id={"password"} />
                                                <Input_Pass
                                                    name={"Confirm Password"}
                                                    id={"Confirm_Password"}
                                                />
                                            </div>
                                            <div>
                                                <Button
                                                    type="submit"
                                                    className="bg-blue-600 font-bold text-lg hover:bg-blue-700 w-full h-14 py-3 rounded-sm mt-5 mb-2"
                                                    disabled={active}
                                                >
                                                    Register
                                                </Button>
                                                <p className="w-full text-center h-[24px]">or</p>
                                                <Button
                                                    type="button"
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
            </div>
            <p className="sm:m-4 sm:mb-1 mb-72 mt-4">
                Already have an account?
                <Link href="login" className="text-blue-500">
                    Log In now
                </Link>
            </p>
        </div>
    );
};

export default Register;
