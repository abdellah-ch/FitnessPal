import { redirect } from "next/navigation";
import LandingPage from "@/components/organisms/LandingPage";
import { checkUserFirebase } from "@/lib/checkUserFirebase";
const MainPage = async () => {

    const data = await checkUserFirebase()
    if (data.status === 401)
        return <LandingPage />
    else
        redirect("/account")
}

export default MainPage;