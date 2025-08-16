import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 w-[100%] mx-auto p-6 text-center py-18 max-sm:py-8 relative" id="contact">
      <h2 className="text-2xl text-cyan-800 font-bold mb-7">Contact Me</h2>
      <p className="mb-8 text-gray-600">
        I’d love to hear from you — whether it’s about a project, opportunity, or just to say hi!
      </p>

      {/* Contact Form */}
      {/*
      <form className="space-y-6 mx-[15%]">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-800 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Send Message
        </button>
      </form>
      */}

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-6 text-2xl text-cyan-600">
        <a
          href="https://linkedin.com/in/saikumar-pendyala"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SaikumarP1107"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:pendylasaikumar1107@gmail.com"
          className="hover:text-cyan-800 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
