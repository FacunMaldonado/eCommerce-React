import React, {useState} from 'react'
//import './nav.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const NavBar = () => {
  const[nav, setNav] = useState(false);

  const handleNav = ()=> {
    //setea la nav en el lado opuesto
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-2xl font-bold text-[#00df9a]'>E-Commerce</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Buzos</li>
            <li className='p-4'>Remeras</li>
            <li className='p-4'>Contacto</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='uppercase p-4'>
          <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>E-COMMERCE.</h1>
            <li className='p-4 border-b'>Home</li>
            <li className='p-4 border-b'>Buzos</li>
            <li className='p-4 border-b'>Remeras</li>
            <li className='p-4'>Contacto</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar