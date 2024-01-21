"use client"
import Footer from "@/components/molucules/Footer";
import Header from "@/components/molucules/Header";
import LoadingComponent from "@/components/organisms/LoadingComponent";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    let AuthState = useAuth()
    if (AuthState.isLoading) return <LoadingComponent />
    if (AuthState.isLogged) {
        router.push("/");
    }
    return (
        <div className="flex flex-col h-full w-screen overflow-hidden">
            <Header />
            <ToastContainer />
            <main className="flex-1">{children}</main>
            {/*<Footer />*/}
        </div>

    );
};

export default AuthLayout;
