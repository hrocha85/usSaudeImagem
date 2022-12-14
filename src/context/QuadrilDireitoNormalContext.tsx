import React, { createContext, useState } from 'react';


type INormal = {
    QuadrilDireitoLaudoNormal?: any;
    setQuadrilDireitoLaudoNormal?: any;
}

export const QuadrilDireitoNormalContext = createContext({} as INormal);
//export const StringQuadrilDireitoNormalContext = createContext({} as StringNormal);

export function QuadrilDireitoNormalProvider({ children }) {

    const [QuadrilDireitoLaudoNormal, setQuadrilDireitoLaudoNormal] = useState();

    return (
        <QuadrilDireitoNormalContext.Provider value={{ QuadrilDireitoLaudoNormal, setQuadrilDireitoLaudoNormal }}>
            {children}
        </QuadrilDireitoNormalContext.Provider>
    )
}

