import React from 'react';
import { Github, Linkedin, Mail, FileText, MapPin, Calendar, Car, Code, Briefcase, GraduationCap, Layout, Database, TrendingUp, Users, Settings, Search } from 'lucide-react';

// --- COMPOSANT : CARTE PROJET ---
const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-surface border border-muted p-6 rounded-3xl hover:border-primary-500/50 transition-all group">
    <div className="h-48 bg-slate-800 rounded-2xl mb-6 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-slate-500">Aperçu Projet</div>
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/10">{tag}</span>
      ))}
    </div>
    <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-blue-400 transition">VOIR LES DÉTAILS</button>
  </div>
);

// --- COMPOSANT : TIMELINE (EXPÉRIENCE) ---
const TimelineItem = ({ title, place, date, desc, type }) => (
  <div className="relative pl-8 pb-12 border-l border-blue-500/30 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#030712] border-2 border-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">{date}</span>
    <h4 className="text-xl font-bold text-white">{title}</h4>
    <p className="text-blue-400 text-sm font-medium mb-3">{place}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black text-white italic">M<span className="text-blue-500">F</span></div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#hero" className="hover:text-blue-400 transition">Présentation</a>
            <a href="#experience" className="hover:text-blue-400 transition">Expérience</a>
            <a href="#skills" className="hover:text-blue-400 transition">Compétences</a>
            <a href="#projets" className="hover:text-blue-400 transition">Projets</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* SECTION HERO */}
      <section id="hero" className="pt-40 pb-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">Bonjour — C'est ...</h2>
          <h1 className="text-5xl md:text-6xl font-black text-blue-500 mb-4 uppercase leading-none">Mialisoa<br/><span className="text-white">RAZAFINIRINA</span></h1>
          <p className="text-lg text-slate-400 mb-6 max-w-lg leading-relaxed">Actuellement en 3ᵉ année de B.U.T. Informatique (IUT de Blagnac / Université Toulouse Jean Jaurès). Recherche un stage de 14 semaines du <span className="text-blue-400">16 mars au 26 juin 2026</span>.</p>
          <p className="text-sm text-slate-500 mb-6">Contact : +33 6 64 33 13 67 • 25 Rue de la République, 31700 Beauzelle • <span className="text-white font-bold">mialisoarazaf@gmail.com</span></p>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-blue-500 rounded-full font-bold flex items-center gap-2 transition group">
              <FileText size={18} className="group-hover:text-blue-400" /> Télécharger le CV
            </button>
            <div className="flex gap-6 ml-4 text-slate-500">
               <Linkedin className="hover:text-blue-400 cursor-pointer transition" />
               <Github className="hover:text-white cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
          <div className="w-72 h-96 bg-slate-800 rounded-[32px] rotate-3 overflow-hidden border-2 border-white/10 group-hover:rotate-0 transition-all duration-500">
             <div className="w-full h-full bg-slate-700 flex flex-col items-center justify-center text-center p-6 text-slate-300">
               <div className="text-4xl italic text-slate-500 mb-2">PHOTO</div>
               <div className="text-sm">Mialisoa Patricia R.</div>
               <div className="text-xs text-slate-400">Recherche de stage • BUT Informatique</div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-4 italic uppercase">
              <Briefcase className="text-blue-500" /> Professionnelle
            </h3>
            <TimelineItem 
              date="24 Mars - 16 Mai 2025"
              title="Stage"
              place="Banque centrale de Madagascar"
              desc="Configuration d'équipements réseau (switchs Cisco C1300), mise en réseau et dépannage, réinstallation de postes de travail."
            />
            <TimelineItem 
              date="2025"
              title="Jobs étudiants"
              place="Toulouse"
              desc={<> <span>Préparatrice de commande</span><br/><span>Babysitting</span> </>}
            />
          </div>
          <div>
            <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-4 italic uppercase">
              <GraduationCap className="text-blue-500" /> Académique
            </h3>
            <TimelineItem 
              date="2023 - 2026"
              title="BUT Informatique"
              place="IUT de Blagnac — Université Toulouse Jean Jaurès"
              desc="Parcours informatique, projets universitaires et développement full‑stack."
            />
            <TimelineItem 
              date="2022 - 2023"
              title="Baccalauréat général — Mention Bien"
              place="Lycée BIRD, Madagascar"
              desc="Spécialités Mathématiques et Physique‑Chimie — Option Maths Expertes."
            />
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section id="skills" className="bg-[#0a0f1d] py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-black text-white mb-20 uppercase italic">Mes Compétences</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Layout, label: "Réaliser", sub: "Dév & Conception" },
              { icon: TrendingUp, label: "Optimiser", sub: "Performance" },
              { icon: Settings, label: "Administrer", sub: "Infrastructure" },
              { icon: Database, label: "Gérer", sub: "Données" },
              { icon: Users, label: "Collaborer", sub: "Travail d'équipe" },
              { icon: Search, label: "Analyser", sub: "Data Science" },
            ].map((skill, i) => (
              <div key={i} className="p-10 bg-white/[0.03] border border-white/5 rounded-[40px] hover:bg-blue-600 transition-all group cursor-default">
                <skill.icon size={40} className="mx-auto mb-6 text-blue-500 group-hover:text-white transition" />
                <h4 className="text-xl font-bold text-white mb-2 uppercase">{skill.label}</h4>
                <p className="text-slate-500 text-sm group-hover:text-blue-100">{skill.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-32">
        <h3 className="text-5xl font-black text-white mb-20 uppercase italic text-center">Mes Projets</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard 
            title="Site e‑commerce (4 pers. — 2 mois)" 
            description="Développement en HTML/CSS/PHP, gestion MySQL via phpMyAdmin, méthode agile, gestion de code sur GitHub." 
            tags={["HTML", "CSS", "PHP", "MySQL"]} 
          />
          <ProjectCard 
            title="Application bancaire (4 pers. — 2 mois)" 
            description="Développement Java avec base de données Oracle, travail en équipe selon Scrum." 
            tags={["Java", "Oracle", "Scrum"]} 
          />
          <ProjectCard 
            title="Application gestion de scolarité (solo — 3 sem.)" 
            description="Plateforme web créée avec Symfony, CRUD complet, Bootstrap et Twig, gestion BDD complexe." 
            tags={["Symfony", "Twig", "Bootstrap"]} 
          />
          <ProjectCard 
            title="Application web de restauration (solo — 2 sem.)" 
            description="Développement front avec Angular, implémentation complète des fonctionnalités CRUD." 
            tags={["Angular", "TypeScript", "CRUD"]} 
          />
          <ProjectCard
            title="Conception app VR - IoT (4 pers. — 3 mois)"
            description="Développement C# sous Unity avec intégration du protocole MQTT. Chargement asynchrone et dynamique de modèles 3D (.glb) depuis le web piloté via MQTT."
            tags={["Unity", "C#", "MQTT", "3D", "glb"]}
          />
          <ProjectCard
            title="Bomberman 3D (Godot) — individuel"
            description="Clone Bomberman en 3D développé avec Godot, gameplay complet et IA basique. Projet individuel."
            tags={["Godot", "GDScript", "3D"]}
          />
          <ProjectCard
            title="Akari / Light Up — JavaFX (individuel)"
            description="Jeu Akari (Light Up) implémenté en Java avec interface JavaFX, génération de puzzles et sauvegarde de parties."
            tags={["Java", "JavaFX", "Jeu"]}
          />
          <ProjectCard
            title="Application de gestion (Django) — binôme"
            description="Application web Django pour la gestion d'applications : CRUD complet et interface d'administration."
            tags={["Django", "Python", "CRUD"]}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Mialisoa Patricia RAZAFINIRINA © 2026</p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-6">
            <Mail className="hover:text-blue-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
            <Github className="hover:text-white cursor-pointer" />
          </div>
          <div className="text-slate-500 text-sm">+33 6 64 33 13 67 • mialisoarazaf@gmail.com • linkedin.com/in/mialisoa</div>
        </div>
      </footer>
    </div>
  );
}