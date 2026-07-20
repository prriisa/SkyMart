import { createContext, useState, useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [allUser, setAllUser] = useState(
    JSON.parse(localStorage.getItem("allUser")) || []
  );

  useEffect(() => {
    localStorage.setItem("allUser", JSON.stringify(allUser));
  }, [allUser]);

  return (
    <MyStore.Provider value={{ allUser, setAllUser }}>{children}</MyStore.Provider>
  );
};