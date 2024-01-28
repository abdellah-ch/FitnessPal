"use client"
import React from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import { signOutUser } from "@/lib/signOut";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CheckUser } from "@/lib/checkUser";

export default function Header(props: any) {
    const router = useRouter()
    const handelSumit = () => {
        signOutUser().then(() => {
            router.push("/")
        });
    };
    return (
        <div className="flex md:justify-between items-center max-w-[992px]  px-4  md:h-20 container bg-blue-700 h-14 md:bg-white md:py-4">
            <IoMdMenu className="text-white text-xl mr-2 md:hidden" />
            <div className="font-bold md:text-blue-800 md:text-3xl text-white text-2xl cursor-pointer" onClick={() => { props.user ? router.push("/account") : router.push("/") }}>
                FitnessPal
            </div>
            {props.user ?
                //user exists
                <div className="flex">
                    <p className="md:border-r-2 pr-1.5  md:block hidden"> hi, {props.user?.name || "user"} </p>
                    <Link href="/" className="md:pl-1.5 text-blue-500 md:block hidden" onClick={handelSumit}>LogOut</Link>
                </div>
                :
                //no user
                <div className="text-blue-500 flex">
                    <Link href="/login" className="md:border-r-2 pr-1.5  md:block hidden">
                        Log In
                    </Link>
                    <Link href="/register" className="md:pl-1.5 md:block hidden">
                        Sign Up
                    </Link>
                </div>
            }
        </div>
    );
}
