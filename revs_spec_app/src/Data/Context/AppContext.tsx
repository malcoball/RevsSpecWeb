import React, {createContext, useState} from 'react';
import { appContextType } from '../@types/types';

const defaultScheme = {
    data : {
        mainTitle : "Revs Kitchen Spec",
        date : "April 2023",
        specTitle : "classic burger",
        backButton : false,
    },
    updateTitle : (target : 'main'|'spec',newValue:string)=>{},
    changeBack : (value : boolean)=>{}
}

interface Props {
    children: React.ReactNode;
}
export const AppContext = createContext<appContextType >(defaultScheme);
const AppContextProvider: React.FC<Props> =  ({children}) =>{
    const [data,setData] = useState({
        mainTitle : "Rev's Kitchen Spec",
        date : "April 2023",
        specTitle : "classic burger",
        backButton : false
    })
    const updateTitle = (target : 'main' | 'spec',newValue : string)=>{
        const out = data;
        target === 'main' ? out.mainTitle = newValue : out.specTitle = newValue;
        setData(out); 
    }
    const changeBack = (value : boolean) => {
        const out = data;
        out.backButton = value;
        setData(out);
    }
    return (
        <AppContext.Provider value={{data : data,updateTitle : updateTitle,changeBack : changeBack}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;