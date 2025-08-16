import React from 'react';
import './Homebanner.css';
import HeroImage  from '../assets/images/heroImage.jpg';
import Resume  from '../assets/files/resume.pdf';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

function Herobanner() {
  return (
    <div id='home' className='bg-gray-100 w-[100%] h-fit relative'>
        <div className='flex flex-wrap-reverse justify-evenly align-center justtify-content-center gap-5 md:gap-1 top-2'> 
            <div className='lg:w-130 lg:mt-10 flex flex-col justify-center items-start lg:ml-17 md:w-[50%] md:mt-15 md:ml-0 md:mb-10 sm:mt-1 max-sm:mx-5 max-lg:ml-3'>
                <h1 className='lg:text-5xl max-lg:text-4xl max-sm:text-2xl font-semibold my-2'>Hi, It's Saikumar</h1>
                <h3 className='text-animation lg:text-3xl max-lg:text-3xl max-sm:text-2xl font-semibold min-w-[280px]'>I'm a <span></span></h3>
                <p className='mt-3 text-zinc-600 text-2 font-medium text-justify lg:xl max-lg:text-lg max-sm:text-sm'> with over 4 years of hands-on experience in designing, developing, and deploying high-performance, scalable applications. Expertise spans both frontend and backend development, cloud computing, and automation. Adept at optimizing development workflows, reducing maintenance costs, and driving efficiency through database migrations, cost-effective solutions, and streamlined pipeline automation. Proven track record in team leadership and optimizing project architecture to enhance performance, scalability, and overall system effectiveness.</p>
                <div className='flex cursor-pointer gap-5 max-sm:my-5 max-sm:pb-5 md:my-6 max-lg:my-6 w-fit items-center'>
                    <a
                        href="https://github.com/SaikumarP1107"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-600 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/saikumar-pendyala/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-800 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    {/*  Download Resume Button */}
                    <a
                        href={Resume}
                        download
                        className="flex items-center bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-700 transition text-sm"
                    >
                        <FaDownload className="mr-2" />
                        Resume
                    </a>
                </div>
            </div>
            <div className='lg:ml-17 lg:mt-10 md:mt-15 md:ml-0 md:mb-10 sm:mt-1 max-sm:ml-4 content-center'>
                <div className={`hero-image hero-image-animation lg:w-85 lg:h-85 md:w-80 md:h-80 sm:w-70 sm:h-70 max-sm:w-60 max-sm:h-60`}></div>
            </div>
        </div>
    </div>
  )
}

export default Herobanner
