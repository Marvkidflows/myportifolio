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
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
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
           I'm a creative and detail-oriented Web Developer with a passion for crafting responsive, user-friendly websites. I specialize in blending modern design with clean, efficient code to deliver seamless digital experiences.

Whether it's building from scratch or optimizing existing platforms, I thrive on turning ideas into elegant, functional interfaces that leave a lasting impression.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About