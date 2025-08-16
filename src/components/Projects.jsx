import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import projectImage from '../assets/images/project-resume-analyzer.png'; // Replace with your actual image path
import { trackProjectView } from '../firebase';

function Projects() {
  // Sample project data - you can replace with your actual projects

  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    setProjects([{
      id: 1,
      title: "AI Smart CV Scan",
      description: "This project is to scan Resume based on Job Description using AI and extract relevant information.",
      image: projectImage,
      technologies: ["react.js", "Node.js", "Express.js", "tailwindcss", "OpenAI API", "Claude Sonnet"],
      githubLink: "https://github.com/SaikumarP1107/resume-analyzer",
      liveLink: "https://smartcvscan.web.app/"
    },]);
  }, []);


  return (
    <div id="projects" className="bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 max-sm:px-5">
          {projects.map((project) => (
            <Cards 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
