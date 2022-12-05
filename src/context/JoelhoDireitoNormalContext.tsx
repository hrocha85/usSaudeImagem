import React, { createContext, useState } from 'react';


type INormal = {
    JoelhoDireitoLaudoNormal?: any;
    setJoelhoDireitoLaudoNormal?: any;
}

export const JoelhoDireitoNormalContext = createContext({} as INormal);
//export const StringJoelhoDireitoNormalContext = createContext({} as StringNormal);

export function JoelhoDireitoNormalProvider({ children }) {

    const [JoelhoDireitoLaudoNormal, setJoelhoDireitoLaudoNormal] = useState();

    return (
        <JoelhoDireitoNormalContext.Provider value={{ JoelhoDireitoLaudoNormal, setJoelhoDireitoLaudoNormal }}>
            {children}
        </JoelhoDireitoNormalContext.Provider>
    )
}

