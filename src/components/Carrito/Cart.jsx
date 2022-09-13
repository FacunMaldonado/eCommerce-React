import React from 'react'
//import { useContext } from 'react'
//import { CartContext } from '../../context/CartContext'
import { useCart } from '../../context/CartContext'

const Cart = () => {
    //forma larga de context
 //const{cart} = useContext(CartContext)
 const {cart}= useCart()
 console.log('carrtito', cart)
  return (
    <div>Cart</div>
  )
}

export default Cart