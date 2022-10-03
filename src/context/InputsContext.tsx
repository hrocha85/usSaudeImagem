import React, { createContext, useState } from 'react';


type Inputs = {
    inputBacoAcessorio?: any;
    setinputBacoAcessorio?: any;
}


export const InputsContext = createContext({} as Inputs);

export function InputsProvider({ children }) {

    const [inputBacoAcessorio, setinputBacoAcessorio] = useState([]);

    return (
        <InputsContext.Provider value={{ inputBacoAcessorio, setinputBacoAcessorio }}>
            {children}
        </InputsContext.Provider>
    )
}