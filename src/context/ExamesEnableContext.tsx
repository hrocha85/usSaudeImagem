import { createContext, useState } from "react";

type IEnableExames = {
  enableExames?: any;
  setEnableExames?: any;
};

export const EnableExamesContext = createContext({} as IEnableExames);

export function EnableExamesProvider({ children }) {
  const [enableExames, setEnableExames] = useState();

  return (
    <EnableExamesContext.Provider value={{ enableExames, setEnableExames }}>
      {children}
    </EnableExamesContext.Provider>
  );
}
