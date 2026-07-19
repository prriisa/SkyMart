import { createContext } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children}) => {

    return <MyStore.Provider value={{}}>{children}</MyStore.Provider>
}