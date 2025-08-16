import React from "react";
import TimelineItem from "./Timeline-Item";

function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TCS",
      date: "March 2022 - Present",
      description:
        "Led full-stack development, automation and cloud migration initiatives, achieving cost savings and improved performance with Azure DevOps and Kubernetes.",
    },
    {
      id: 2,
      title: "FrontEnd Developer",
      company: "TCS",
      date: "May 2021 - March 2022",
      description:
        "Developed responsive web applications using React.js and Material UI, ensuring timely delivery and enhanced performance.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-200 w-full py-12 relative">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        <span className="text-cyan-800">Experience</span>
        <br />
        <span className="text-sm md:text-base font-normal text-gray-600">Work Experience</span>
      </h2>

      <div className="relative w-full max-w-5xl mx-auto px-4">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-cyan-800 h-full z-0 hidden lg:block"></div>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-10 max-sm:gap-2">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} data={item} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
