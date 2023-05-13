import React from 'react'
import { useState } from 'react';
import './certificate.css'
import ecert1 from '../../assets/backend.PNG';
import ecert2 from '../../assets/javascript.PNG';
import ecert3 from '../../assets/network-essentials.PNG';
import ecert4 from '../../assets/intro-packet.PNG';

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import  SwiperCore, { Pagination } from "swiper";

const Certificate = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.activeIndex);
    };

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

  return (


    <section id='certificate'>
        <h5>Here's All my Ecert</h5>
        <h2>Certificate</h2>
        <div className='btn__certificate'>
        <a href='#slide1'>Training Ecert</a>
        |
        <a href='#slide2'>Webinar Ecert</a>
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

            <div className='info__container'>
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
            <div id='slide2'>
                        <h1>Hello world</h1>
                    </div>
            </div>
    </section>
  )
}

export default Certificate