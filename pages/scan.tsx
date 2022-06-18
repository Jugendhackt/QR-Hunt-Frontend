import { Button } from "@mantine/core"
import Image from "next/image"
import { CameraOff } from "tabler-icons-react"
import { NavBar } from "../components/NavBar"
import { useState } from "react"
import Html5QrcodePlugin from "../components/Html5QrcodePlugin"
import { hash } from "../lib/hash"

const Scan = () => {

    function onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
        console.log(decodedText)
        console.log(hash(decodedText))
    }

    return (
        <>
            <NavBar />
            <br></br>
            <div className="mx-20 mt-40 grid place-items-center">
                <Html5QrcodePlugin 
                    fps={10}
                    qrbox={150}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <Button variant="filled" color="blue" className="mt-10">
                    <CameraOff></CameraOff>
                </Button>
            </div>
        </>
    )
}

export default Scan
