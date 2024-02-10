import Header from "@/components/molucules/Header";
import Menu from "@/components/organisms/Menu";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    //const user = await currentUserPrisma()

    const cookieStore = cookies()

    const token = cookieStore.get('session')

    const res = await fetch("http://localhost:3000/api/checkUser", {

        credentials: 'include',
        method: "get",
        headers: {
            Cookie: `session=${token?.value}`
        }

    })

    const data = await res.json()

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