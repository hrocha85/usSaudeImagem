import React, { createContext, useState } from 'react';


type INormal = {
    MaoEsquerdoLaudoNormal?: any;
    setMaoEsquerdoLaudoNormal?: any;
}

export const MaoEsquerdoNormalContext = createContext({} as INormal);
//export const StringMaoEsquerdoNormalContext = createContext({} as StringNormal);

export function MaoEsquerdoNormalProvider({ children }) {

    const [MaoEsquerdoLaudoNormal, setMaoEsquerdoLaudoNormal] = useState();

    return (
        <MaoEsquerdoNormalContext.Provider value={{ MaoEsquerdoLaudoNormal, setMaoEsquerdoLaudoNormal }}>
            {children}
        </MaoEsquerdoNormalContext.Provider>
    )
}

