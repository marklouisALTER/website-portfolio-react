import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/formalattire.jpg'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mark Louis Bernardo</h1>
        <h5 className="text-light">Aspiring Fullstack Developer</h5>
        <CTA/> {/** One import */}
        <HeaderSocial/>
        <div className='profile'>
          <img src={profile} alt="My Profile picture"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header