import React, { createContext, useState } from 'react';


type INormal = {
    PunhoEsquerdoLaudoNormal?: any;
    setPunhoEsquerdoLaudoNormal?: any;
}

export const PunhoEsquerdoNormalContext = createContext({} as INormal);
//export const StringPunhoEsquerdoNormalContext = createContext({} as StringNormal);

export function PunhoEsquerdoNormalProvider({ children }) {

    const [PunhoEsquerdoLaudoNormal, setPunhoEsquerdoLaudoNormal] = useState();

    return (
        <PunhoEsquerdoNormalContext.Provider value={{ PunhoEsquerdoLaudoNormal, setPunhoEsquerdoLaudoNormal }}>
            {children}
        </PunhoEsquerdoNormalContext.Provider>
    )
}

