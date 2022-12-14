import React, { createContext, useState } from 'react';


type INormal = {
    CotoveloDireitoLaudoNormal?: any;
    setCotoveloDireitoLaudoNormal?: any;
}

export const CotoveloDireitoNormalContext = createContext({} as INormal);
//export const StringCotoveloDireitoNormalContext = createContext({} as StringNormal);

export function CotoveloDireitoNormalProvider({ children }) {

    const [CotoveloDireitoLaudoNormal, setCotoveloDireitoLaudoNormal] = useState();

    return (
        <CotoveloDireitoNormalContext.Provider value={{ CotoveloDireitoLaudoNormal, setCotoveloDireitoLaudoNormal }}>
            {children}
        </CotoveloDireitoNormalContext.Provider>
    )
}

