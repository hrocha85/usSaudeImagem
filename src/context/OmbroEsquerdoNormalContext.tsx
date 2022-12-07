import React, { createContext, useState } from 'react';


type INormal = {
    OmbroEsquerdoLaudoNormal?: any;
    setOmbroEsquerdoLaudoNormal?: any;
}

export const OmbroEsquerdoNormalContext = createContext({} as INormal);
//export const StringOmbroEsquerdoNormalContext = createContext({} as StringNormal);

export function OmbroEsquerdoNormalProvider({ children }) {

    const [OmbroEsquerdoLaudoNormal, setOmbroEsquerdoLaudoNormal] = useState();

    return (
        <OmbroEsquerdoNormalContext.Provider value={{ OmbroEsquerdoLaudoNormal, setOmbroEsquerdoLaudoNormal }}>
            {children}
        </OmbroEsquerdoNormalContext.Provider>
    )
}

