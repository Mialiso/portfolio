import React, { useState } from "react";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Mail, Linkedin, Github } from "lucide-react";

export default function App() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [skillToOpen, setSkillToOpen] = useState(null);

  const handleFilterProjects = (projectTitles) => {
    setActiveFilter(projectTitles);
    const section = document.getElementById("projets");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewSkill = (skillId) => {
    setSkillToOpen(skillId);
    const section = document.getElementById("skills");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-[#2a1f1a] font-sans selection:bg-[#D9603B]/30" style={{ background: "#F7F2EC" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .nav-link {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7a6a60;
          transition: color 0.2s;
          font-weight: 500;
        }
        .nav-link:hover { color: #D9603B; }
        .noise-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      {/* Subtle noise texture */}
      <div className="noise-bg" />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(247,242,236,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(42,31,26,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="font-display" style={{ fontSize: '1.3rem', color: '#2a1f1a', fontStyle: 'italic', fontWeight: 700 }}>
            M. <span style={{ color: '#D9603B' }}>Portfolio</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {[['#hero','Présentation'],['#experience','Expérience'],['#skills','Compétences'],['#projets','Projets'],['#contact','Contact']].map(([href, label]) => (
              <a key={href} href={href} className="nav-link hidden md:block">{label}</a>
            ))}
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

      <footer style={{ padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(42,31,26,0.08)', background: '#EFE9E0' }}>
        <p className="font-display" style={{ color: '#b0a090', fontSize: '0.7rem', fontStyle: 'italic', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Mialisoa Patricia RAZAFINIRINA © 2026
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[Mail, Linkedin, Github].map((Icon, i) => (
              <Icon key={i} size={20} style={{ color: '#a09080', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D9603B'}
                onMouseLeave={e => e.currentTarget.style.color = '#a09080'} />
            ))}
          </div>
          <p style={{ color: '#c0b0a0', fontSize: '0.75rem', fontFamily: 'monospace' }}>
            +33 6 64 33 13 67 · mialisoarazaf@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}