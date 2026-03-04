import React, { useState, useEffect, useMemo } from "react";
import {
  Layout, Layers, TrendingUp, Settings, Database, Users, Search,
  X, ExternalLink, Code2, Globe, Server, Laptop, Gamepad2,
} from "lucide-react";

export default function Skills({ onFilter, forceOpenId, onCloseForceOpen }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = useMemo(() => [
    {
      id: "realiser", icon: Layout, label: "Réaliser", sub: "Dév & Conception",
      description: (<><p style={{ marginBottom: '1rem' }}>Développer — concevoir, coder, tester et intégrer une solution informatique pour un client.</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Élaborer une application informatique</li><li>Faire évoluer une application informatique</li><li>Maintenir en conditions opérationnelles une application informatique</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire","Gestion de scolarité","Web de restauration","App VR - IoT","Bomberman 3D","Akari JavaFX","Gestion d'emploi du temps"],
    },
    {
      id: "optimiser", icon: TrendingUp, label: "Optimiser", sub: "Performance",
      description: (<><p style={{ marginBottom: '1rem' }}>Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources.</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Améliorer les performances des programmes dans des contextes contraints</li><li>Limiter l'impact environnemental d'une application informatique</li><li>Mettre en place des applications informatiques adaptées et efficaces</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire","Gestion de scolarité","Web de restauration","App VR - IoT","Bomberman 3D","Gestion d'emploi du temps"],
    },
    {
      id: "administrer", icon: Settings, label: "Administrer", sub: "Infrastructure",
      description: (<><p style={{ marginBottom: '1rem' }}>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Déployer une nouvelle architecture technique</li><li>Améliorer une infrastructure existante</li><li>Sécuriser des applications et des services</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire"],
    },
    {
      id: "gerer", icon: Database, label: "Gérer", sub: "Données",
      description: (<><p style={{ marginBottom: '1rem' }}>Concevoir, gérer, administrer et exploiter les données de l'entreprise pour un bon pilotage de l'activité.</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Concevoir et mettre en place une base de données</li><li>Sécuriser des données</li><li>Exploiter des données pour la prise de décisions</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire","Web de restauration","Gestion d'emploi du temps"],
    },
    {
      id: "Conduire", icon: Users, label: "Conduire", sub: "Mener un projet",
      description: (<><p style={{ marginBottom: '1rem' }}>Organiser et piloter un projet informatique avec des méthodes classiques ou agiles (Scrum).</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Lancer un nouveau projet</li><li>Piloter le maintien d'un projet en condition opérationnelle</li><li>Faire évoluer un système d'information</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire","Web de restauration","Gestion d'emploi du temps","Akari JavaFX"],
    },
    {
      id: "Collaborer", icon: Search, label: "Collaborer", sub: "Travail d'équipe",
      description: (<><p style={{ marginBottom: '1rem' }}>Acquérir les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}><li>Comprendre son rôle dans l'équipe</li><li>Organiser son travail avec celui de son équipe</li><li>Élaborer, gérer et transmettre de l'information</li></ul></>),
      linkedProjects: ["Site e‑commerce","Application bancaire","App VR - IoT","Bomberman 3D","Akari JavaFX","Gestion d'emploi du temps"],
    },
  ]);

  useEffect(() => {
    if (forceOpenId) {
      const skill = skillsData.find(s => s.id.toLowerCase() === forceOpenId.toLowerCase());
      setTimeout(() => {
        if (skill) setSelectedSkill(skill);
        onCloseForceOpen();
      }, 0);
    }
  }, [forceOpenId, onCloseForceOpen, skillsData]);

  const techStack = [
    { title: "Programmation", items: "Java, Python, TypeScript, PHP, C#, C++", icon: Code2 },
    { title: "Frameworks", items: "Symfony, Angular, Vue, Django, JavaFX, Spring", icon: Layers },
    { title: "Développement Web", items: "HTML5, CSS3, JavaScript, Twig", icon: Globe },
    { title: "Bases de données", items: "Oracle SQL, MySQL, NoSQL", icon: Server },
    { title: "Systèmes & Outils", items: "Windows, Linux, GitHub, VS Code, Framagit, Eclipse", icon: Laptop },
    { title: "Mobile & Jeux", items: "Android (Java), Godot, Unity", icon: Gamepad2 },
  ];

  return (
    <section id="skills" style={{ background: '#F7F2EC', borderTop: '1px solid rgba(42,31,26,0.06)', position: 'relative', overflow: 'hidden' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .skill-card { cursor: pointer; padding: 2.5rem; background: #fff; border: 1px solid rgba(42,31,26,0.08); border-radius: 28px; transition: all 0.25s; text-align: center; }
        .skill-card:hover { background: #D9603B; border-color: #D9603B; transform: translateY(-3px); box-shadow: 0 20px 50px rgba(217,96,59,0.2); }
        .skill-card:hover .skill-icon { color: #fff; }
        .skill-card:hover .skill-label { color: #fff; }
        .skill-card:hover .skill-sub { color: rgba(255,255,255,0.75); }
        .skill-icon { color: #D9603B; transition: color 0.25s; }
        .skill-label { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.15rem; color: #2a1f1a; margin-bottom: 0.25rem; transition: color 0.25s; }
        .skill-sub { font-size: 0.78rem; color: #a09080; transition: color 0.25s; font-family: 'DM Sans', sans-serif; }
        .tech-card { padding: 1.5rem; background: #fff; border: 1px solid rgba(42,31,26,0.08); border-radius: 20px; transition: border-color 0.2s; }
        .tech-card:hover { border-color: rgba(217,96,59,0.4); }
        .modal-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1.5rem; background: rgba(42,31,26,0.5); backdrop-filter: blur(8px); }
        .modal-box { background: #FAF6F1; border: 1px solid rgba(42,31,26,0.1); padding: 3rem; border-radius: 32px; max-width: 480px; width: 100%; box-shadow: 0 40px 100px rgba(42,31,26,0.2); position: relative; }
      `}</style>

      {/* Large decorative letter */}
      <div style={{ position: 'absolute', right: -40, top: 40, fontSize: '22rem', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: 'rgba(217,96,59,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>S</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a' }}>Compétences</h3>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '6rem' }}>
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-card" onClick={() => setSelectedSkill(skill)}>
              <skill.icon size={36} className="skill-icon" style={{ margin: '0 auto 1.25rem' }} />
              <p className="skill-label">{skill.label}</p>
              <p className="skill-sub">{skill.sub}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(42,31,26,0.1)' }} />
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, fontStyle: 'italic', color: '#2a1f1a', whiteSpace: 'nowrap' }}>Stack Technique</h4>
          <div style={{ flex: 1, height: 1, background: 'rgba(42,31,26,0.1)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {techStack.map((tech, i) => (
            <div key={i} className="tech-card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <tech.icon size={16} color="#D9603B" />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#D9603B', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'DM Sans, sans-serif' }}>{tech.title}</span>
              </div>
              <p style={{ color: '#5a4a40', fontSize: '0.85rem', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>{tech.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedSkill(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(42,31,26,0.06)', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#7a6a60', transition: 'background 0.2s' }}>
              <X size={18} />
            </button>

            <div style={{ width: 56, height: 56, borderRadius: 18, background: 'rgba(217,96,59,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <selectedSkill.icon size={28} color="#D9603B" />
            </div>

            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a', marginBottom: '0.25rem' }}>{selectedSkill.label}</h4>
            <p style={{ color: '#D9603B', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', fontFamily: 'DM Sans, sans-serif' }}>{selectedSkill.sub}</p>
            <div style={{ color: '#7a6a60', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif' }}>{selectedSkill.description}</div>

            <button
              onClick={() => { onFilter(selectedSkill.linkedProjects); setSelectedSkill(null); document.getElementById("projets").scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '1rem', background: '#D9603B', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', letterSpacing: '0.05em', fontFamily: 'DM Sans, sans-serif', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#c24f2c'}
              onMouseLeave={e => e.currentTarget.style.background = '#D9603B'}
            >
              Voir les projets liés <ExternalLink size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}