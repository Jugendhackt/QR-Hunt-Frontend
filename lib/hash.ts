const prime =  2983520357203875207351;

export function hash(key:string){
    let hash:number = 0;

    for (let i = 0; i < key.length; i++) {
        let char = key.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash
}