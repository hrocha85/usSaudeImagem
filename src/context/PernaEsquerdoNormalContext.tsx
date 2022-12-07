import React, { createContext, useState } from 'react';


type INormal = {
    PernaEsquerdoLaudoNormal?: any;
    setPernaEsquerdoLaudoNormal?: any;
}

export const PernaEsquerdoNormalContext = createContext({} as INormal);
//export const StringPernaEsquerdoNormalContext = createContext({} as StringNormal);

export function PernaEsquerdoNormalProvider({ children }) {

    const [PernaEsquerdoLaudoNormal, setPernaEsquerdoLaudoNormal] = useState();

    return (
        <PernaEsquerdoNormalContext.Provider value={{ PernaEsquerdoLaudoNormal, setPernaEsquerdoLaudoNormal }}>
            {children}
        </PernaEsquerdoNormalContext.Provider>
    )
}

