import React from 'react'
import './Header.css'
import img1 from './brightlystake-logo.png'
function Header() {
  return (
    <div>
      <div>
        <span>
          <img className='image' src={img1} alt="" />
        </span>
        <span>
          <h4>Brightlystake</h4>
        </span>
      </div>
      <div className='top-nav'>
        <h1>Axelar Validator Stats</h1>
        <div>
          <h4>Last updated on</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
