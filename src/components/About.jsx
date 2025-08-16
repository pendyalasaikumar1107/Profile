import React from "react";
import "./About.css";
import AboutImage from "../assets/images/about-img.webp";
import WorkingEmoji from "../assets/images/working-emoji.png";
import Text2 from "../assets/images/text2.svg";

function About() {
  return (
    <div id="about" className="bg-gray-200 w-full py-16 max-sm:py-8 relative">
      <h3 className="text-cyan-800 text-2xl md:text-3xl text-center mb-10 max-sm:mb-5 uppercase font-bold">
        About me
      </h3>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="mee"
            className="rounded-xl w-[90%] max-w-md md:max-w-full object-cover"
          />
          {/* Emoji & Text Overlay */}
          <span className="absolute -bottom-12 max-sm:right-2 right-4 w-24 h-24 md:w-48 md:h-48 bg-white rounded-full flex justify-center items-center shadow-md">
            <img
              src={WorkingEmoji}
              alt="emoji"
              className="absolute w-16 md:w-20 max-md:w-10 max-sm:w-10 max-sm:bottom-[35%] bottom-[35%] left-1/2 transform -translate-x-1/2"
            />
            <img
              src={Text2}
              alt="text"
              className="text-image absolute"
            />
          </span>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="mb-6 text-2xl md:text-3xl max-sm:text-xl text-gray-700 font-semibold leading-snug">
            Full Stack Developer <br /> <span className="max-sm:text-lg">based in Hyderabad, India 📍</span>
          </h4>
          <p className="text-gray-600 text-base text-justify md:text-lg leading-relaxed font-medium">
            Hey, my name is Saikumar, and I'm a Full Stack Developer. My passion is designing, developing, and deploying scalable applications. I specialize in both frontend and backend development.
            <br />
            <br />
            My main tech stack includes React, Node.js (Koa Js), and PostgreSQL. I'm always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
