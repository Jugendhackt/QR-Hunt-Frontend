import Link from "next/link";
import { UserCircle } from "tabler-icons-react";

export function NavBar(){
    return (
        <>
            <div className="bg-white">
                <div className="mx-10 mt-10">
                    <Link href="/">
                        <div className="float-left">
                            <h1 className="text-3xl" style={{fontFamily:"'Comfortaa'"}}>QR-HUNT</h1>
                        </div>
                    </Link>
                    <div className="float-right">
                        <UserCircle size={35}></UserCircle>
                    </div>
                </div>
            </div>
        </>
    )
}