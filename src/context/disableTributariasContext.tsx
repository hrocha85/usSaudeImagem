import React, { createContext, useState } from 'react';


type IDisable = {
    DisableTributaria?: any;
    setDisableTributaria?: any;
}

export const DisableTributariasContext = createContext({} as IDisable);

export function DisableTributariaProvider({ children }) {

    const [DisableTributaria, setDisableTributaria] = useState();
    console.log(DisableTributaria)
    return (
        <DisableTributariasContext.Provider value={{ DisableTributaria, setDisableTributaria }}>
            {children}
        </DisableTributariasContext.Provider>
    )
}

