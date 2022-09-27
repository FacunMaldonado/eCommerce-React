import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase/firebase'
import './checkout.css'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const [loader, setLoader] = useState(false)
    const{cart, cartTotal, clear}= useCart()
    const navigate = useNavigate()

    const datosComprador = (e)=>{
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
    
    const finalizarCompra = (e)=> {
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar todos los datos del formulario!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }else{
            const ventas = collection(db, "orders")
            setLoader(true)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias por su compra!',
                showConfirmButton: false,
                timer: 1500
            })
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
        .finally(()=> setLoader(false))
        }
    }
    if(loader){
        return <p>Cargando...</p>
    }
    return (
        <div>
            {!orderId
            ?<div>
                <h2>Checkout</h2>
                <h4>Porfavor complete todos los campos</h4>
                <form onSubmit={finalizarCompra}>
                    <input type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
                    <input type="number"  placeholder='Telefono' name='phone' onChange={datosComprador}/>
                    <input type="email" placeholder='email@email.com' name='email' onChange={datosComprador}/>
                    <button>Finalizar Compra</button>
                </form>
            </div>
            :
            <div>
                <h4>Su orden es: {orderId}</h4>
                <button onClick={()=> navigate('/')}>Volver</button>
            </div>}
        </div>
    )
}

export default Checkout