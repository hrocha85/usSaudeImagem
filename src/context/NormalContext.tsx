import React, { createContext, useState } from 'react';


type INormal = {
    laudoNormal?: any;
    setLaudoNormal?: any;
}

// type StringNormal = {
//     StringLaudoNormal?: any;
//     setStringLaudoNormal?: any;
// }


export const NormalContext = createContext({} as INormal);
//export const StringNormalContext = createContext({} as StringNormal);

export function NormalProvider({ children }) {

    const [laudoNormal, setLaudoNormal] = useState();

    return (
        <NormalContext.Provider value={{ laudoNormal, setLaudoNormal }}>
            {children}
        </NormalContext.Provider>
    )
}

