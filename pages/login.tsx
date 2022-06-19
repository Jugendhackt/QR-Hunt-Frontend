import { Button, Modal, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { Checkbox, UserPlus } from "tabler-icons-react";
import { NavBar } from "../components/NavBar";
import { login } from "../lib/login";
import { signUp } from "../lib/signUp";

export default () => {
    const [benutzername,setBenutzername] = useState("");
    const [passwort,setPasswort] = useState("");

    const [error,setError] = useState("");
    const [confirmModalOpened, setconfirmModalOpened] = useState(false)
    const router = useRouter()

    return (
        <>
            <Modal
                opened={confirmModalOpened}
                onClose={() => setconfirmModalOpened(false)}
            >
                <div className="grid place-items-center">
                    <Checkbox size={80}></Checkbox>
                    <h1 className="mt-5 text-2xl" style={{fontFamily:"'Comfortaa'"}}>Erfolgreich!</h1>
                </div>
            </Modal>
            <NavBar />
            <br></br>
            <h1 className="mt-32 text-center text-3xl font-bold" style={{fontFamily:"'Comfortaa'"}}>Willkommen zurück</h1>
            <div className="mx-16 mt-5">
                <TextInput
                    label="Benutzername"
                    placeholder="Progamer123"
                    onChange={(e) => setBenutzername(e.currentTarget.value)}
                ></TextInput>
                <TextInput
                    label="Passwort"
                    placeholder="Mein geheimes Passwort"
                    type="password"
                    onChange={(e) => setPasswort(e.currentTarget.value)}
                ></TextInput>
                {
                    error !== "" ? (
                        <p className="text-red-400 mt-3">{error}</p>
                    ) : (
                        <></>
                    )
                }
                <Button className="mt-5" onClick={async () => {
                    if(benutzername !== "" && passwort !== ""){
                        const res = await login(benutzername,passwort);
                        if(res){
                            setError(res)
                        }else{
                            router.push("/dash")
                        }
                    }else{
                        setError("Bitte fülle alle Felder aus!")
                    }
                }}>
                    <UserPlus></UserPlus>
                    &nbsp;Einloggen
                </Button>
            </div>
        </>
    )
}