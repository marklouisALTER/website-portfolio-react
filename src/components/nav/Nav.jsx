import React from 'react'
import './nav.css'
import {AiFillHome,AiFillContacts,AiFillFolderOpen} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {IoMdCreate} from 'react-icons/io'


import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <div className='logo'>
      <h3>Markme</h3>
      </div>
      <div className='links'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BsBookHalf/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><IoMdCreate/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active':''}><AiFillFolderOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><AiFillContacts/></a>
      </div>
    </nav>
  )
}

export default Nav