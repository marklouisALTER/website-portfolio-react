import React from 'react'
import './nav.css'
import {AiFillHome,AiFillContacts,AiFillFolderOpen} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import {IoMdCreate} from 'react-icons/io'
import {TbFileCertificate} from 'react-icons/tb'
import icon from '../../assets/favicon.png'
import { useState, useEffect } from 'react';


// const Nav = () => {
//   const [activeNav, setActiveNav] = useState ('#')

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let active = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          active = `#${section.id}`;
        }
      });

      setActiveNav(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




return (
    <nav>
      <div className='logo'>
      <img src={icon} alt=''/>
      </div>
      <div className='links'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BsBookHalf/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><IoMdCreate/></a>
      <a href="#certificate" onClick={()=> setActiveNav('#certificate')} className={activeNav === '#certificate'? 'active':''}><TbFileCertificate/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active':''}><AiFillFolderOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><AiFillContacts/></a>
      </div>
    </nav>
  )
}

export default Nav