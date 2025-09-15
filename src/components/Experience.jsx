import React from 'react'

const Experience = () => {
    const experienceData = [
    {
      title: "Software Development Engineer",
      company: "Bluestock Fintech",
      period: "Apr'25 - May'25",
      description: "Contributed to the development of Bluestock Fintech’s official website as part of the frontend team. Built responsive, modular UI components using HTML5, CSS3, JavaScript, React, Redux, and Tailwind CSS.",
      technologies: ["React", "Tailwind", "Redux", "JavaScript"]
    },
    {
      title: "Frontend Developer",
      company: "CapsAI",
      period: "Jun'25 - Jul'25",
      description: "Led the frontend development of the official CapsAI website using React and Tailwind CSS, and consistently introduced new tools and features to enhance user engagement, site performance, and design scalability.",
      technologies: ["React", "Tailwind", "Redux", "JavaScript"]
    },
    {
      title: "Sub-Head",
      company: "Rajasthan Cultural Association",
      period: "Jan'23 - Aug'23",
      description: "Handled and maintained the official website of the association, managing frontend architecture using HTML, CSS, JavaScript, React, and Tailwind CSS",
      technologies: ["React", "Tailwind", "Redux", "JavaScript"]
    },
  ];

  return (
    <section id="Experience" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-800">
            Experience
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            My professional journey and the projects I've worked on
          </p>
        </div>

        <div className="grid gap-8">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="relative p-8 transition-all duration-300 border border-blue-100 group bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl hover:shadow-xl hover:border-blue-300"
            >
              {/* Company indicator line */}
              <div className="absolute left-0 w-1 rounded-full top-8 bottom-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="mb-2 text-2xl font-bold transition-colors text-slate-800 group-hover:text-blue-600">
                    {experience.title}
                  </h3>
                  <div className="mb-1 text-lg font-semibold text-blue-600">
                    {experience.company}
                  </div>
                  <div className="mb-4 text-slate-500">
                    {experience.period}
                  </div>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-full hover:bg-blue-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                      <span className="text-2xl font-bold text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;