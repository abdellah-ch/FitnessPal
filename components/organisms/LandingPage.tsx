"use Client"
import { useRouter } from "next/navigation";
const LandingPage = () => {
    const router = useRouter()
    return <div>
        Landing page
        <button onClick={() => router.push("/login")} className="text-blue-800 ml-5">get Started</button>
    </div>
}
export default LandingPage;