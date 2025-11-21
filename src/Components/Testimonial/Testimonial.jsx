import React, { useEffect } from 'react'
import "./testimonial.css"
import AOS from "aos";
import "aos/dist/aos.css";
import AVTR1 from"../../assets/avatar1.jpg"
import AVTR2 from"../../assets/avatar2.jpg"
import AVTR3 from"../../assets/avatar3.jpg"
import AVTR4 from"../../assets/avatar4.jpg"
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
    avatar:AVTR1,
    name: "",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Molestiae eligendi ipsa, repudiandae cum necessitatibus accusamus tempora 
      totam eius saepe. Reiciendis nam distinctio sed laudantium  necessitatibus? Dolorem modi eos minima corrupti.`
  },
    {
    avatar:AVTR2,
    name: "Shatta wale",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Molestiae eligendi ipsa, repudiandae cum necessitatibus accusamus tempora 
      totam eius saepe. Reiciendis nam distinctio sed laudantium  necessitatibus? Dolorem modi eos minima corrupti.`
  },
    {
    avatar:AVTR3,
    name: "kwame Despite",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Molestiae eligendi ipsa, repudiandae cum necessitatibus accusamus tempora 
      totam eius saepe. Reiciendis nam distinctio sed laudantium  necessitatibus? Dolorem modi eos minima corrupti.`
  },
   {
    avatar:AVTR4,
    name: "John Doe",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
     Molestiae eligendi ipsa, repudiandae cum necessitatibus accusamus tempora 
      totam eius saepe. Reiciendis nam distinctio sed laudantium  necessitatibus? Dolorem modi eos minima corrupti.`
  },
]
const Testimonial = () => {
    useEffect(() => {
       AOS.init({
        duration: 3000,      // still smooth and slow
       once: false,         // repeat animation when you scroll back
       offset: 50,          // smaller trigger distance
       easing: "ease-in-out",
       });
     }, []);
  return (
   <section id='testimonial'
    data-aos="fade-up"
   >
    
    <h5> Review from Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonials__container'
     modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >

     {
      data.map(({avatar,name,review} ,index) => {
        return (
             <SwiperSlide key={index}className='testimonial'>
        <div className='client__avatar'>
    <img src={avatar} alt="Avatar one" />
        </div>
        <h5 className='client__name'>{name}</h5>
    <small className='client__review'>
   {review}
    </small>
      </SwiperSlide>
        )
      
      })
     }
   
    </Swiper>

   </section>
  )
}

export default Testimonial