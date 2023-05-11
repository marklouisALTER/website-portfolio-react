import React from 'react';
import './contact.css';
import {SiGmail} from 'react-icons/si';
import {BsFacebook,BsLinkedin,BsInstagram} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcggaql', 'template_z9mi47e', form.current, 'eaiGvXP__HtZcrv2R')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Contact Me</h5>
      <h2>Social Media</h2>
      <div className='container contact__container'>
          <div className='sendme__container'>
            <h2>Send me a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Enter your Fullname' />
              <input type='email' name='email' placeholder='Enter your Email' />
              <textarea name='message' placeholder='Enter your Message' rows="7"></textarea>
              <button type='submit' className='btn btn-primary'>Send</button>
            </form>
            </div>
            <div className='socialmedia__container'>
          <article className='socialme__card'>
            <SiGmail className='socialme__icons'/>
            <h5>Gmail</h5>
            <small className='text__light'>marklouisbernando318@gmail.com</small>
            
          </article>
          <article className='socialme__card'>
            <BsFacebook className='socialme__icons'/>
            <h3>Facebook</h3>
            <small className='text__light'>Mark Louis Bernardo</small>
          </article>
          <article className='socialme__card'>
            <BsLinkedin className='socialme__icons'/>
            <h3>Linkedin</h3>
            <small className='text__light'>Bernardo, Mark Louis A.</small>
          </article>
          <article className='socialme__card'>
            <BsInstagram className='socialme__icons'/>
            <h3>Instagram</h3>
            <small className='text__light'>_mrkls_</small>
          </article>
          </div>
      </div>
    </section>
  )
}

export default Contact