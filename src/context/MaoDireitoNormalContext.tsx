import React, { createContext, useState } from 'react';


type INormal = {
    MaoDireitoLaudoNormal?: any;
    setMaoDireitoLaudoNormal?: any;
}

export const MaoDireitoNormalContext = createContext({} as INormal);
//export const StringMaoDireitoNormalContext = createContext({} as StringNormal);

export function MaoDireitoNormalProvider({ children }) {

    const [MaoDireitoLaudoNormal, setMaoDireitoLaudoNormal] = useState();

    return (
        <MaoDireitoNormalContext.Provider value={{ MaoDireitoLaudoNormal, setMaoDireitoLaudoNormal }}>
            {children}
        </MaoDireitoNormalContext.Provider>
    )
}

