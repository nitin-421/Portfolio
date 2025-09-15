import React from "react";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">Portfolio</div>

          <div className="hidden md:flex space-x-8">
            {" "}
            {[
              "Home",
              "Skills",
              "Projects",
              "About",
              "Education",
              "Contact",
            ].map((item) =>(
              <button
                onClick={() => scrollToSection(item)}
                key={item}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <ImCross /> : <TiThMenu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {[
              "Home",
              "Skills",
              "Projects",
              "About",
              "Education",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
