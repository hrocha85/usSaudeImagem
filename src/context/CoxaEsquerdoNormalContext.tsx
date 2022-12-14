import React, { createContext, useState } from 'react';


type INormal = {
    CoxaEsquerdoLaudoNormal?: any;
    setCoxaEsquerdoLaudoNormal?: any;
}

export const CoxaEsquerdoNormalContext = createContext({} as INormal);
//export const StringCoxaEsquerdoNormalContext = createContext({} as StringNormal);

export function CoxaEsquerdoNormalProvider({ children }) {

    const [CoxaEsquerdoLaudoNormal, setCoxaEsquerdoLaudoNormal] = useState();

    return (
        <CoxaEsquerdoNormalContext.Provider value={{ CoxaEsquerdoLaudoNormal, setCoxaEsquerdoLaudoNormal }}>
            {children}
        </CoxaEsquerdoNormalContext.Provider>
    )
}

