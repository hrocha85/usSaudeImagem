import React, { createContext, useState } from 'react';


type INormal = {
    DedoEsquerdoLaudoNormal?: any;
    setDedoEsquerdoLaudoNormal?: any;
}

export const DedoEsquerdoNormalContext = createContext({} as INormal);
//export const StringDedoEsquerdoNormalContext = createContext({} as StringNormal);

export function DedoEsquerdoNormalProvider({ children }) {

    const [DedoEsquerdoLaudoNormal, setDedoEsquerdoLaudoNormal] = useState();

    return (
        <DedoEsquerdoNormalContext.Provider value={{ DedoEsquerdoLaudoNormal, setDedoEsquerdoLaudoNormal }}>
            {children}
        </DedoEsquerdoNormalContext.Provider>
    )
}

