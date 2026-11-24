import { createContext } from "react";

export const globalStorage = createContext();

const MainStorage = ({ children }) => {
  const data = {};

  return (
    <globalStorage.Provider value={data}>{children}</globalStorage.Provider>
  );
};

export default MainStorage;
