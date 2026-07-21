import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem("allUser")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)
    const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState("")
    const [features, setFeatures] = useState("")
    const [cartItems, setCartItem] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])
    
    const apiFetch = async () => {
        try {
            let response = await axios("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
            console.log(response.data)
            setAllProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { localStorage.setItem("allUser", JSON.stringify(allUser)) }, [allUser])
    useEffect(() => { localStorage.setItem("currentUser", JSON.stringify(currentUser)) }, [currentUser])
    useEffect(() => { apiFetch() }, [])
    useEffect(() => { localStorage.setItem("cartItems", JSON.stringify(cartItems) || []) }, [cartItems])

    return (
        <MyStore.Provider value={{ allUser, setAllUser, currentUser, setCurrentUser, allProducts, setAllProducts }}>{children}</MyStore.Provider>
    );
};