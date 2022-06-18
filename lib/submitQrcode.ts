import config from "../config";
import { hash } from "./hash";

export function submitQrcode(content){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', config.api)
    myHeaders.append('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
    myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    myHeaders.append('Access-Control-Allow-Headers','Content-Type, Authorization, Accept, Accept-Language, X-Authorization')

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            hash: hash(content)
        }),
    };

    fetch(config.api + '/found', requestOptions)
        .then(response => response.text())
        .then(result => console.log('result',result))
        .catch(error => console.log('error', error));
}