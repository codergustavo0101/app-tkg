import React, { createContext, useState } from 'react'
export const CartContext = createContext({})

function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const [cartLenght, setCartLenght] = useState()
    const [stateCart, setStateCart] = useState(false)


    const handleAddToCart = (data) => {


        setCart([data, ...cart])
        setCartLenght(cart.length)
        setStateCart(true)
    }

    const handleStateCart = (state) => {
        setStateCart(state)
    }




    return (
        <CartContext.Provider value={{ handleAddToCart, handleStateCart, cart, cartLenght, stateCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider