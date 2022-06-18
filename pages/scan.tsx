import { Button } from '@mantine/core'
import Image from 'next/image'
import { ArrowBack, CameraOff, Checkbox, Repeat } from 'tabler-icons-react'
import { NavBar } from '../components/NavBar'
import { useState } from 'react'
import Html5QrcodePlugin from '../components/Html5QrcodePlugin'
import { hash } from '../lib/hash'
import { useRouter } from 'next/router'
import { submitQrcode } from '../lib/submitQrcode'
import { parseQr } from '../lib/parseQr'

const Scan = () => {
    const [scanned,setScanned] = useState(false);
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [description, setDescription] = useState("");

    function onNewScanResult(decodedText, decodedResult) {
        setScanned(true)
        console.log(decodedText)
        submitQrcode(decodedText)
        const qrdata = parseQr(decodedText)
        setImage(qrdata.imageurl)
        setTitle(qrdata.title)
        setDescription(qrdata.description)
    }

    

    const router = useRouter();

    return (
        <>
            <NavBar />
            <br></br>
            <div className='mx-20 mt-20 grid place-items-center'>
                {
                    !scanned ? (
                        <>
                            <Html5QrcodePlugin 
                                fps={10}
                                qrbox={150}
                                disableFlip={false}
                                qrCodeSuccessCallback={onNewScanResult}
                            />
                        </>
                    ) : (
                        <>
                            <img src={"/assets/sights/" + image}></img>
                            <h1 className="text-3xl text-bold mt-5" style={{fontFamily:"'Comfortaa'"}}>{title}</h1>
                            <p>{description}</p>
                            <div className="flex">
                                <Button variant='filled' color='blue' className='mt-10' onClick={() => router.push('/')}>
                                    <ArrowBack></ArrowBack>
                                    &nbsp;Zurück
                                </Button>
                                <Button variant='filled' color='green' className='ml-3 mt-10' onClick={() => setScanned(false)}>
                                    <Repeat></Repeat>
                                    &nbsp;Erneut Scannen
                                </Button>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Scan
