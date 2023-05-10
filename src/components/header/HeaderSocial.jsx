import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/" target="___blank"><BsLinkedin/></a>
        <a href="https://linkedin.com/" target="___blank"><FaGithubSquare/></a>
        <a href="https://instagram.com/" target="___blank"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocial