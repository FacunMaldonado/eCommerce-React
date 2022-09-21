import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
  const{cartQuantity} = useCart()
  return (
    <div className='flex'>
        <AiOutlineShoppingCart className='m-5' size={30}/>
        <span className='mt-6'>{cartQuantity() || ''}</span>
    </div>
  )
}

export default CartWidget