import { Button, Popover } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Camera, Qrcode, UserCircle } from 'tabler-icons-react';
import { useUser } from '../lib/useUser';

export function NavBar(){
    const user = useUser();
    const [menuOpened,setMenuOpened] = useState(false)
    const router = useRouter();

    return (
        <>
            <div className='bg-white'>
                <div className='mx-10 mt-10'>
                    <Link href='/'>
                        <div className='float-left'>
                            <h1 className='text-3xl' style={{fontFamily:"'Comfortaa'"}}>QR-HUNT</h1>
                        </div>
                    </Link>
                    <div className='float-right'>
                        {
                            user?.loggedIn ? (
                                <Link href="/dash"><UserCircle onClick={() => setMenuOpened(true)} size={35}></UserCircle></Link>
                            ) : (
                                <Qrcode size={35}></Qrcode>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}