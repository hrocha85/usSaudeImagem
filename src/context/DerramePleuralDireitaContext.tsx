import React, { createContext, useState } from 'react';


type INormal = {
    DerramePleuralDireita?: any;
    setDerramePleuralDireita?: any;
}

export const DerramePleuralDireitaContext = createContext({} as INormal);
//export const StringDerramePleuralContextContext = createContext({} as StringNormal);

export function DerramePleuralDireitaProvider({ children }) {

    const [DerramePleuralDireita, setDerramePleuralDireita] = useState();

    return (
        <DerramePleuralDireitaContext.Provider value={{ DerramePleuralDireita, setDerramePleuralDireita }}>
            {children}
        </DerramePleuralDireitaContext.Provider>
    )
}

