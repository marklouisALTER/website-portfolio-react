import React from 'react'
import './about.css'
import knowme from '../../assets/knowme.jpg'
import {TbFileCertificate} from 'react-icons/tb'
import {BsFillFileCodeFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div class="about__me-img">
          <img src={knowme} alt="" />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className="about__card">
            <TbFileCertificate className='about__icon'/>
            <h5>Certificates</h5>
            <small>10+ Ecert</small>
          </article>
          <article className="about__card">
            <AiFillFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>5 projects completed</small>
          </article>
          <article className="about__card">
            <BsFillFileCodeFill className='about__icon'/>
            <h5>Language Learn</h5>
            <small>4 Language Learn</small>
          </article>
        </div>
        <p>
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