import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import ItemCount from './productoCards/contadorStock/ItemCount'

const ItemDetail = ({productDetail}) => {
  const[count,setCount]= useState(1)
  const [compra, setCompra] = useState(false)
  const {name,description,price,stock,img, id} = productDetail || {}; 
  const navegar = useNavigate()
  const {addItem}= useCart()

  const onAdd = ()=> {
    let purchase = {
      id,
      name,
      price,
      stock,
      img,
      quantity: count
    }
    console.log(`compraste ${count} items del producto ${name}`)
    setCompra(true)
    addItem(purchase)
  }

  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'3rem'}}>
      <h2 className='m-4'>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{width:'25rem'}} />
      <p>{description}</p>
      <p className='text-2xl'>${price}</p>
      { !compra 
      ? <ItemCount stock={stock} onAdd={onAdd} count={count} setCount={setCount}/>
      : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <button className='' onClick={()=>navegar('/cart')}> Ir al carrito</button>
        <button className='' onClick={()=>navegar('/')}> Seguir Comprando</button>
      </div> 
    }
    </div>
  )
}

export default ItemDetail