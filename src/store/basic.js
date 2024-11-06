import { createContext, useContext, useState } from "react";

export const BasicContext = createContext();
export const BasicProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (
    <BasicContext.Provider value={{ menu, setMenu }}>
      {children}
    </BasicContext.Provider>
  );
};
export const useBasic = () => {
  const basicContextValue = useContext(BasicContext);
  if (!basicContextValue) {
    throw new Error("useBaisc must be used within a BasicProvider");
  }
  return basicContextValue;
};
