import React, { createContext, useState } from 'react';


type INormal = {
    BracoEsquerdoLaudoNormal?: any;
    setBracoEsquerdoLaudoNormal?: any;
}

export const BracoEsquerdoNormalContext = createContext({} as INormal);
//export const StringBracoEsquerdoNormalContext = createContext({} as StringNormal);

export function BracoEsquerdoNormalProvider({ children }) {

    const [BracoEsquerdoLaudoNormal, setBracoEsquerdoLaudoNormal] = useState();

    return (
        <BracoEsquerdoNormalContext.Provider value={{ BracoEsquerdoLaudoNormal, setBracoEsquerdoLaudoNormal }}>
            {children}
        </BracoEsquerdoNormalContext.Provider>
    )
}

