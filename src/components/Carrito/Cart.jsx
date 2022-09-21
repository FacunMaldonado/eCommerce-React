import React from 'react'
import { useNavigate } from 'react-router-dom'
//import { useContext } from 'react'
//import { CartContext } from '../../context/CartContext'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
    //forma larga de context
 //const{cart} = useContext(CartContext)
const {cart, removeItem, cartTotal, clear}= useCart()
const navegar = useNavigate()
 //console.log('carrtito', cart)
  return (
    <div>
      {
        !cart.length 
        ? <div>
          <h2> Tu carrito esta vacio</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button onClick={()=>navegar('/')}> Ir a comprar</button>
        </div>
        : <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h2>Tu carrito</h2>
          {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
          <span>Total: ${cartTotal()}</span>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', backgroundColor:'red'}}>
            <button onClick={clear}>Vaciar carrito</button>
            <button>Terminar compra</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart