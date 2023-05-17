import React from 'react'
import './about.css'
import knowme from '../../assets/knowme.jpg'
import {TbFileCertificate} from 'react-icons/tb'
import {BsFillFileCodeFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'
import { useEffect } from 'react'


const About = () => {
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


  const observerTxt = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('showTxt');
    }
    else{
        entry.target.classList.remove('showTxt');
    }
    })
})

const hiddenTxt = document.querySelectorAll('.hiddenTxt');
hiddenTxt.forEach((el)=> observerTxt.observe(el)); 
  });

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div class="hiddenTxt about__me-img">
          <img src={knowme} alt="" />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className="hidden about__card">
            <TbFileCertificate className='about__icon'/>
            <h5>Certificates</h5>
            <small>10+ Ecert</small>
          </article>
          <article className="hidden about__card">
            <AiFillFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>5 projects completed</small>
          </article>
          <article className="hidden about__card">
            <BsFillFileCodeFill className='about__icon'/>
            <h5>Language Learn</h5>
            <small>4 Language Learn</small>
          </article>
        </div>
        <p className='hiddenTxt'>
          I am a Full Stack Web Developer with a passion for learning new technologies.
          I have experience with HTML, CSS, JavaScript, React, Node, Express, MongoDB, MySQL, Mongoose, and more.
        </p>
        <a href="#contact" className='btn btn-primary'>Message me</a>
      </div>
      </div>
    </section>
  )
}

export default About