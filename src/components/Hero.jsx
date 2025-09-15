import React from "react";
import { BsCloudDownload } from "react-icons/bs";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1yKt4nQPkN70POLRNzXUq_Jg56TcazqPQ/view?usp=drive_link";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nitin-Maurya-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nitin Maurya
            </span>
          </h1>
          <p className="md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate developer crafting beautiful digital experiences with
            modern technologies.
            <br />I turn ideas into reality through clean code and innovative
            design.
          </p>
          <button
            onClick={handleDownloadResume}
            className="flex items-center mx-auto text-center bg-gradient-to-r from-blue-600 gap-3 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
          >
            <BsCloudDownload />
            Get Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
