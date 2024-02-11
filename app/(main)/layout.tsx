import Header from "@/components/molucules/Header";
import Menu from "@/components/organisms/Menu";
import { checkUserFirebase } from "@/lib/checkUserFirebase";
import { ToastContainer } from "react-toastify";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {

    const data = await await checkUserFirebase()

    if (data.decodedClaims)
        return (<div className="flex flex-col h-full w-screen overflow-hidden">
            <Header user={data.decodedClaims} />
            <Menu />
            <ToastContainer />
            <main className="flex-1">{children}</main>
            {/*<Footer />*/}
        </div>);
}
export default MainLayout