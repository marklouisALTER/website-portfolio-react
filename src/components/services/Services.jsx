import React from 'react'
import {SiPostman,SiVisualstudio,SiApachenetbeanside,SiMongodb,SiXampp} from 'react-icons/si'
import {GrUbuntu} from 'react-icons/gr'
import {FiFigma} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {useEffect} from 'react'
import './services.css'
const Services = () => {

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          entry.target.classList.remove('show');
      }
      })
  })
  
  const hiddenElements = document.querySelectorAll('.seviceHidden');
  hiddenElements.forEach((el)=> observer.observe(el));
  });
  return (
    <section id="services">
      <h5>Tools that i Used</h5>
      <h2>I'm Familiar with</h2>
      <div className='container tools__Container'>
        <div className='tools__card'>
          <article className='seviceHidden tool__about'>
            <SiPostman className='tool_icons'/>
            <h3>Postman</h3>
            <small>Experience</small>
          </article>
          <article className='seviceHidden tool__about'>
            <SiVisualstudio className='tool_icons'/>
            <h3>VsCode</h3>
            <small>Experience</small>
          </article>
          <article className='seviceHidden tool__about'>
            <SiApachenetbeanside className='tool_icons'/>
            <h3>Netbeans</h3>
            <small>Intermediate</small>
          </article>
          <article className='seviceHidden tool__about'>
            <GrUbuntu className='tool_icons'/>
            <h3>Ubuntu</h3>
            <small>Experience</small>
          </article>
          <article className='seviceHidden tool__about'>
            <FiFigma className='tool_icons'/>
            <h3>Figma</h3>
            <small>Experience</small>
          </article>
          <article className='seviceHidden tool__about'>
            <SiMongodb className='tool_icons'/>
            <h3>MongoDb</h3>
            <small>Experience</small>
          </article>
          <article className='seviceHidden tool__about'>
            <BsGithub className='tool_icons'/>
            <h3>Github</h3>
            <small>Intermediate</small>
          </article>
          <article className='seviceHidden tool__about'>
            <SiXampp className='tool_icons'/>
            <h3>Xampp</h3>
            <small>Experience</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services