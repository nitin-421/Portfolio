import { FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane 
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";



const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPaperPlane  />,
      label: "Email",
      value: "myselfmaurya@outlook.com",
      href: "mailto:myselfmaurya@outlook.com",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaPhoneAlt  />,
      label: "Phone",
      value: "+91 8470827196",
      href: "tel:+918470827196",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Varanasi, Uttar Pradesh, India",
      href: "https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3207626,82.9911089,12z/data=!3m1!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nitin-maurya-65b602255/",
      color: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: <FaInstagram  />,
      label: "Instagram ",
      href: "https://www.instagram.com/_nitin421/",
      color: "bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700"
    },
    {
      icon: <FaGithub  />,
      label: "Github ",
      href: "https://github.com/nitin-421",
      color: "bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="Contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-purple-100 opacity-70"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Ready to bring your ideas to life? Let's start a conversation and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div 
            className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <FiSend />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Send me a message
                </h3>
              </div> 
              <form className="space-y-6"  action="https://formspree.io/f/meogyboq" method="POST" encType="multipart/form-data" >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input type="text" name='name' required
                      placeholder="Your Name"
                      className="block w-full p-4 placeholder:p-5 placeholder:text-sm h-12 bg-slate-100 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email" name="email" required
                      placeholder="Your Email"
                      className="block w-full p-4 placeholder:p-5 placeholder:text-sm h-12 bg-slate-100 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                    />
                  </div>
                
                <input
                  placeholder="Subject" type="text" name="subject" required
                  className="placeholder:text-sm placeholder:p-5 col-span-2 h-12 bg-slate-100 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl transition-all duration-300"
                />
                
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <textarea name="message" required
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className="placeholder:text-sm placeholder:p-5 col-span-2 bg-slate-100 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl resize-none transition-all duration-300"
                />
                
                <button
                  type="submit" 
                  className="col-span-2 flex items-center justify-center gap-6 w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <FiSend />
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
          {/* Contact Information */}
          <div>
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                    Contact Information
                </h3>
            <div className="space-y-6">
                {contactInfo.map((item, index) => (
                <div
                    key={index}
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm rounded-lg text-card-foreground"
                >
                    <div className="p-6">
                    <a
                        href={item.href}
                        className="flex items-center space-x-6 text-slate-700 hover:text-white transition-all duration-300"
                    >
                        <div
                        className={`p-4 bg-gradient-to-r ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                        <div className="text-white">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                        <div className="font-semibold text-lg text-slate-800 group-hover:text-slate-900">
                            {item.label}
                        </div>
                        <div className="text-slate-600 group-hover:text-slate-700 mt-1">
                            {item.value}
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full"></div>
                Follow me on social media
              </h4>
              
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-2xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl`}
                    title={social.label}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
                <p className="text-slate-600 text-center leading-relaxed">
                  <span className="font-semibold text-slate-800">Let's collaborate!</span> I'm always excited to work on new projects and meet creative minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;