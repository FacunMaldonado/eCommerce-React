import React from 'react'
import Item from './productoCards/Item'

const ItemList = ({productList}) => {
  return (
    <div className='presentCards'>
        {productList.map((product)=> <Item key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList