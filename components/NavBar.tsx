import { UserCircle } from "tabler-icons-react";

export function NavBar(){
    return (
        <div className="top-0 bg-white">
            <div className="mx-10 mt-5">
                <div className="float-left">
                    <h1 className="text-3xl" style={{fontFamily:"'Comfortaa'"}}>QR-HUNT</h1>
                </div>
                <div className="float-right">
                    <UserCircle size={35}></UserCircle>
                </div>
            </div>
        </div>
    )
}