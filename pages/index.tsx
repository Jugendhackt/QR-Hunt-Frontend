import { Button, Text } from "@mantine/core"
import { useRouter } from "next/router"
import { NavBar } from "../components/NavBar"

const IndexPage = () => {
    const router = useRouter()
    return (
        <div className="bg-[url(/assets/background.png)] bg-no-repeat">
            <NavBar />
            <br />
            <div className="grid place-items-center mt-10 mx-16">
                <h1 className="mt-32 text-center text-3xl font-bold" style={{fontFamily:"'Comfortaa'"}}>Endlich rausgehen<br></br> mit einem Ziel</h1>
                <p className="text-center my-5">QR-Hunt motiviert dich, wieder an die frische Luft zu gehen mit einem spaßigem Schnitzeljagd System. </p>
                <div className="flex">
                    <Button className="mt-5" style={{fontFamily:"'Comfortaa'"}} onClick={() => router.push("/scan")}>Account erstellen</Button>
                    <Button className="ml-3 mt-5" style={{fontFamily:"'Comfortaa'"}} color="green" onClick={() => router.push("/scan")}>Einloggen</Button>
                </div>
            </div>
            <div className="flex">
                <img className="w-36 mt-10" src="/assets/location_phone.png"></img>
                <div className="mt-32 mx-10">
                    <h1 className="text-4xl font-bold" style={{fontFamily:"'Comfortaa'"}}>See the QR-Codes you found</h1>
                    <p className="mt-5">You can see and share the progress with your friends and see your Codes on the dashboard.</p>
                </div>
            </div>
            <div className="flex">
                <div className="mt-32 mx-10">
                    <h1 className="text-4xl font-bold" style={{fontFamily:"'Comfortaa'"}}>Explore new Sights</h1>
                    <p className="mt-5">QR-Hunt is a reinvented way to explore a city. View your favourite sights while playing a game.</p>
                </div>
                <img className="w-36 mt-10" src="/assets/sight.png"></img>
            </div>
            <br></br>
            <p className="mx-10 text-gray-400">Copyright 2022 Finn, Thomas, Oskar, Pascal, Jan, Iven</p>
        </div>
    )
}

export default IndexPage
