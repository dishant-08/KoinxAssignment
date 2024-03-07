import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState("");

  const setNameValue = (newName) => {
    setName(newName);
  };

  return (
    <NameContext.Provider value={{ name, setNameValue }}>
      {children}
    </NameContext.Provider>
  );
};

export const useNameContext = () => {
  return useContext(NameContext);
};
