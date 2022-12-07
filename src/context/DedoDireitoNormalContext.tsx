import React, { createContext, useState } from 'react';


type INormal = {
    DedoDireitoLaudoNormal?: any;
    setDedoDireitoLaudoNormal?: any;
}

export const DedoDireitoNormalContext = createContext({} as INormal);
//export const StringDedoDireitoNormalContext = createContext({} as StringNormal);

export function DedoDireitoNormalProvider({ children }) {

    const [DedoDireitoLaudoNormal, setDedoDireitoLaudoNormal] = useState();

    return (
        <DedoDireitoNormalContext.Provider value={{ DedoDireitoLaudoNormal, setDedoDireitoLaudoNormal }}>
            {children}
        </DedoDireitoNormalContext.Provider>
    )
}

