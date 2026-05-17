import React, { useEffect } from 'react'
import "./experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
useEffect(() => {
   AOS.init({
    duration: 2000,      // still smooth and slow
   once: false,         // repeat animation when you scroll back
   offset: 50,          // smaller trigger distance
   easing: "ease-in-out",
   });
 }, []);
  return (
   <section data-aos="fade-up" id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

<div className='container experience__container'>
  <div className='experience__frontend'>
    <h3>Frontend Development</h3>
<div  className='experience__content'>
  <article className='experience__details'>
    < BsPatchCheckFill className='experience__details-icon'/>
  <div>
     <h4>HTML</h4>
    <small className='text-light' > Experienced</small>
  </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill  className='experience__details-icon'/>
   <div>
     <h4>CSS</h4>
    <small className='text-light' > Intermidate</small>
   </div>
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
<div>
      <h4>javaScript</h4>
    <small className='text-light' > Intermidate</small>
</div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>Bootstrap</h4>
    <small className='text-light' > Experienced</small>
   </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
  <div>
      <h4>Tailwind</h4>
    <small className='text-light' > Experienced</small>
  </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>React</h4>
    <small className='text-light' > Experienced</small>
   </div>
  </article>
</div>
  </div>

  {/* End of frond end */}
  <div className='experience__backend'>
  <h3>Backend Development</h3>
<div  className='experience__content'>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>Node JS</h4>
    <small className='text-light' > Experienced</small>
   </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
  <div>
      <h4>MongoDB</h4>
    <small className='text-light' > Intermidate</small>
  </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>PHP</h4>
    <small className='text-light' > Intermidate</small>
   </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>MySQL</h4>
    <small className='text-light' > Basic</small>
   </div>
  </article>
   <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>Python</h4>
    <small className='text-light' > Experienced</small>
   </div>
    
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
   <div>
     <h4>Laravel</h4>
    <small className='text-light' > Experienced</small>
   </div>
    
  </article>
</div>

  </div>

</div>
   </section>

     
  )
}

export default Experience