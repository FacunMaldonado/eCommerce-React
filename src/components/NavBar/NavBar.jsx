import React, {useState} from 'react'
import './nav.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'
import TTBlanco from '../../img/TT-Blanco.png'




const NavBar = () => {
  const[nav, setNav] = useState(false);

  const handleNav = ()=> {
    setNav(!nav)
  }

  return (

    <header>

      <div className='nav w-full flex justify-between items-center h-24  mx-auto px-4 text-white'>
        
          <ul className='hidden md:flex'>
              <li className='p-4'>
                <NavLink aria-current='page' to='/categoria/Hoodie'>Hoodies</NavLink>
              </li>
              <li className='p-4'>
                <NavLink aria-current='page' to='/categoria/Remera'>Remeras</NavLink>
              </li>
          </ul>

          <NavLink to='/'>
          <img className='logo' src="https://res.cloudinary.com/dhzrx3fie/image/upload/c_scale,h_165,q_auto:best,w_129/v1664375194/CoderReact-TT/TT_Baby_Flame__Negro_1_gj195e.png" alt="" />
          {/* <h1 className='w-full text-2xl font-bold text-[#00df9a]'>E-Commerce</h1> */}
          </NavLink>

          <ul className='hidden md:flex'>
              <li className='p-4'>
                <NavLink aria-current='page' to='/categoria/Accesorio'>Accesorios</NavLink>
              </li>
              <li className='p-4'>
                <NavLink aria-current='page' to='/categoria/Contacto'>Contacto</NavLink>
              </li>
          </ul>
          <NavLink className='carrito' to={'/cart'}>
            <CartWidget />
          </NavLink>
          {/* <AiOutlineShoppingCart className='m-10' size={50}/> */}
          <div  onClick={handleNav} className='bar block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-black'/> : <AiOutlineMenu size={30} />}
          </div>
          
          <div className={nav ? 'navDesplegable ' : 'fixed left-[-100%]'}>
          <ul className='uppercase p-4'>
            <img className='TTmobile' src="https://res.cloudinary.com/dhzrx3fie/image/upload/c_scale,h_51,q_auto:low,w_427/v1664375193/CoderReact-TT/TT_1_Negro_1_b7jik5.png" alt="logo nav movile" />
            {/* <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>E-COMMERCE.</h1> */}
              <li className='list_nav_mov ' onClick={() => setNav(false)}>
                <NavLink aria-current='page' to='/categoria/Hoodie'>Hoodies</NavLink>
              </li>
              <li className='list_nav_mov' onClick={() => setNav(false)}>
                <NavLink aria-current='page' to='/categoria/Remera'>Remeras</NavLink>
              </li>
              <li className='list_nav_mov' onClick={() => setNav(false)}>
                <NavLink aria-current='page' to='/categoria/Accesorio'>Accesorios</NavLink>
              </li>
              <li className='list_nav_mov'onClick={() => setNav(false)}>
                <NavLink aria-current='page' to='/categoria/Contacto'>Contacto</NavLink>
              </li>
          </ul>
          </div>
      </div>
    </header>
    
  )
}

export default NavBar