import React, { createContext, useState, useContext, useEffect } from 'react';


type IExame = {
    tabExames?: any;
    setTabExames?: any;
}


export const TabExamesContext = createContext({} as IExame);

export function TabExamesProvider({ children }) {

    const [tabExames, setTabExames] = useState([{}]);


    return (
        <TabExamesContext.Provider value={{ tabExames, setTabExames }}>
            {children}
        </TabExamesContext.Provider>
    )
}