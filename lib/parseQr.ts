export function parseQr(key:string){
    const parts: string[] = key.split("_");
    const identification: string = parts[0];
    const title: string = parts[1];
    const imageurl: string = parts[2];
    const description: string = parts[3];
    return {
        "isQrHunt": identification === "qrhunt",
        "title": title,
        "imageurl": imageurl,
        "description": description
    }
}