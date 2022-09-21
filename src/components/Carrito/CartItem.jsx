import React from 'react'
import { useCart } from '../../context/CartContext'

const CartItem = ({compra}) => {
        const{removeItem} = useCart()
    return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}>
                <img src={compra.img} alt={compra.name} />
                <span>{compra.name}</span>
                <span>{compra.quantity}</span>
                <span>${compra.price}</span>
                <button onClick={()=>removeItem(compra.id)}>X</button>
            </div>
    )
}

export default CartItem