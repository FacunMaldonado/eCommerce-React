import React from 'react'
//import './nav.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const NavBar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>E-Commerce</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Buzos</li>
            <li className='p-4'>Remeras</li>
            <li className='p-4'>Contacto</li>
        </ul>
        <div>
          <AiOutlineMenu size={20}/>
        </div>
        <div className='fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300]'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>E-Commerce</h1>
        <ul className='pt-24 uppercase p-4'>
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