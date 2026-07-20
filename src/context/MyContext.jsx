import { createContext, useState, useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem("allUser")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)


    useEffect(() => {localStorage.setItem("allUser", JSON.stringify(allUser))}, [allUser])
    useEffect(() => {localStorage.setItem("currentUser" , JSON.stringify(currentUser))}, [currentUser])

    return (
        <MyStore.Provider value={{ allUser, setAllUser, currentUser, setCurrentUser }}>{children}</MyStore.Provider>
    );
};