import axios from "axios"
import { createContext, useState, useEffect } from "react"

export const MyStore = createContext()

export const ContextProvider = ({ children }) => {
    const [allUser, setAllUser] = useState(JSON.parse(localStorage.getItem("allUser")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)
    const [allProducts, setAllProducts] = useState([])
    const [category, setCategory] = useState("")
    const [features, setFeatures] = useState("")
    const [cartItems, setCartItems] = useState([])
    const [cartToggle, setCartToggle] = useState(false)

    const apiFetch = async () => {
        try {
            let response = await axios("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
            setAllProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = product => {
        setCartItems(prev => [...prev, { ...product, cart: 1 }])
        setCartToggle(true)
    }

    useEffect(() => { localStorage.setItem("allUser", JSON.stringify(allUser)) }, [allUser])
    useEffect(() => { localStorage.setItem("currentUser", JSON.stringify(currentUser)) }, [currentUser])
    useEffect(() => { apiFetch() }, [])
    useEffect(() => {
        if (currentUser && currentUser.email) {
            const savedCart = JSON.parse(localStorage.getItem(`cart-${currentUser.email}`)) || []
            setCartItems(savedCart)
        } else {
            setCartItems([])
        }
    }, [currentUser])
    useEffect(() => {
        if (currentUser && currentUser.email) {
            localStorage.setItem(`cart-${currentUser.email}`, JSON.stringify(cartItems))
        }
    }, [cartItems, currentUser])

    return (
        <MyStore.Provider value={{ allUser, setAllUser, currentUser, setCurrentUser, allProducts, setAllProducts, category, setCategory, features, setFeatures, cartToggle, setCartToggle, cartItems, setCartItems, addToCart }}>{children}</MyStore.Provider>
    )
}
