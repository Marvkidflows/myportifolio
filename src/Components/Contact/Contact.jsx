import React, { useEffect } from 'react'
import"./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import "aos/dist/aos.css";
const Contact = () => {
 useEffect(() => {
   Aos.init({
    duration: 2000,      // still smooth and slow
   once: false,         // repeat animation when you scroll back
   offset: 50,          // smaller trigger distance
   easing: "ease-in-out",
   });
 }, []);
      
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l217w9g', 'template_ua68lih', form.current, {
        publicKey: 'YV6UdNn-w5kcQJ3O9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section  data-aos="fade-up"  id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
    <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>Codexatech@gmail.com</h5>
    <a href="mailto:ibigbamimarvellous@gmail.com" target='_blank'>Send a Message</a>
    </article>

    <article className='contact__option'>
      <RiMessengerLine  className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>Codexatech</h5>
    <a href="https://m.me/Pemisire.Praise" target='_blank'>Send a Message</a>
    </article>

    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>+2349132416094</h5>
    <a href="https://api.whatsapp.com/send?phone=2349132416094" target='_blank'>Send a Message</a>
    </article>
        </div>
          {/* end of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section> 
  )
}

export default Contact