import React from 'react'
import { useState,useEffect } from 'react';
import './certificate.css'
// import './script.js'
import ecert1 from '../../assets/backend.PNG';
import ecert2 from '../../assets/javascript.PNG';
import ecert3 from '../../assets/network-essentials.PNG';
import ecert4 from '../../assets/intro-packet.PNG';
import webinar1 from '../../assets/amason.png';
import webinar2 from '../../assets/cyber.PNG';
import webinar3 from '../../assets/psgame.PNG';
import webinar4 from '../../assets/ust.PNG';
import webinar5 from '../../assets/fwdp.PNG';
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import  SwiperCore, { Pagination } from "swiper";

const Certificate = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ActiveLink, setActiveLink] = useState('#');
    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.activeIndex);
    };

useEffect(()=>{
    const trainingEcert = document.querySelector('#training__ecert');
    const webinarEcert = document.querySelector('#webinar__ecert');
    const slide1 = document.querySelector('#slide1');
    const slide2 = document.querySelector('#slide2');
    const swipper1 = document.querySelector('.swiper__container');
    const swipper2 = document.querySelector('.swiper__container2');
    const infoContainer = document.querySelector('.info__container');
    swipper2.style.display = 'none';
    slide2.style.display = 'none';
        trainingEcert.addEventListener('click',function(){
        trainingEcert.style.borderBottom = '1px solid var(--color-primary)'
        webinarEcert.style.borderBottom = 'none'
        slide2.style.display = 'none';
        slide1.style.display = 'block';
        swipper1.style.display = 'block';
        swipper2.style.display = 'none';
        infoContainer.style.display = 'block';
    })
    webinarEcert.addEventListener('click',function(){
        webinarEcert.style.borderBottom = '1px solid var(--color-primary)'
        trainingEcert.style.borderBottom = 'none'
        slide2.style.display = 'block';
        slide1.style.display = 'none';
        swipper1.style.display = 'none';
        swipper2.style.display = 'block';
        infoContainer.style.display = 'none';

    })
    
    
    
    }, []);


const data = [
    {
     title: 'Javascript Programming',
     type: 'Certificate of Completion',
     date: 'March 13-31 2023',
     content: 'This given to me on April 2023 for completing the course and the duration is two weeks.  In this course we learn about function of the javascript and how to manipulate the DOM.Our final project in this course is to create a To-Do list that stored in localstorage then have a Crud also with design. You can view that to-do list in my Project section.'
    },
    {
        title: 'Backend Web Development 101',
        type: 'Certificate of Completion',
        date: 'October 17 - November 3 2022',
        content: 'This certificate given to me on october - november 2022 the course is all about how to create a backend web development server. we use mongodb shell, express, nodejs, and postman to create a server. Our final project is to create a mini air bnb with map API on it.'
   
    },
    {
        title: 'Network Essentials',
        type: 'Certificate of Completion',
        date: 'November 11 2021',
        content: 'This certificate given to me on November 2021 this is CISCO Network Academy. This course is all about on creating or buildiing a network connections and secure the network. We also configure the network connection and make the security become more secure. We also identify the different types of attack and how to prevent it.'
   
    },
    {
        title: 'Introduction to Packet Tracer',
        type: 'Certificate of Completion',
        date: 'October 21 2021',
        content: 'I got this certificate for completing the introduction of the Packet Tracer and introduce us on how to build a safe network.'
   
    }
]

const webinar = [
    {
        title: 'Amazon AWS Webinar',
        type: 'Webinar',
        date: 'September 29, 2022',
        content: 'This webinar is all about on how to use the aws amazon Conference day. Tutorials and modules that you need to watch and attend to get this certificate. Also free 25$ account.'
    },
    {
        title: 'Cyber Security Fundamentals',
        type: 'Webinar',
        date: 'September 04, 2021',
        content: 'This webinar is about awareness in types of viruses and how to avoid this. And learn how to defend your privacy about types of attacks happening in internet.'
    },

    {
        title: 'Survive on Information Technology',
        type: 'Webinar',
        date: 'October 30, 2021',
        content: 'In this webinar tackle about how to survive in IT course and giving tips. And teach us what we need in order to graduate and become competent programmers.'
    },

    {
        title: 'Real World XP',
        type: 'Webinar',
        date: 'April 02, 2022',
        content: 'In this webinar is all about how to develop your skillset and build your career in technology. Same as in the Survive on Information Technology to overcome the obstacle in IT.'
    },
    {
        title: 'AI in the Future',
        type: 'Webinar',
        date: 'June 25, 2023',
        content: 'This is monthly Event in The Filipino Web Developer Peers its a community in Facebook that all filipino programmers meeting and sharing knowldge about Ai and discussions.'
    }
]

  return (


    <section id='certificate'>
        <h5>Here's All my Ecert</h5>
        <h2>Certificate</h2>
        <div className='btn__certificate'>
        <a href='#certificate' id='training__ecert' onClick={()=> setActiveLink('active')} className={ActiveLink === 'active'? 'active': ''}>Training Ecert</a>
        |
        <a href='#certificate' id='webinar__ecert'>Webinar Ecert</a>
        </div>
        <div className='container certificate__container'>
        <Swiper className='swiper__container' 
        pagination={true} 
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        spaceBetween={40}>
            <SwiperSlide><img src={ecert2} alt='Javascript 101'/></SwiperSlide>
            <SwiperSlide><img src={ecert1} alt='Javascript Backend'/></SwiperSlide>
            <SwiperSlide><img src={ecert3} alt='Intro to Packet Tracer'/></SwiperSlide>
            <SwiperSlide><img src={ecert4} alt='Network Essentials'/></SwiperSlide>
    </Swiper>

            <div className='info__container' >
                <div id='slide1'>
                    {
                        
                        data.map(({title,type,date,content}, index)=>{
                            return(
                            <div className='info__item' key={index}
                                style={{display: currentSlide === index ? 'block':'none'}}
                            >
                                <div className='title'>
                                <h3>{title}</h3>
                                </div>
                                <div className='type__date'>
                                <p>{type}</p>
                                <p>{date}</p>
                                </div>
                                <p>{content}</p>
                            </div>
                        )
                        })
                    }
                    </div>  
            </div>
            <Swiper className='swiper__container2' 
        pagination={true} 
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        spaceBetween={40}>
            <SwiperSlide><img src={webinar1} alt='Amason Webinar Certificate'/></SwiperSlide>
            <SwiperSlide><img src={webinar2} alt='Cyber Security Certificate'/></SwiperSlide>
            <SwiperSlide><img src={webinar3} alt='Survive on Technology'/></SwiperSlide>
            <SwiperSlide><img src={webinar4} alt='Real World XP'/></SwiperSlide>
            <SwiperSlide><img src={webinar5} alt='Future of AI'/></SwiperSlide>
    </Swiper>

            <div id='slide2'>
            {
                        
                        webinar.map(({title,type,date,content}, index)=>{
                            return(
                            <div className='info__item' key={index}
                                style={{display: currentSlide === index ? 'block':'none'}}
                            >
                                <div className='title'>
                                <h3>{title}</h3>
                                </div>
                                <div className='type__date'>
                                <p>{type}</p>
                                <p>{date}</p>
                                </div>
                                <p>{content}</p>
                            </div>
                        )
                        })
                    }
                    </div>
                    </div>
    </section>
  )
}

export default Certificate