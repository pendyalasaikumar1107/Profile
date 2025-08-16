import React from "react";
import { trackSkillView } from '../firebase';

import frontendIcon from "../assets/images/frontend.svg";
import backendIcon from "../assets/images/backend.svg";
import databaseIcon from "../assets/images/database.svg";
import cloudIcon from "../assets/images/cloud.svg";
import toolsIcon from "../assets/images/tools.svg";
import methodologiesIcon from "../assets/images/methodologies.svg";

const skills = [
  {
    category: "Frontend",
    image: frontendIcon,
    skills: ["React.js", "Angular.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    image: backendIcon,
    skills: ["Node.js", "Express.js", "Koa.js", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    image: databaseIcon,
    skills: ["PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    image: cloudIcon,
    skills: ["Microsoft Azure", "Azure DevOps", "Kubernetes", "GitOps"],
  },
  {
    category: "Tools",
    image: toolsIcon,
    skills: [
      "Jira",
      "Grafana",
      "Kibana",
      "Postman",
      "VS Code",
      "Eclipse",
      "GitHub Desktop",
      "Lens",
      "K9s",
    ],
  },
  {
    category: "Methodologies",
    image: methodologiesIcon,
    skills: ["Agile Development", "RESTful API Design"],
  },
];

function Skills() {
  return (
    <section div id="skills" className="bg-gray-100 w-[100%] h-fit py-3 pb-10 relative">
      <div className="mx-19 my-8 max-md:mx-8">
        <h2 className="text-cyan-800 text-2xl text-center uppercase font-bold mb-7 pb-5">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 mt-3 max-md:px-4">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              onClick={() => trackSkillView(skillSet.category)}
              className="bg-white p-4 max-md:p-6 rounded-lg shadow-md relative max-md:w-full max-md:max-w-none cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={skillSet.image}
                alt="skills icon"
                className="w-14 h-14 max-md:w-16 max-md:h-16 mb-2 absolute -top-7 max-md:-top-8 left-0 right-0 mx-auto"
              />
              <h3 className="text-xl max-md:text-xl font-semibold mb-2 max-md:mt-4">
                {skillSet.category}
              </h3>
              <ul className="list-disc pl-5 flex gap-2 flex-col flex-wrap h-40 max-md:h-auto max-md:space-y-2">
                {skillSet.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-700 max-md:text-base list-none ">
                    &#10003;{skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
