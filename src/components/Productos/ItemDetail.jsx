import React from 'react'
import ItemCount from './productoCards/contadorStock/ItemCount'

const ItemDetail = ({productDetail}) => {
  const {name,description,price,stock,img} = productDetail
  const onAdd = ()=> {
    console.log('compraste')
  }
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'3rem'}}>
      <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{width:'25rem'}} />
      <p>{description}</p>
      <p>${price}</p>
      <ItemCount stock={stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail