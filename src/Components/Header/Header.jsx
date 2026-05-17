import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header className=''>
      <div className="container header__container">
         <h5>Hello </h5>
        
        <h1>CODEXA TECH</h1>
        <h5 className="text-light">Senior PHP & Full-Stack Architect</h5>
        <CTA/>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
