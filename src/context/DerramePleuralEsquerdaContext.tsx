import React, { createContext, useState } from 'react';


type INormal = {
    DerramePleuralEsquerda?: any;
    setDerramePleuralEsquerda?: any;
}

export const DerramePleuralEsquerdaContext = createContext({} as INormal);
//export const StringDerramePleuralContextContext = createContext({} as StringNormal);

export function DerramePleuralEsquerdaProvider({ children }) {

    const [DerramePleuralEsquerda, setDerramePleuralEsquerda] = useState();

    return (
        <DerramePleuralEsquerdaContext.Provider value={{ DerramePleuralEsquerda, setDerramePleuralEsquerda }}>
            {children}
        </DerramePleuralEsquerdaContext.Provider>
    )
}

