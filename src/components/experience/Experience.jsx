import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3Full,DiReact,DiMongodb,DiNodejsSmall} from 'react-icons/di'
import {SiJavascript,SiBootstrap,SiPhp,SiSqlite} from 'react-icons/si'
import { useEffect } from 'react'


const Experience = () => {
  useEffect(() => {
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
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=> observer.observe(el)); 
  })
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className='hidden experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <AiFillHtml5 className='experience__details-icons'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <DiCss3Full className='experience__details-icons'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiJavascript className='experience__details-icons'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiBootstrap className='experience__details-icons'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <DiReact className='experience__details-icons'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        <div className='hidden experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
            <DiMongodb className='experience__details-icons'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <DiNodejsSmall className='experience__details-icons'/>
            <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiPhp className='experience__details-icons'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <SiSqlite className='experience__details-icons'/>
            <div>
              <h4>Mysqlite</h4>
              <small className='text-light'>Experience</small>
            </div>
            </article>
          </div>
          </div>
      </div>

    </section>
  )
}

export default Experience