import { SpecItem } from "../../DatabaseCore";

const excludeByString = (DataBase : SpecItem[],...exclude:string[]) :string[]=>{
    const out : string[] = [];
        DataBase.forEach((elm)=>{
            const titleIn = elm.title.toLowerCase();
            let match = false;
            for (let i = 0; i<exclude.length; i++){
                const compare = exclude[i].toLowerCase();
                if (titleIn.includes(compare) === true) match = true;
            }
            if (match === false) out.push(elm.title);
        });
        return out;
}
const excludeByType = (DataBase : SpecItem[],...exclude:string[]) =>{
    const out : string[] = [];
    DataBase.forEach((elm)=>{
        const variants = elm.variants;
        let match = false;
        for (let variant in variants){
            if (exclude.includes(variant)){ 
                const objKey = variant as keyof typeof variants;
                const test = variants[objKey];
                if (test === "active") {
                    match = true;
                }
            }
        }

        if (!match) out.push(elm.title);
    })
    return out;
}
export {excludeByString, excludeByType};