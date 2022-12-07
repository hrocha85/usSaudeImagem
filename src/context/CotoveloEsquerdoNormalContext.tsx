import React, { createContext, useState } from 'react';


type INormal = {
    CotoveloEsquerdoLaudoNormal?: any;
    setCotoveloEsquerdoLaudoNormal?: any;
}

export const CotoveloEsquerdoNormalContext = createContext({} as INormal);
//export const StringCotoveloEsquerdoNormalContext = createContext({} as StringNormal);

export function CotoveloEsquerdoNormalProvider({ children }) {

    const [CotoveloEsquerdoLaudoNormal, setCotoveloEsquerdoLaudoNormal] = useState();

    return (
        <CotoveloEsquerdoNormalContext.Provider value={{ CotoveloEsquerdoLaudoNormal, setCotoveloEsquerdoLaudoNormal }}>
            {children}
        </CotoveloEsquerdoNormalContext.Provider>
    )
}

