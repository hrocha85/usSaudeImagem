import React, { createContext, useState } from 'react';


type INormal = {
    JoelhoEsquerdoLaudoNormal?: any;
    setJoelhoEsquerdoLaudoNormal?: any;
}

export const JoelhoEsquerdoNormalContext = createContext({} as INormal);
//export const StringJoelhoEsquerdoNormalContext = createContext({} as StringNormal);

export function JoelhoEsquerdoNormalProvider({ children }) {

    const [JoelhoEsquerdoLaudoNormal, setJoelhoEsquerdoLaudoNormal] = useState();

    return (
        <JoelhoEsquerdoNormalContext.Provider value={{ JoelhoEsquerdoLaudoNormal, setJoelhoEsquerdoLaudoNormal }}>
            {children}
        </JoelhoEsquerdoNormalContext.Provider>
    )
}

