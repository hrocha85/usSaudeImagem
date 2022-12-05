import React, { createContext, useState } from 'react';


type INormal = {
    AntebracoEsquerdoLaudoNormal?: any;
    setAntebracoEsquerdoLaudoNormal?: any;
}

export const AntebracoEsquerdoNormalContext = createContext({} as INormal);
//export const StringAntebracoEsquerdoNormalContext = createContext({} as StringNormal);

export function AntebracoEsquerdoNormalProvider({ children }) {

    const [AntebracoEsquerdoLaudoNormal, setAntebracoEsquerdoLaudoNormal] = useState();

    return (
        <AntebracoEsquerdoNormalContext.Provider value={{ AntebracoEsquerdoLaudoNormal, setAntebracoEsquerdoLaudoNormal }}>
            {children}
        </AntebracoEsquerdoNormalContext.Provider>
    )
}

