import { createContext, useEffect, useState } from "react";
import { Product, CartItem } from "../types";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    cartCount: 0
})

const addCartItem = (cartItems: CartItem[], productToAdd: Product): Array<CartItem> => {
    const recordExicst = cartItems.find(item => item.id === productToAdd.id)

    if (recordExicst) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        )
    }


    return [...cartItems, {
        ...productToAdd,
        quantity: 1
    }]
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [cartCount, setCartCount] = useState(0)

    const addItemsToCart = (productToAdd: Product) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}