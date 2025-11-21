import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import './skill.css';
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  { 
    name: "HTML", 
    icon: <FaHtml5 className="text-orange-500 text-5xl" /> 
  },
  { 
    name: "CSS", 
    icon: <FaCss3Alt className="text-blue-500 text-5xl" /> 
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="text-yellow-400 text-5xl" /> 
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> 
  },
  { 
    name: "React js", 
    icon:<FaReact  className="text-cyan-400 text-5xl" /> 
  },
  { 
    name: "SASS", 
    icon: <FaSass className="text-pink-500 text-5xl" /> 
  },
  { 
    name: "Git", 
    icon: <FaGitAlt className="text-red-500 text-5xl" /> 
  },
  { 
    name: "Photoshop", 
    icon: <SiAdobephotoshop className="text-blue-400 text-5xl" /> 
  },
];

const SkillsGrid = () => {
  useEffect(() => {
     AOS.init({
      duration: 1500,      // still smooth and slow
     once: false,         // repeat animation when you scroll back
     offset: 50,          // smaller trigger distance
     easing: "ease-in-out",
     });
   }, []);
  return (
  <section 
   data-aos="fade-up"
  id="skills"
  className="flex flex-col items-center justify-center px-6 py-16"
>
  <h5 >Experience</h5>
  <h2 >My Skills</h2>

  <div className="w-full max-w-4xl">
    {/* Mobile grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-card flex flex-col items-center justify-center rounded-xl p-6 transition-transform duration-300 hover:scale-105"
        >
          <div className="mb-6">{skill.icon}</div>
          <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
            {skill.name}
          </p>
        </div>
      ))}
    </div>

    {/* Desktop grid */}
    <div className="hidden md:block">
      <div className="grid grid-cols-4 gap-8 mb-8">
        {skills.slice(0, 4).map((skill, index) => (
          <div
            key={index}
            className="skill-card flex flex-col items-center justify-center rounded-xl p-6 transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-6">{skill.icon}</div>
            <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8 max-w-3xl">
          {skills.slice(4, 7).map((skill, index) => (
            <div
              key={index + 4}
              className="skill-card flex flex-col items-center justify-center rounded-xl p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-6">{skill.icon}</div>
              <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default SkillsGrid;