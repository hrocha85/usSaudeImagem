import React, { createContext, useState } from 'react';


type INormal = {
    QuadrilEsquerdoLaudoNormal?: any;
    setQuadrilEsquerdoLaudoNormal?: any;
}

export const QuadrilEsquerdoNormalContext = createContext({} as INormal);
//export const StringQuadrilEsquerdoNormalContext = createContext({} as StringNormal);

export function QuadrilEsquerdoNormalProvider({ children }) {

    const [QuadrilEsquerdoLaudoNormal, setQuadrilEsquerdoLaudoNormal] = useState();

    return (
        <QuadrilEsquerdoNormalContext.Provider value={{ QuadrilEsquerdoLaudoNormal, setQuadrilEsquerdoLaudoNormal }}>
            {children}
        </QuadrilEsquerdoNormalContext.Provider>
    )
}

