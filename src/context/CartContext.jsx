import { useContext } from "react";
import { Children, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [cart,setCart]= useState([]);

const addItem = () =>{

}

const clear = (id) =>{
    setCart([])
}

const removeItem = (id) =>{
    setCart(cart.filter((prod)=> prod.id !== id))
}

const isInCart = (id) => {
    return cart.some((prod)=> prod.id  === id)
}

return(
        <CartContext.Provider value={{cart, clear, removeItem, isInCart}}>
        {children}
        </CartContext.Provider>   
)
}

export const useCart = () => useContext(CartContext)