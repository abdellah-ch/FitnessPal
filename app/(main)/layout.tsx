import Header from "@/components/molucules/Header";
import Menu from "@/components/organisms/Menu";
import currentUserPrisma from "@/lib/currentUserprisma";
import { ToastContainer } from "react-toastify";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUserPrisma()

    return (<div className="flex flex-col h-full w-screen overflow-hidden">
        <Header user={user} />
        <Menu />
        <ToastContainer />
        <main className="flex-1">{children}</main>
        {/*<Footer />*/}
    </div>);
}
export default MainLayout