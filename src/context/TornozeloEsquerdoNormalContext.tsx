import React, { createContext, useState } from 'react';


type INormal = {
    TornozeloEsquerdoLaudoNormal?: any;
    setTornozeloEsquerdoLaudoNormal?: any;
}

export const TornozeloEsquerdoNormalContext = createContext({} as INormal);
//export const StringTornozeloEsquerdoNormalContext = createContext({} as StringNormal);

export function TornozeloEsquerdoNormalProvider({ children }) {

    const [TornozeloEsquerdoLaudoNormal, setTornozeloEsquerdoLaudoNormal] = useState();

    return (
        <TornozeloEsquerdoNormalContext.Provider value={{ TornozeloEsquerdoLaudoNormal, setTornozeloEsquerdoLaudoNormal }}>
            {children}
        </TornozeloEsquerdoNormalContext.Provider>
    )
}

