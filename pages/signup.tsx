import { Button, Modal, TextInput } from "@mantine/core";
import { createRef, useState } from "react";
import { Checkbox, UserPlus } from "tabler-icons-react";
import { NavBar } from "../components/NavBar";
import { login } from "../lib/login";
import { signUp } from "../lib/signUp";

export default () => {
    const [benutzername,setBenutzername] = useState("");
    const [passwort,setPasswort] = useState("");
    const [repeatedPasswort,setRepeatedPasswort] = useState("");

    const [error,setError] = useState("");
    const [confirmModalOpened, setconfirmModalOpened] = useState(false)

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
            <h1 className="mt-32 text-center text-3xl font-bold" style={{fontFamily:"'Comfortaa'"}}>Account erstellen</h1>
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
                <TextInput
                    label="Passwort wiederholen"
                    placeholder="Mein geheimes Passwort 2"
                    type="password"
                    onChange={(e) => setRepeatedPasswort(e.currentTarget.value)}
                ></TextInput>
                {
                    error !== "" ? (
                        <p className="text-red-400 mt-3">{error}</p>
                    ) : (
                        <></>
                    )
                }
                <Button className="mt-5" onClick={async () => {
                    if(benutzername !== "" && passwort !== "" && repeatedPasswort !== ""){
                        if(passwort === repeatedPasswort){
                            console.log(await signUp(benutzername,passwort));
                            await login(benutzername,passwort)
                            setconfirmModalOpened(true)
                        }else{
                            setError("Die angegebenen Passwörter stimmen nicht überein");
                        }
                    }else{
                        setError("Bitte fülle alle Felder aus!")
                    }
                }}>
                    <UserPlus></UserPlus>
                    &nbsp;Account Erstellen
                </Button>
            </div>
        </>
    )
}