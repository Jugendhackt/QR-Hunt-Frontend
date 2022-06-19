import config from "../config";
import { hash } from "./hash";

export async function login(username:string,password:string){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', config.api)
    myHeaders.append('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
    myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    myHeaders.append('Access-Control-Allow-Headers','Content-Type, Authorization, Accept, Accept-Language, X-Authorization')


    const pwhash = hash(password).toString()
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            username: username,
            password_hash: pwhash
        }),
    };

    const response = await (await fetch(config.api + '/login', requestOptions)).json()

    if(response.message !== "success"){
        return "Der Benutzer wurde nicht gefunden"
    }else{
        localStorage.setItem("auth-token", pwhash)
        localStorage.setItem("username", username)
        return undefined
    }
}