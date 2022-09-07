import React from 'react'
import Item from './Item'

const ItemList = ({productList}) => {
  return (
    <div className='flex flex-wrap'>
        {productList.map((product,index)=> <Item key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList