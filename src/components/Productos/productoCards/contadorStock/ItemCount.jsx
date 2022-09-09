import React, { useState } from 'react'
import './contador.css'

const ItemCount = ({stock,onAdd}) => {
    const[count,setCount]= useState(1)

    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const sumar = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
  return (
    <>
    <div className='botones'>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
    </div>
        <button  className='botonComprar' onClick={onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount