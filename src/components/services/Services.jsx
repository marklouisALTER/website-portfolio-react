import React from 'react'
import {SiPostman,SiVisualstudio,SiApachenetbeanside,SiMongodb} from 'react-icons/si'
import {GrUbuntu} from 'react-icons/gr'
import {FiFigma} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import './services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>Tools that i Used</h5>
      <h2>I'm Familiar with</h2>
      <div className='container tools__Container'>
        <div className='tools__card'>
          <article className='tool__about'>
            <SiPostman className='tool_icons'/>
            <h3>Postman</h3>
            <small>Experience</small>
          </article>
          <article className='tool__about'>
            <SiVisualstudio className='tool_icons'/>
            <h3>VsCode</h3>
            <small>Experience</small>
          </article>
          <article className='tool__about'>
            <SiApachenetbeanside className='tool_icons'/>
            <h3>Netbeans</h3>
            <small>Intermediate</small>
          </article>
          <article className='tool__about'>
            <GrUbuntu className='tool_icons'/>
            <h3>Ubuntu</h3>
            <small>Experience</small>
          </article>
          <article className='tool__about'>
            <FiFigma className='tool_icons'/>
            <h3>Figma</h3>
            <small>Experience</small>
          </article>
          <article className='tool__about'>
            <SiMongodb className='tool_icons'/>
            <h3>MongoDb</h3>
            <small>Experience</small>
          </article>
          <article className='tool__about'>
            <BsGithub className='tool_icons'/>
            <h3>Github</h3>
            <small>Intermediate</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services