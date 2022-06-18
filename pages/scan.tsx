import { Button } from "@mantine/core"
import Image from "next/image"
import { CameraOff } from "tabler-icons-react"
import { NavBar } from "../components/NavBar"


const Scan = () => (
    <>
        <NavBar />
        <br></br>
        <div className="mt-40 grid place-items-center">
            <img src="/assets/scanner.svg"></img>
            <Button variant="filled" color="blue" className="mt-10">
            <CameraOff></CameraOff>
        </Button>
        </div>
    </>
)

export default Scan
