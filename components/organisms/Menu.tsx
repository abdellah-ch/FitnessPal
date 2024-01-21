"use client"
import { auth } from "@/lib/firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation"
import React from "react";
import { menu } from "./menuItems";
import { useRouter } from "next/navigation";
const Menu = () => {
    const [user, setUser] = React.useState<User | null | undefined>(undefined)
    const router = useRouter()
    const pathname = usePathname()
    React.useEffect(() => {
        //console.log(menu);

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
    if (user === undefined) return null
    if ((pathname === "/" || pathname === "/register" || pathname === "/login") && user === null) return null
    return (
        <div className="w-full md:h-28 bg-blue-800 hidden md:block ">
            <div className="h-[50%] bg-[#0066EE] w-full">
                <div className="md:max-w-[992px] md:m-auto md:flex md:items-center h-[100%]">
                    {menu.map((item) => (
                        item.path === pathname ?
                            <div key={item.path} className="flex items-center h-[100%] px-6 text-white font-bold cursor-pointer text-xs bg-[#00548b]">{item.main.toUpperCase()}</div>
                            : <div key={item.path} onClick={() => router.push(item.path)} className=" flex items-center h-[100%] px-6 text-white font-bold cursor-pointer text-xs ">{item.main.toUpperCase()}</div>
                    ))}
                </div>
            </div>
            <div className="h-[50%] bg-[#00548b]">
                <div className="md:max-w-[992px] md:m-auto md:flex md:items-center h-[100%]">
                    {menu.map((item) => (
                        <div key={item.path} className="w-full h-[100%] flex" >
                            <div key={Math.random()} onClick={() => { router.push("") }} className="p-4 text-white font-bold cursor-pointer text-sm bg-[#00548b] h-full" >itest</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu