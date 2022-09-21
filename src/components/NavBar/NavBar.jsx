import React, {useState} from 'react'
//import './nav.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'




const NavBar = () => {
  const[nav, setNav] = useState(false);

  const handleNav = ()=> {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <NavLink to='/'>
        <h1 className='w-full text-2xl font-bold text-[#00df9a]'>E-Commerce</h1>
      </NavLink>
        <ul className='hidden md:flex'>
            <li className='p-4'>
              <NavLink aria-current='page' to='/categoria/Hoodie'>Hoodies</NavLink>
            </li>
            <li className='p-4'>
              <NavLink aria-current='page' to='/categoria/Remera'>Remeras</NavLink>
            </li>
            <li className='p-4'>
              <NavLink aria-current='page' to='/categoria/Jogging'>Joggings</NavLink>
            </li>
            <li className='p-4'>
              <NavLink aria-current='page' to='/categoria/Contacto'>Contacto</NavLink>
            </li>
        </ul>
        <NavLink to={'/cart'}>
          <CartWidget />
        </NavLink>
        {/* <AiOutlineShoppingCart className='m-10' size={50}/> */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
        <ul className='uppercase p-4'>
          <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>E-COMMERCE.</h1>
            <li className='p-4 border-b'>
              <NavLink aria-current='page' to='/categoria/Hoodie'>Hoodies</NavLink>
            </li>
            <li className='p-4 border-b'>
              <NavLink aria-current='page' to='/categoria/Remera'>Remeras</NavLink>
            </li>
            <li className='p-4 border-b'>
              <NavLink aria-current='page' to='/categoria/Jogging'>Joggings</NavLink>
            </li>
            <li className='p-4'>
              <NavLink aria-current='page' to='/categoria/Contacto'>Contacto</NavLink>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar