export function submitQrcode(id,content){
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
            id: id,
            content: content
        }),
    };

    fetch('http://10.20.6.182:8080', requestOptions)
        .then(response => response.text())
        .then(result => console.log('result',result))
        .catch(error => console.log('error', error));
}