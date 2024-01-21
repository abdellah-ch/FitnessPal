"use Client"
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import bgright from "@/public/landing-right.svg"
import Image from "next/image";
const LandingPage = () => {
    const router = useRouter()
    return <div className="bg-[url('/landing-bg.svg')] bg-cover  bg-no-repeat h-[100vh] md:w-screen">
        <div className="max-w-[992px] mr-auto ml-auto">
            <div className="flex justify-between py-2 px-3 md:px-0">
                <div className="text-3xl text-white">
                    fitnessPal
                </div>
                <FaUserCircle className="text-3xl z-20 text-white cursor-pointer" onClick={() => router.push("/login")} />
            </div>
            <div>


            </div>
        </div>
        <div className="absolute h-[100vh] w-[70%] z-10  right-0 top-0 bg-[url('/landing-right.svg')] bg-cover bg-no-repeat" />
    </div>
}
export default LandingPage;