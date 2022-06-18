import { Button } from '@mantine/core'
import Image from 'next/image'
import { ArrowBack, CameraOff, Checkbox, Repeat } from 'tabler-icons-react'
import { NavBar } from '../components/NavBar'
import { useState } from 'react'
import Html5QrcodePlugin from '../components/Html5QrcodePlugin'
import { hash } from '../lib/hash'
import { useRouter } from 'next/router'
import { submitQrcode } from '../lib/submitQrcode'

const Scan = () => {

    const [scanned,setScanned] = useState(true);

    function onNewScanResult(decodedText, decodedResult) {
        setScanned(true)
        submitQrcode(1,hash(decodedText))
    }

    

    const router = useRouter();

    return (
        <>
            <NavBar />
            <br></br>
            <div className='mx-20 mt-40 grid place-items-center'>
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
                            <Checkbox size={100}></Checkbox>
                            <h1 className="text-3xl text-bold" style={{fontFamily:"'Comfortaa'"}}>Gescannt!</h1>
                        </>
                    )
                }
                <div className="flex">
                    <Button variant='filled' color='blue' className='mt-10' onClick={() => router.push('/')}>
                        <ArrowBack></ArrowBack>
                        &nbsp;Zurück
                    </Button>
                    <Button variant='filled' color='green' className='ml-3 mt-10' onClick={() => router.push('/')}>
                        <Repeat></Repeat>
                        &nbsp;Erneut Scannen
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Scan
