
export const firstLoad = (saveKey : string) : boolean =>{
    const read = localStorage.getItem(saveKey);
    let out;
    if (read === null){
        // If the save doesn't exist
        out = true;
        localStorage.setItem(saveKey,"false");
    } else {
        // If the save already exists
        out = false;
    }
    return out;
}