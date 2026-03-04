import React, { useState } from "react";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Mail, Linkedin, Github } from "lucide-react";

export default function App() {
  // État pour stocker les noms des projets à filtrer
  const [activeFilter, setActiveFilter] = useState(null);
  const [skillToOpen, setSkillToOpen] = useState(null);
  const handleFilterProjects = (projectTitles) => {
    setActiveFilter(projectTitles);
    // Scroll automatique vers la section projets
    const section = document.getElementById("projets");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleViewSkill = (skillId) => {
    setSkillToOpen(skillId);
    const section = document.getElementById("skills");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center font-black italic">
          <div className="text-2xl text-white">
            M. <span className="text-blue-500">Portfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em]">
            <a href="#hero" className="hover:text-blue-400">
              Présentation
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Expérience
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Compétences
            </a>
            <a href="#projets" className="hover:text-blue-400">
              Projets
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Presentation />
        <Experience />
        <Skills
          onFilter={handleFilterProjects}
          forceOpenId={skillToOpen}
          onCloseForceOpen={() => setSkillToOpen(null)}
        />
        <Projects
          filter={activeFilter}
          onClearFilter={() => setActiveFilter(null)}
          onViewSkill={handleViewSkill}
        />
        <Contact />
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-[#010309]">
        <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] mb-8">
          Mialisoa Patricia RAZAFINIRINA © 2026
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-8">
            <Mail className="hover:text-blue-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
            <Github className="hover:text-white cursor-pointer" />
          </div>
          <p className="text-slate-600 text-xs font-mono">
            +33 6 64 33 13 67 • mialisoarazaf@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
