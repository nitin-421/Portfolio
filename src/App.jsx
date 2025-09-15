import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Education from "./components/Education"
import Contact from "./components/Contact"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/next"
import SelfProjects from "./components/SelfProjects"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar/>
      <main>
        <Hero/>
        <Skills/>
        {/* <Experience/> */}
        <SelfProjects/>
        <About/>
        <Education/>
        <Contact/>
        <SpeedInsights/>
        <Analytics/>
      </main>
    </div>
  )
}

export default App
