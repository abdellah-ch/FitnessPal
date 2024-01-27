"use client"
import { auth } from "@/lib/firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation"
import React from "react";
import { menu } from "./menuItems";
import { useRouter } from "next/router";
import Link from "next/link";
const Menu = () => {
    const pathname = usePathname()

    return (
        <div className="w-full md:h-28 bg-blue-800 hidden md:block ">
            <div className="h-[50%] bg-[#0066EE] w-full">
                <div className="md:max-w-[992px] md:m-auto md:flex md:items-center h-[100%]">
                    {menu.map((item, index) => (
                        (pathname.includes(item.path)) ?
                            <Link href={item.path} key={item.path} className="flex items-center h-[100%] px-6 text-white font-bold cursor-pointer text-xs bg-[#00548b]">{item.main.toUpperCase()}</Link>
                            : <Link href={item.path} key={item.path} className=" flex items-center h-[100%] px-6 text-white font-bold cursor-pointer text-xs ">{item.main.toUpperCase()}</Link>
                    ))}
                </div>
            </div>
            <div className="h-[50%] bg-[#00548b]">
                <div className="md:max-w-[992px] md:m-auto md:flex md:items-center h-[100%]">

                    {menu.map((item, index) => (
                        (pathname.includes(item.path)) ?
                            item.subMenu.map((val, index) => (
                                <div key={Math.random()} className="h-[100%] flex" >
                                    <Link href={val.path} key={Math.random()} className="p-4 text-white font-bold cursor-pointer text-sm bg-[#00548b] h-full" >{val.name}</Link>
                                </div>
                            ))
                            : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu