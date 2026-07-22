import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem("allUser")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)
    const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState("")
    const [features, setFeatures] = useState("")
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || [])
    const [cartToggle, setCartToggle] = useState(false)

    const apiFetch = async () => {
        try {
            let response = await axios("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
            console.log(response.data)
            setAllProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, { ...product, cart: 1 }]);
        setCartToggle(true);
    };


    useEffect(() => { localStorage.setItem("allUser", JSON.stringify(allUser)) }, [allUser])
    useEffect(() => { localStorage.setItem("currentUser", JSON.stringify(currentUser)) }, [currentUser])
    useEffect(() => { apiFetch() }, [])
    useEffect(() => { localStorage.setItem(`cart-${currentUser.email}`, JSON.stringify(cartItems) || []) }, [cartItems])

    return (
        <MyStore.Provider value={{ allUser, setAllUser, currentUser, setCurrentUser, allProducts, setAllProducts, cartToggle, setCartToggle, cartItems, setCartItems, addToCart }}>{children}</MyStore.Provider>
    );
};