import React from 'react'
import "./productoCards.css"
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
    const {id,img,name,description,price,stock} = product
    const navegar = useNavigate()
  return (
    <div className='cardContainer'>
        <img className='imgCard' src={img}alt={name} />
        <div className='boxCard'>
            <p className='card_title'>{name}</p>
            {/* <p className='card_description'>{description}</p> */} 
            <p className='card_price'>${price}</p>
            <p className='card_stock'>stock: {stock}</p>
        </div>
        <button className='verMas' onClick={()=>navegar(`/detalle/${id}`)}>Ver Mas</button>
    </div>
  )
}

export default Item