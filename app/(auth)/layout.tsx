import Header from "@/components/molucules/Header";
import { checkUserFirebase } from "@/lib/checkUserFirebase";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthLayout = async ({ children }: { children: React.ReactNode }) => {

    const data = await checkUserFirebase()

    if (data.status === 401) {
        return (
            <div className="flex flex-col h-full w-screen overflow-hidden">
                <Header user={null} />
                <ToastContainer />
                <main className="flex-1">{children}</main>
                {/*<Footer />*/}
            </div>

        );
    } else if (data.status === 200) {
        redirect("/account")
    }

};

export default AuthLayout;
