// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { navigation, handleNavClick } from "../utils/navigation";
import { trackSocialMediaClick, trackContactAction } from '../firebase';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-6">
          {/* Name as Title */}
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Saikumar Pendyala</h3>
          
          {/* Quick Links Section */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-6">
              {navigation.filter(item => item.name !== 'Contact').map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-gray-300 hover:text-cyan-400 transition text-sm cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="mb-5">
            <div className="flex justify-center gap-5">
              <a
                href="https://linkedin.com/in/saikumar-pendyala"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackSocialMediaClick('LinkedIn');
                  trackContactAction('linkedin');
                }}
                className="text-gray-300 hover:text-cyan-400 transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SaikumarP1107"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackSocialMediaClick('GitHub');
                  trackContactAction('github');
                }}
                className="text-gray-300 hover:text-cyan-400 transition text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:pendylasaikumar1107@gmail.com"
                onClick={() => {
                  trackSocialMediaClick('Email');
                  trackContactAction('email');
                }}
                className="text-gray-300 hover:text-cyan-400 transition text-xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-600 pt-6">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              © {currentYear} <span className="text-cyan-400 font-semibold">Saikumar Pendyala</span>. All rights reserved.
            </p>
            <p className="flex items-center">
              Built with <FaHeart className="text-red-500 mx-1" /> using React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
