"use client"
import Header from "@/components/molucules/Header";
import LoadingComponent from "@/components/organisms/LoadingComponent";
import Menu from "@/components/organisms/Menu";
import { useAuth } from "@/providers/AuthProvider";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    let AuthState = useAuth()
    if (AuthState.isLoading) return <LoadingComponent />
    return (<div className="flex flex-col h-full w-screen overflow-hidden">
        <Header />
        <Menu />
        <main className="flex-1">{children}</main>
        {/*<Footer />*/}
    </div>);

}
export default MainLayout