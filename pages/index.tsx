import { Button, Text } from "@mantine/core"
import { useRouter } from "next/router"
import { NavBar } from "../components/NavBar"



const IndexPage = () => {
    const router = useRouter()
    return (<>
        <NavBar />
        <br />
        <h1 className="mt-20 text-center text-3xl font-bold" style={{fontFamily:"'Comfortaa'"}}>Willkommen bei</h1>
        <h1 className="text-center text-3xl font-bold" style={{fontFamily:"'Comfortaa'"}}>QR HUNT</h1>
        <br />
        <div className="grid place-items-center mt-10">
            <Button color="grape" style={{fontFamily:"'Comfortaa'"}} onClick={() => router.push("/scan")}>scanner</Button>
        </div>
        
    </>)
}

export default IndexPage
