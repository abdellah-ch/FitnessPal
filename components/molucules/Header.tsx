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

export default function Header() {
    const pathname = usePathname()
    const [user, setUser] = React.useState<User | null | undefined>(undefined)
    const router = useRouter()

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //console.log(user);
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
                // router.push("/login")
                setUser(null)
            }
        });
    })
    const handelSumit = () => {
        signOutUser().then(() => {
            setUser(null);
            router.push("/")
        });
    };
    if (user === undefined) return null;
    if (pathname === "/" && user === null) return null
    return (
        <div className="flex md:justify-between items-center max-w-[992px]  px-4  md:h-20 container bg-blue-700 h-14 md:bg-white md:py-4">
            <IoMdMenu className="text-white text-xl mr-2 md:hidden" />
            <div className="font-bold md:text-blue-800 md:text-3xl text-white text-2xl cursor-pointer" onClick={() => { router.push("/") }}>
                FitnessPal
            </div>
            {user ?
                <div className="flex">
                    <p className="md:border-r-2 pr-1.5  md:block hidden"> hi, {user?.displayName} </p>
                    <Link href="/" className="md:pl-1.5 text-blue-500 md:block hidden" onClick={handelSumit}>LogOut</Link>
                </div>
                : <div className="text-blue-500 flex">
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
