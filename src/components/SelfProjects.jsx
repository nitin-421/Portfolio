import { ExternalLink, Github, Code2 } from "lucide-react";

const SelfProjects = () => {
  const Project = [
    {
      id: 1,
      title: "Music Library",
      description:
        "A music library app using the iTunes API to browse and preview 30-second song clips with real-time search, genre filters, playlist support, and fully responsive modern design.",
      skills: ["ReactJs", "Tailwind", "Javascript", "APIs"],
      githubLink: "https://github.com/nitin-421",
      liveDemoLink: "https://music-library-gamma.vercel.app",
    },
    {
      id: 2,
      title: "Fetch Train",
      description:
        "A train information app powered by live API data. It includes station search, coach position tracking, station location mapping, and detailed train schedules for easy planning.",
      skills: ["ReactJs", "Tailwind", "Javascript", "APIs"],
      githubLink: "https://github.com/nitin-421/Train_Info",
      liveDemoLink: "https://fetch-train.vercel.app",
    },
    {
      id: 3,
      title: "Virtual WhiteBoard",
      description:
        " A collaborative whiteboard app with real-time drawing, text, and shape tools. It supports multiple users, saving/loading boards, and a clean, intuitive interface.",
      skills: ["ReactJs", "React-Router", "Javascript", "Context API"],
      githubLink: "https://github.com/nitin-421/WhiteBoard",
      liveDemoLink: "https://white-board-delta-sandy.vercel.app/",
    },
    {
      id: 4,
      title: "Find TalentAi",
      description:
        "A smart job posting interface where you enter a job title, and AI auto-fills the form by generating the job description, key responsibilities, required skills, and qualifications.",
      skills: ["ReactJs", "Tailwind", "Javascript", "APIs"],
      githubLink: "https://github.com/nitin-421",
      liveDemoLink: "https://find-talent-ai-jade.vercel.app",
    },
  ];

  // Bubble color themes for each project
  const bubbleThemes = [
    "from-pink-400/20 via-rose-300/15 to-orange-300/20",
    "from-blue-400/20 via-cyan-300/15 to-teal-300/20",
    "from-purple-400/20 via-violet-300/15 to-indigo-300/20",
    "from-green-400/20 via-emerald-300/15 to-lime-300/20",
  ];

  const accentColors = [
    "from-pink-500 to-rose-600",
    "from-blue-500 to-cyan-600",
    "from-purple-500 to-violet-600",
    "from-green-500 to-emerald-600",
  ];
  return (
    <section id="Projects" className="py-20 px-6">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Self Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of personal projects showcasing innovation,
              technical expertise, and creative problem-solving
            </p>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Project.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${bubbleThemes[index]} backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:-translate-y-1 rounded-lg border text-card-foreground`}
                style={{
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Attractive Project Number Badge */}
                <div
                  className={`absolute top-6 left-6 w-12 h-12 bg-gradient-to-br ${accentColors[index]} rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 overflow-hidden`}
                >
                  {/* subtle highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

                  {/* Project number */}
                  <span className="text-xl font-bold text-white relative z-10">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  {/* decorative top corner glow */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full"></div>
                </div>

                {/* Code Icon with Glass Effect - Moved to Right */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${accentColors[index]}/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}
                >
                  <Code2
                    className={`w-6 h-6 ${index === 0 ? "text-pink-600" : index === 1 ? "text-blue-600" : index === 2 ? "text-purple-600" : "text-green-600"}`}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 pt-20 pb-4 px-6">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 pt-0 space-y-6 pb-8">
                  {/* Project Description */}
                  <p className="text-slate-700 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Skills Tags with Bubble Theme */}
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 bg-gradient-to-r ${accentColors[index]}/10 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default  overflow-hidden`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {/* GitHub Button */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 h-12 flex items-center justify-center bg-gradient-to-r ${accentColors[index]}/10 backdrop-blur-sm hover:bg-slate-900 hover:text-white text-slate-800  transition-all duration-300 font-medium rounded-md`}
                      style={{ backdropFilter: "blur(10px)" }}
                    >
                      <Github className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                      GitHub
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 h-12 z-10 flex items-center justify-center relative bg-gradient-to-r ${accentColors[index]}/10 hover:backdrop-blur-xl hover:opacity-100 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-md overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <ExternalLink className="w-5 h-5 mr-2 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Glass Decorative Elements with Bubble Colors */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bubbleThemes[index]} pointer-events-none`}
                ></div>
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${accentColors[index]}/20 rounded-full group-hover:scale-110 transition-transform duration-700 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfProjects;
