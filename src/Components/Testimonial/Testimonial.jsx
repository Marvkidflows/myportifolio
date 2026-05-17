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
    name: "Linda Richard",
   review: `I had a really great experience working with this service. The attention to detail and level of care were impressive. Everything felt smooth, and I always felt supported throughout the process. I highly recommend it to anyone looking for quality and reliability.`
  },
    {
    avatar:AVTR2,
    name: "Shatta wale",
   review: `This was one of the best experiences I’ve had. Everything was well organized, and the communication was clear from start to finish. I felt confident in every step, and the results exceeded my expectations.`
  },
    {
    avatar:AVTR3,
    name: "James Carter",
   review: `This was one of the best experiences I’ve had. Everything was well organized, and the communication was clear from start to finish. I felt confident in every step, and the results exceeded my expectations.`
  },
   {
    avatar:AVTR4,
    name: "Sarah Johnson",
review: `I really appreciated the level of professionalism and care throughout the entire process. Everything was clearly explained, and I always felt informed and supported. The experience was smooth, effective, and genuinely helpful. I would gladly recommend this service to others.`
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