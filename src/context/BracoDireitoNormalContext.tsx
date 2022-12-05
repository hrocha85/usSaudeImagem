import React, { createContext, useState } from 'react';


type INormal = {
    BracoDireitoLaudoNormal?: any;
    setBracoDireitoLaudoNormal?: any;
}

export const BracoDireitoNormalContext = createContext({} as INormal);
//export const StringBracoDireitoNormalContext = createContext({} as StringNormal);

export function BracoDireitoNormalProvider({ children }) {

    const [BracoDireitoLaudoNormal, setBracoDireitoLaudoNormal] = useState();

    return (
        <BracoDireitoNormalContext.Provider value={{ BracoDireitoLaudoNormal, setBracoDireitoLaudoNormal }}>
            {children}
        </BracoDireitoNormalContext.Provider>
    )
}

