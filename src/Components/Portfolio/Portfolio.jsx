import React, { useEffect } from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/voyagepic.jpg"
import IMG2 from "../../assets/ecommerce.PNG"
import IMG3 from "../../assets/food website.PNG"
import IMG4 from "../../assets/portifolio2.PNG"
import IMG5 from "../../assets/dashboard.png"
import IMG6 from "../../assets/portfolio6.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  
  {
    id:1,
    Image: IMG1,
    title:"Voyager Travel Website",
    github:"https://github.com/Marvkidflows/Voyagertourwebsite.git",
    demo:"https://travelsandtourvoyage.com/"
  },{
  id:2,
  Image: IMG2,
  title:"Ecommerce-Website",
  github:"https://github.com/Marvkidflows/Ecommercereact.git",
  demo:"https://ecommercereact-qza7.vercel.app"
},
    {
    id:3,
    Image: IMG3,
    title:"NutriCare – Dietitian & Wellness Landing Page",
    github:"https://github.com",
    demo:"https://nutricare-dietitian-wellness.vercel.app/"
  },
    {
    id:4,
    Image: IMG4,
    title:"My Personal portifolio",
    github:"https://github.com/Marvkidflows/personalPortifolio.git",
    demo:"https://personal-portifolio-jet.vercel.app/"
  },
    {
    id:5,
    Image: IMG5,
    title:"AI Health Dashboard",
    github:"https://github.com/Marvkidflows/Health-dashboard.git",
    demo:"https://health-dashboard-nine-fawn.vercel.app/"
  },
    {
    id:6,
    Image: IMG6,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github:"https://github.com/Marvkidflows/Crypto-dashboard.git",
    demo:"https://crypto-dashboard.vercel.app/"
  }


]

const Portfolio = () => {
  useEffect(() => {
     AOS.init({
      duration: 2000,      // still smooth and slow
     once: false,         // repeat animation when you scroll back
     offset: 50,          // smaller trigger distance
     easing: "ease-in-out",
     });
   }, []);
  return (
   <section data-aos="fade-up"   id='portifolio'>
    <h5> Recent Work</h5>
    <h2>Portifolio</h2>

    <div className='container portfolio__container'>
     {
      data.map(({id,Image,title,github,demo}) => {
        return (
          <article className='portfolio__item' key={id}>
            <div className='portfolio__item-image'>
              <img src={Image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        )
      })
     }
    </div>
   </section>
  )
}

export default Portfolio