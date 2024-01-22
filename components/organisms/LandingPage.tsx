"use Client"
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import phonelarge from "@/public/hero-phone-large.webp"
import { IoIosArrowForward } from "react-icons/io";
const LandingPage = () => {
    const router = useRouter()
    return <div className="bg-[url('/landing-bg.svg')] bg-cover  bg-no-repeat lg:h-[100vh] lg:w-screen">
        <div className="max-w-[992px] mr-auto ml-auto h-[100%]">
            <div className="flex justify-between py-2 px-3 lg:px-0">
                <div className="text-3xl text-white ">
                    fitnessPal
                </div>
                <FaUserCircle className="text-3xl z-20 text-white cursor-pointer" onClick={() => router.push("/login")} />
            </div>
            <div className="flex flex-col gap-4 lg:w-[50%] py-[13rem] h-[70%] justify-center items-center lg:block">
                <div className="z-20 flex flex-col gap-3 px-4">
                    <h1 className="text-5xl text-white font-bold text-center lg:text-left leading-snug">Reach your goals <span className="font-thin">with FitnessPal</span></h1>
                    <h2 className="text-5xl text-white text-center lg:text-left"></h2>
                    <p className="text-white text-sm text-center mt-3 lg:mt-2  lg:text-left ">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>
                </div>
                <div className="lg:w-[100%] ml-4 mt-7">
                    <button className="bg-white rounded-3xl px-14 py-3 text-blue-600 relative cursor-pointer w-auto" onClick={() => router.push("/register")}>
                        <p className="font-bold cursor-pointer">START TODAY</p>  <IoIosArrowForward className="cursor-pointer absolute top-[32.2%] right-4 font-bold" />
                    </button>
                </div>
                <div className="lg:hidden flex justify-center items-center mt-6">
                    <Image
                        src={phonelarge}
                        alt="phone image"
                        className="w-[248px] h-[500px] "
                    />
                </div>
            </div>
            <div>


            </div>
        </div>
        <div className="lg:flex justify-center items-center  hidden  absolute h-[100vh] w-[70%] z-10  right-0 top-0 bg-[url('/landing-right.svg')] bg-cover bg-no-repeat" >
            <Image
                src={phonelarge}
                alt=""
                className="w-[248px] h-[500px] "
            />
        </div>

    </div>
}
export default LandingPage;