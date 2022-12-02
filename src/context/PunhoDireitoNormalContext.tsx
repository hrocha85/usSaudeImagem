import React, { createContext, useState } from 'react';


type INormal = {
    PunhoDireitoLaudoNormal?: any;
    setPunhoDireitoLaudoNormal?: any;
}

export const PunhoDireitoNormalContext = createContext({} as INormal);
//export const StringPunhoDireitoNormalContext = createContext({} as StringNormal);

export function PunhoDireitoNormalProvider({ children }) {

    const [PunhoDireitoLaudoNormal, setPunhoDireitoLaudoNormal] = useState();

    return (
        <PunhoDireitoNormalContext.Provider value={{ PunhoDireitoLaudoNormal, setPunhoDireitoLaudoNormal }}>
            {children}
        </PunhoDireitoNormalContext.Provider>
    )
}

