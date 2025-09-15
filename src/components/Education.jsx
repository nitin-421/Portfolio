const Education = () => {
  const educationData = [
    {
      degree: "Dual Degree Chemical Engineering",
      institution: "Indian Institute of Technology, Kharagpur",
      period: "2022 - 2027",
      description:
        "Focused on software engineering, algorithms, and web development.",
    },
    {
      degree: "Senior Secondary School",
      institution: "Sant Atulanand Residential Academy, Varanasi",
      period: "2014 - 2021",
      description: "Specialized in Physics, Chemistry and Mathematics.",
    },
  ];

  return (
    <section
      id="Education"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform md:-translate-x-0.5"></div>

          {educationData.map((education, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg"></div>

              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {education.degree}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-1">
                      {education.institution}
                    </div>
                    <div className="text-slate-500 text-sm mb-2">
                      {education.period}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
