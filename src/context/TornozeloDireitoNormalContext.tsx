import React, { createContext, useState } from 'react';


type INormal = {
    TornozeloDireitoLaudoNormal?: any;
    setTornozeloDireitoLaudoNormal?: any;
}

export const TornozeloDireitoNormalContext = createContext({} as INormal);
//export const StringTornozeloDireitoNormalContext = createContext({} as StringNormal);

export function TornozeloDireitoNormalProvider({ children }) {
    const [TornozeloDireitoLaudoNormal, setTornozeloDireitoLaudoNormal] = useState();
    return (
        <TornozeloDireitoNormalContext.Provider value={{ TornozeloDireitoLaudoNormal, setTornozeloDireitoLaudoNormal }}>
            {children}
        </TornozeloDireitoNormalContext.Provider>
    )
}

