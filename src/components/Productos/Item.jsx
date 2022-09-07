import React from 'react'
    const {img,name,description,price,stock} = product
const Item = (product) => {
  return (
    <div>
        <img src={img}alt={name} />
        <div>
            <p className='card-text'>{name}</p>
            <p className='card-text'>{description}</p>
            <p className='card-text'>${price}</p>
            <p className='card-text'>stock: {stock}</p>
        </div>

    </div>
  )
}

export default Item