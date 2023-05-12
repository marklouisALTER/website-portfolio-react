import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='footer'>
      <h1>Markme</h1>
      <div className='sections'>
          <a href='#'>Homepage</a>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#service'>Tools</a>
          <a href='#certificate'>Certificates</a>
          <a href='#portfolio'>Projects</a>
          <a href='#contact'>Contacts</a>

      </div>
      <div className='socialmedia'>
        <a href='https://www.facebook.com/marklouis.bernando' target='__blank'><AiFillFacebook/></a>
        <a href='https://www.instagram.com/_mrkls_' target='__blank'><AiFillInstagram/></a>
        <a href='https://discord.com/channels/965580728844816434/965580728844816436' target='__blank'><BsDiscord/></a>
      </div>
    </div>
  )
}

export default Footer