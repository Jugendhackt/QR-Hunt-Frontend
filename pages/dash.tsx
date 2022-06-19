import { Button, Modal, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BuildingCastle, Camera, Checkbox, Logout, UserPlus } from "tabler-icons-react";
import { NavBar } from "../components/NavBar";
import { login } from "../lib/login";
import { logout } from "../lib/logout";
import { signUp } from "../lib/signUp";
import { userInfo } from "../lib/userinfo";
import { useUser } from "../lib/useUser";

export default () => {
    const [benutzername,setBenutzername] = useState("");
    const [passwort,setPasswort] = useState("");

    const [error,setError] = useState("");
    const [confirmModalOpened, setconfirmModalOpened] = useState(false)
    const user = useUser()
    const router = useRouter();
    const [userInf,setUserInf] = useState<{foundcount:number}>({foundcount:5})

    useEffect(() => {
        if(user.loggedIn === false){
            router.push("/")
        }
        async function loadUserInfo(){
            // TODO:
            // const uinfo = await userInfo();
            // console.log(uinfo)
            // setUserInf(uinfo);
        }
        loadUserInfo()
    }, [])

    return (
        <>
            <NavBar />
            <br></br>
            <div className="mt-36 grid place-items-center">
                <h1 className="text-4xl font-bold" style={{fontFamily:"'Comfortaa'"}}>{user?.username}</h1>
                <div className="flex mt-5">
                    <BuildingCastle size={30}></BuildingCastle>
                    <h1 className="text-2xl">{userInf.foundcount}</h1>
                </div>
                <div className="flex mt-5">
                    <Button styles={{filled:{backgroundColor:"#6C63FF"}}} onClick={() => router.push("/scan")}>
                        <Camera></Camera>
                        &nbsp;Scannen
                    </Button>
                    <Button className="ml-3" styles={{filled:{backgroundColor:"#FF6884"}}} onClick={() => {
                        logout();
                        router.push("/")
                    }}>
                        <Logout></Logout>
                        &nbsp;Logout
                    </Button>
                </div>
            </div>
        </>
    )
}