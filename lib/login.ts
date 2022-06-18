import config from "../config";
import { hash } from "./hash";

export async function login(username:string,password:string){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', "10.20.6.182:8080")
    myHeaders.append('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
    myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    myHeaders.append('Access-Control-Allow-Headers','Content-Type, Authorization, Accept, Accept-Language, X-Authorization')

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            username: username,
            password_hash: hash(password).toString()
        }),
    };

    const response = await (await fetch(config.api + '/login', requestOptions)).json()

    if(response.error){
        return response.error
    }else{
        if(response.token){
            localStorage.setItem("auth-token", response.token)
            localStorage.setItem("username", username)
            return undefined
        }
    }
}