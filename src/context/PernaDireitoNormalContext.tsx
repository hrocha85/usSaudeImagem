import React, { createContext, useState } from 'react';


type INormal = {
    PernaDireitoLaudoNormal?: any;
    setPernaDireitoLaudoNormal?: any;
}

export const PernaDireitoNormalContext = createContext({} as INormal);
//export const StringPernaDireitoNormalContext = createContext({} as StringNormal);

export function PernaDireitoNormalProvider({ children }) {

    const [PernaDireitoLaudoNormal, setPernaDireitoLaudoNormal] = useState();

    return (
        <PernaDireitoNormalContext.Provider value={{ PernaDireitoLaudoNormal, setPernaDireitoLaudoNormal }}>
            {children}
        </PernaDireitoNormalContext.Provider>
    )
}

