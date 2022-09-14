import { useContext } from "react";
import { Children, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [cart,setCart]= useState([]);

//FUNCION CON ITEM Y QUANTITY
//pasar item y contador
/* const addItem = (item, quantity) =>{
    const purchase = {...item, quantity}
    const existInCart = cart.find((prod)=> prod.id === item.id)
    if(existInCart){
        const carritoActualizado = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity:prod.quantity + quantity}
            }else{
                return prod
            }
        })
        setCart(carritoActualizado)
    }else{
        setCart([...cart, purchase])
    }
} */

//FUNCION QUE RECIBBE ITEM( RECIBE PURCHASE)
const addItem = (item) =>{
    const existInCart = cart.find((prod)=> prod.id === item.id)
    if(existInCart){
        const carritoActualizado = cart.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, quantity:prod.quantity + item.quantity}
            }else{
                return prod
            }
        })
        setCart(carritoActualizado)
    }else{
        setCart([...cart,item])
    }
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
        <CartContext.Provider value={{cart, clear, removeItem, isInCart, addItem}}>
            {children}
        </CartContext.Provider>   
)
}

export const useCart = () => useContext(CartContext)