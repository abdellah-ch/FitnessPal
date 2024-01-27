import Header from "@/components/molucules/Header";
import { CheckUser } from "@/lib/checkUser";
import currentUserPrisma from "@/lib/currentUserprisma";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUserPrisma()

    if (user != null) {

        console.log(user);
        redirect("/account")
    }

    return (
        <div className="flex flex-col h-full w-screen overflow-hidden">
            <Header user={user} />
            <ToastContainer />
            <main className="flex-1">{children}</main>
            {/*<Footer />*/}
        </div>

    );
};

export default AuthLayout;
