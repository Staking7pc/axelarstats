import React from 'react'
import './Header.css'
import logo from './Brightlystake-logo.svg'
export default function Header() {
  return (
    <div>
      <ul>
        <li className='logo'><img src={logo} alt="" width={35} height={35} /></li>
        <li className='li'><a class="" href="#home">Brightlystake</a></li>
        <li className='li-r'><a class="active" href="#about">Stake with us</a></li>
      </ul>
    </div>
  )
}
