//import { redirect } from "next/navigation";
//import { signOutUser } from "@/lib/signOut";

import InitialComponent from "@/components/organisms/initialComponent";
import { CheckUser } from "@/lib/checkUser"
import currentUserPrisma from "@/lib/currentUserprisma";
//import { auth } from "@/lib/firebase-admin-config";
const MainPage = async () => {
    // 'force-cache' is the default, and can be omitted by no-store in a fetch request

    //const test = await currentUserPrisma() //current user prisma

    //check if the profile exists if not create one 
    const user = await CheckUser();//current user in the mysql database 

    return (
        <div className="">
            <InitialComponent />
        </div>
    );
}

export default MainPage;