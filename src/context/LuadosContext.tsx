import React, { createContext, useState, useContext, useEffect } from 'react';


type ILaudos = {
    laudoPrin?: string;
    setLaudoPrin?: any;
    signIn?: any;
}


export const LaudosContext = createContext({} as ILaudos);

export function LaudosProvider({ children }) {

    const [laudoPrin, setLaudoPrin] = useState("meu alaudo");

    function signIn() {
        console.log("contex funcionando")

    }

    return (
        <LaudosContext.Provider value={{ laudoPrin, signIn, setLaudoPrin }}>
            {children}
        </LaudosContext.Provider>
    )
}