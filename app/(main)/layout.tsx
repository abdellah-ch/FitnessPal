import Header from "@/components/molucules/Header";
import Menu from "@/components/organisms/Menu";
import currentUserPrisma from "@/lib/currentUserprisma";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUserPrisma()

    return (<div className="flex flex-col h-full w-screen overflow-hidden">
        <Header user={user} />
        <Menu />
        <main className="flex-1">{children}</main>
        {/*<Footer />*/}
    </div>);
}
export default MainLayout