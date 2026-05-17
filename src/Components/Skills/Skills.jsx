import React, { useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaLaravel } from "react-icons/fa6";

import "./skill.css";

import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
  },

  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
  },

  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },

  {
    name: "React JS",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },

  {
    name: "SASS",
    icon: <FaSass className="text-pink-500 text-3xl" />,
  },

  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-3xl" />,
  },

  {
    name: "Photoshop",
    icon: (
      <SiAdobephotoshop className="text-blue-400 text-3xl" />
    ),
  },

  {
    name: "MySQL",
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968312.png"
        alt="MySQL"
        className="w-8 h-8"
      />
    ),
  },

  {
    name: "MongoDB",
    icon: <DiMongodb className="text-green-500 text-3xl" />,
  },
  {
    name : "NodeJs",
    icon: <FaNode className=" text-black-500 text-3xl" />
  },
  {
    name : "Laravel",
    icon: <FaLaravel className=" text-red-500 text-3xl" />
  },
];

const SkillsGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center px-6 py-16"
    >
      <h5 className="text-gray-400 text-base">
        Experience
      </h5>

      <h2 className="text-white text-4xl font-bold mb-10">
         Skills
      </h2>

      <div className="max-w-5xl w-full flex justify-center">
        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              skill-card
              w-[120px]
              h-[120px]
              flex
              flex-col
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400
              bg-[#1b2436]
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >
              <div className="mb-3">
                {skill.icon}
              </div>

              <p className="text-white text-[16px] font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;