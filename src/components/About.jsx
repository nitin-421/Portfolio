const About = () => {
  return (
    <section id="About" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a full-stack developer and undergraduate student at the Indian Institute of Technology Kharagpur, specializing in building high-performance, user-centric digital solutions. My work is driven by a strong foundation in modern web technologies, a commitment to clean code, and a continuous pursuit of technical excellence.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge with 
                the developer community. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
              <p>
                My goal is to build applications that not only function flawlessly 
                but also provide exceptional user experiences. I'm always excited 
                to take on new challenges and collaborate with like-minded individuals.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://i.postimg.cc/cC0PwNxs/image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;