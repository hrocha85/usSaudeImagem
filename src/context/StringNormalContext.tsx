import React, { createContext, useState, useContext, useEffect } from 'react';
import { LaudosContext } from './LuadosContext';


type StringNormal = {
    StringLaudoNormal?: any;
    setStringLaudoNormal?: any;
}


export const StringNormalContext = createContext({} as StringNormal);

export function StringNormalProvider({ children }) {

    const [StringLaudoNormal, setStringLaudoNormal] = useState([]);

    //console.log('context laudo normal', StringLaudoNormal)
    return (
        <StringNormalContext.Provider value={{ StringLaudoNormal, setStringLaudoNormal }}>
            {children}
        </StringNormalContext.Provider>
    )
}