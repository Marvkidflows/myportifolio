import React, { useEffect } from 'react'
import "./about.css"
import ME from '../../assets/aboutme.png'
import AOS from "aos";
import "aos/dist/aos.css";

import { FaAward, FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
useEffect(() => {
  AOS.init({
   duration: 3000,      // still smooth and slow
  once: false,         // repeat animation when you scroll back
  offset: 50,          // smaller trigger distance
  easing: "ease-in-out",
  });
}, []);
  return (
    <section data-aos="fade-up"  id='about'>
      <h5>Get To Know</h5>
      <h2>About CODEXA TECH</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About CODEXA TECH" />
          </div>
        </div>
        <div data-aos="flip-up" className='about__content'>
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
             <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
             <article className='about__card'>
              <FaUsers className='about__icon'/>
             <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

             <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
           CODEXA TECH is a full-stack development practice dedicated to crafting sophisticated, scalable web solutions. With expertise spanning React and Node.js on the backend and Tailwind CSS for modern frontend design, I deliver applications that seamlessly merge aesthetic excellence with robust technical architecture. My proficiency across the complete development stack—from database design with Laravel to responsive UI implementation—enables me to build comprehensive digital solutions from conception through deployment.

I specialize in transforming complex business requirements into intuitive, high-performance applications. Whether architecting enterprise-grade systems or optimizing existing platforms for enhanced performance, I am committed to delivering solutions that exceed expectations and create lasting digital impact.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About