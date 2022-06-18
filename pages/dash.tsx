import { Button, Modal, TextInput } from "@mantine/core";
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

    return (
        <>
            <NavBar />
        </>
    )
}