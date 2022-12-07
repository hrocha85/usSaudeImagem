import React, { createContext, useState } from 'react';


type INormal = {
    AntebracoDireitoLaudoNormal?: any;
    setAntebracoDireitoLaudoNormal?: any;
}

export const AntebracoDireitoNormalContext = createContext({} as INormal);
//export const StringAntebracoDireitoNormalContext = createContext({} as StringNormal);

export function AntebracoDireitoNormalProvider({ children }) {

    const [AntebracoDireitoLaudoNormal, setAntebracoDireitoLaudoNormal] = useState();

    return (
        <AntebracoDireitoNormalContext.Provider value={{ AntebracoDireitoLaudoNormal, setAntebracoDireitoLaudoNormal }}>
            {children}
        </AntebracoDireitoNormalContext.Provider>
    )
}

