import { createContext, useState } from "react";
import { Product, CartItem } from "../types";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { }
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

    const addItemsToCart = (productToAdd: Product) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}