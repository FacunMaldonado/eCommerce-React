import React from 'react'
import './nav.css'

const NavBar = () => {
  return (
    <div className='nav bg-black'>
        <ul>
            <li className='font-bold'>
                <a href="">Buzos</a>
            </li>
            <li>
                <a href="">Remeras</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar