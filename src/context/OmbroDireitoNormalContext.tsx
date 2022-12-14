import React, { createContext, useState } from 'react';


type INormal = {
    OmbroDireitoLaudoNormal?: any;
    setOmbroDireitoLaudoNormal?: any;
}

export const OmbroDireitoNormalContext = createContext({} as INormal);
//export const StringOmbroDireitoNormalContext = createContext({} as StringNormal);

export function OmbroDireitoNormalProvider({ children }) {

    const [OmbroDireitoLaudoNormal, setOmbroDireitoLaudoNormal] = useState();

    return (
        <OmbroDireitoNormalContext.Provider value={{ OmbroDireitoLaudoNormal, setOmbroDireitoLaudoNormal }}>
            {children}
        </OmbroDireitoNormalContext.Provider>
    )
}

