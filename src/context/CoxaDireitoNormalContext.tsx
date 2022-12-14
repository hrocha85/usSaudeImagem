import React, { createContext, useState } from 'react';


type INormal = {
    CoxaDireitoLaudoNormal?: any;
    setCoxaDireitoLaudoNormal?: any;
}

export const CoxaDireitoNormalContext = createContext({} as INormal);
//export const StringCoxaDireitoNormalContext = createContext({} as StringNormal);

export function CoxaDireitoNormalProvider({ children }) {

    const [CoxaDireitoLaudoNormal, setCoxaDireitoLaudoNormal] = useState();

    return (
        <CoxaDireitoNormalContext.Provider value={{ CoxaDireitoLaudoNormal, setCoxaDireitoLaudoNormal }}>
            {children}
        </CoxaDireitoNormalContext.Provider>
    )
}

