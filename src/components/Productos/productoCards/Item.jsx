import React from 'react'
import "./productoCards.css"
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
  
    const {id,img,name,description,price,stock} = product
    const navegar = useNavigate()
  return (
    /*<div className='cardContainer'>
        <img className='imgCard' src={img}alt={name} />
        <div className='boxCard'>
            <p className='card_title'>{name}</p>
            { <p className='card_description'>{description}</p> }
            <p className='card_price'>${price}</p>
            <p className='card_stock'>stock: {stock}</p>
        </div>
        <button className='verMas' onClick={()=>navegar(`/detalle/${id}`)}>Ver Mas</button>

        <h1 class="title">Hover over the cards</h1>
    </div>
    */
   
    <main className="cardContainer">
      <div className="card">
        <img className='imgCard' src={img}alt={name} ></img>
        <img className='imgCard2' src="https://res.cloudinary.com/dhzrx3fie/image/upload/c_scale,h_1258,q_auto:best,w_1095/v1664971293/CoderReact-TT/WhatsApp_Image_2022-10-04_at_12.48.07_y64x4x.jpg" alt="" />

        <div className="content">
          <h2 className="title">{name}</h2>
        {/*<img className='imgCard' src={img}alt={name} / */}
          {/* <p className="copy">{description}</p> */}
          <button className='btn' onClick={()=>navegar(`/detalle/${id}`)}>Ver Mas</button>
          {/* <button className="btn">View Trips</button> */}
        </div>
      </div>
    </main>
  )
}

export default Item