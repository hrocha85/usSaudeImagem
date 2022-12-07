import React, { createContext, useState } from 'react';


type INormal = {
    PeDireitoLaudoNormal?: any;
    setPeDireitoLaudoNormal?: any;
}

export const PeDireitoNormalContext = createContext({} as INormal);
//export const StringPeDireitoNormalContext = createContext({} as StringNormal);

export function PeDireitoNormalProvider({ children }) {

    const [PeDireitoLaudoNormal, setPeDireitoLaudoNormal] = useState();

    return (
        <PeDireitoNormalContext.Provider value={{ PeDireitoLaudoNormal, setPeDireitoLaudoNormal }}>
            {children}
        </PeDireitoNormalContext.Provider>
    )
}

