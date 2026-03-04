import React, { useState, useEffect, useMemo } from "react";
import {
  Layout,
  Layers,
  TrendingUp,
  Settings,
  Database,
  Users,
  Search,
  X,
  ExternalLink,
  Code2,
  Globe,
  Server,
  Laptop,
  Gamepad2,
  Smartphone,
} from "lucide-react";

export default function Skills({ onFilter, forceOpenId, onCloseForceOpen }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = useMemo(() => [
    {
      id: "realiser",
      icon: Layout,
      label: "Réaliser",
      sub: "Dév & Conception",
      description: (
        <>
          <p className="mb-4">
            Développer — c’est-à-dire concevoir, coder, tester et intégrer une
            solution informatique pour un client.
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Élaborer une application informatique</li>
            <li>Faire évoluer une application informatique</li>
            <li>
              Maintenir en conditions opérationnelles une application
              informatique
            </li>
          </ul>
        </>
      ),
      linkedProjects: [
        "Site e‑commerce",
        "Application bancaire",
        "Gestion de scolarité",
        "Web de restauration",
        "App VR - IoT",
        "Bomberman 3D",
        "Akari JavaFX",
        "Gestion d'emploi du temps",
      ],
    },
    {
      id: "optimiser",
      icon: TrendingUp,
      label: "Optimiser",
      sub: "Performance",
      description: (
        <>
          <p className="mb-4">
            Proposer des applications informatiques optimisées en fonction de
            critères spécifiques : temps d’exécution, précision, consommation de
            ressources..
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>
              Améliorer les performances des programmes dans des contextes
              contraints
            </li>
            <li>
              Limiter l’impact environnemental d’une application informatique
            </li>
            <li>
              Mettre en place des applications informatiques adaptées et
              efficaces
            </li>
          </ul>
        </>
      ),
      linkedProjects: [
        "Site e‑commerce",
        "Application bancaire",
        "Gestion de scolarité",
        "Web de restauration",
        "App VR - IoT",
        "Bomberman 3D",
        "Gestion d'emploi du temps",
      ],
    },
    {
      id: "administrer",
      icon: Settings,
      label: "Administrer",
      sub: "Infrastructure",
      description: (
        <>
          <p className="mb-4">
            Installer, configurer, mettre à disposition, maintenir en conditions
            opérationnelles des infrastructures, des services et des réseaux.
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Déployer une nouvelle architecture technique</li>
            <li>Améliorer une infrastructure existante</li>
            <li>Sécuriser des applications et des services</li>
          </ul>
        </>
      ),
      linkedProjects: ["Site e‑commerce", "Application bancaire"],
    },
    {
      id: "gerer",
      icon: Database,
      label: "Gérer",
      sub: "Données",
      description: (
        <>
          <p className="mb-4">
            Concevoir, gérer, administrer et exploiter les données de
            l’entreprise pour un bon pilotage de l’activité.
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Concevoir et mettre en place une base de données</li>
            <li>Sécuriser des données</li>
            <li>Exploiter des données pour la prise de décisions</li>
          </ul>
        </>
      ),
      linkedProjects: [
        "Site e‑commerce",
        "Application bancaire",
        "Web de restauration",
        "Gestion d'emploi du temps",
      ],
    },
    {
      id: "Conduire",
      icon: Users,
      label: "Conduire",
      sub: "Mener un projet",
      description: (
        <>
          <p className="mb-4">
            Organiser et piloter un projet informatique avec des méthodes
            classiques ou agiles (Scrum).
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Lancer un nouveau projet</li>
            <li>Piloter le maintien d'un projet en condition opérationnelle</li>
            <li>Faire évoluer un système d'information</li>
          </ul>
        </>
      ),
      linkedProjects: [
        "Site e‑commerce",
        "Application bancaire",
        "Web de restauration",
        "Gestion d'emploi du temps",
        "Akari JavaFX",
      ],
    },
    {
      id: "Collaborer",
      icon: Search,
      label: "Collaborer",
      sub: "Travail d'équipe",
      description: (
        <>
          <p className="mb-4">
            Acquérir les aptitudes nécessaires pour travailler efficacement dans
            une équipe informatique.
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Comprendre son rôle dans l'équipe</li>
            <li>Organiser son travail avec celui de son équipe</li>
            <li>Élaborer, gérer et transmettre de l'information</li>
          </ul>
        </>
      ),
      linkedProjects: [
        "Site e‑commerce",
        "Application bancaire",
        "App VR - IoT",
        "Bomberman 3D",
        "Akari JavaFX",
        "Gestion d'emploi du temps",
      ],
    },
  ]);
  useEffect(() => {
    if (forceOpenId) {
      const skill = skillsData.find(
        (s) => s.id.toLowerCase() === forceOpenId.toLowerCase(),
      );

      // On décale l'exécution pour éviter le conflit de rendu synchrone
      setTimeout(() => {
        if (skill) {
          setSelectedSkill(skill);
        }
        onCloseForceOpen();
      }, 0);
    }
  }, [forceOpenId, onCloseForceOpen, skillsData]);
  // Note : on ajoute les dépendances pour éviter les avertissements ESLint
  // Données de la stack technique
  const techStack = [
    {
      title: "Programmation",
      items: "Java, Python, TypeScript, PHP, C#, C++",
      icon: Code2,
    },
    {
      title: "Frameworks",
      items: "Symfony, Angular, Vue, Django, JavaFX, Spring",
      icon: Layers,
    }, // Nouvelle catégorie
    {
      title: "Développement Web",
      items: "HTML5, CSS3, JavaScript, Twig",
      icon: Globe,
    },
    {
      title: "Bases de données",
      items: "Oracle SQL, MySQL, NoSQL",
      icon: Server,
    },
    {
      title: "Systèmes & Outils",
      items: "Windows, Linux, GitHub, VS Code, Framagit, Eclipse",
      icon: Laptop,
    },
    {
      title: "Mobile & Jeux",
      items: "Android (Java), Godot, Unity",
      icon: Gamepad2,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0a0f1d] py-32 border-y border-white/5 relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-5xl font-black text-white mb-20 uppercase italic tracking-tight">
          Compétences
        </h3>

        {/* Grille Métiers */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-32">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="p-10 bg-white/[0.03] border border-white/5 rounded-[40px] hover:bg-blue-600 transition-all group cursor-pointer"
            >
              <skill.icon
                size={40}
                className="mx-auto mb-6 text-blue-500 group-hover:text-white transition"
              />
              <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {skill.label}
              </h4>
              <p className="text-slate-500 text-sm group-hover:text-blue-100">
                {skill.sub}
              </p>
            </div>
          ))}
        </div>

        {/* --- NOUVELLE PARTIE : STACK TECHNIQUE --- */}
        <div className="pt-20 border-t border-white/5">
          <h4 className="text-3xl font-black text-white mb-12 uppercase italic">
            Stack Technique
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-left hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <tech.icon size={20} className="text-blue-500" />
                  <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
                    {tech.title}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {tech.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODALE */}
      {selectedSkill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-black/60">
          <div className="bg-[#111827] border border-white/10 p-8 rounded-[32px] max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <selectedSkill.icon size={48} className="text-blue-500 mb-6" />
            <h4 className="text-3xl font-black text-white mb-2 uppercase italic leading-none">
              {selectedSkill.label}
            </h4>
            <p className="text-blue-400 font-bold mb-6 text-sm uppercase tracking-widest">
              {selectedSkill.sub}
            </p>
            <div className="text-slate-400 leading-relaxed mb-8">
              {selectedSkill.description}
            </div>

            <button
              onClick={() => {
                onFilter(selectedSkill.linkedProjects); // Utilise ton tableau linkedProjects
                setSelectedSkill(null); // Ferme la modale
                document
                  .getElementById("projets")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition shadow-lg shadow-blue-600/20"
            >
              Voir les projets liés <ExternalLink size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
