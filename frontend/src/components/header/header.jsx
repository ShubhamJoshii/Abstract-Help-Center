import React from 'react'
import logo from "../../assets/logo.png"
import "./header.css"
const Header = () => {
  return (
    <header>
      <div id="firstSection">
        <img src={logo} alt="Logo" className='logo'/>
        <p>Abstract <span>| Help Center</span></p>
      </div>
      <button>Submit a request</button>
    </header>
  )
}

export default Header
