import { createContext, useEffect, useState } from "react";
import { Product, CartItem } from "../types";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    cartCount: 0,
    totalAmount: 0
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

const decreseQuantity = (cartItems: CartItem[], productToUpdate: Product): Array<CartItem> => {
    const foundedRecord = cartItems.find(item => item.id === productToUpdate.id)

    if (foundedRecord?.quantity === 1)
        return removeCartItems(cartItems, productToUpdate)


    return cartItems.map((cartItem) =>
        cartItem.id === productToUpdate.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
    )
}

const removeCartItems = (cartItem: CartItem[], productToRemove: Product) => {
    return cartItem.filter(item => item.id !== productToRemove.id)
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [cartCount, setCartCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const addItemsToCart = (productToAdd: Product) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemsFromCart = (productToRemove: Product) => {
        setCartItems(removeCartItems(cartItems, productToRemove))
    }

    const decreseItemQuantity = (productToUpdate: Product) => {
        setCartItems(decreseQuantity(cartItems, productToUpdate))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newAmount = cartItems.reduce((total, cartItem) => total + cartItem.price, 0)
        setTotalAmount(newAmount)
    }, [cartItems])

    const value = { isCartOpen, setIsCartOpen, addItemsToCart, removeItemsFromCart, decreseItemQuantity, cartItems, cartCount,totalAmount }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}