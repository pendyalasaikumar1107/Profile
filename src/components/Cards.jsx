import React from 'react';
import comingSoon from '../assets/images/coming-soon.jpg'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { trackProjectView } from '../firebase';

function Cards({ title, description, image, technologies, githubLink, liveLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-200 group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full"
          onError={(e) => {
            e.target.src = comingSoon;
          }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        
        {/* Project Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        
        {/* Technologies Used */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProjectView(`${title} - GitHub`)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
          >
            <FaGithub size={16} />
            Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProjectView(`${title} - Live Demo`)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 text-sm"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
