import React, { createContext, useState } from 'react';


type INormal = {
    PeEsquerdoLaudoNormal?: any;
    setPeEsquerdoLaudoNormal?: any;
}

export const PeEsquerdoNormalContext = createContext({} as INormal);
//export const StringPeEsquerdoNormalContext = createContext({} as StringNormal);

export function PeEsquerdoNormalProvider({ children }) {

    const [PeEsquerdoLaudoNormal, setPeEsquerdoLaudoNormal] = useState();

    return (
        <PeEsquerdoNormalContext.Provider value={{ PeEsquerdoLaudoNormal, setPeEsquerdoLaudoNormal }}>
            {children}
        </PeEsquerdoNormalContext.Provider>
    )
}

