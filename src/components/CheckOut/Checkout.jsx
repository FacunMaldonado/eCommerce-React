import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase/firebase'
import './checkout.css'
import { useCart } from '../../context/CartContext'

function Checkout() {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const{cart, cartTotal, clear}= useCart()

    const datosComprador = (e)=>{
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
    
    const finalizarCompra = (e)=> {
        e.preventDefault()
        const ventas = collection(db, "orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then ((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
    }

  return (
    <div>
        <h2>Checkout</h2>
        <h4>Porfavor complete todos los campos</h4>
        <form>
            <input type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador} onSubmit={finalizarCompra}/>
            <input type="number"  placeholder='Telefono' name='phone' onChange={datosComprador}/>
            <input type="email" placeholder='email@email.com' name='email' onChange={datosComprador}/>
            <button>Finalizar Compra</button>
        </form>
    </div>
  )
}

export default Checkout