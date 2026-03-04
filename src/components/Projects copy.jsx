import React, { useState } from "react";
import { ProjectCard } from "./Cards";
import {
  X,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Projects({ filter, onClearFilter, onViewSkill }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const projectsData = [
    {
      title: "Site e‑commerce",
      githubUrl: "https://github.com/mialisoa/ecommerce",
      skillId: [
        "realiser",
        "optimiser",
        "administrer",
        "conduire",
        "collaborer",
      ],
      longDescription: (
        <>
          <p className="mb-4">
            Site e-commerce de Bricolo SARL, une entreprise qui vend des LEGO
          </p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Développement : PHP / MySQL</li>
            <li>Architecture MVC</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Création d'un compte</li>
            <li>Connexion securisée</li>
            <li>Consulter, trier et rechercher des produits</li>
            <li>Gestion de panier et commandes</li>
            <li>Interface admin (stocks)</li>
          </ul>
        </>
      ),
      tags: ["PHP", "HTML", "CSS", "MySQL", "Agile"],
      gallery: [
        "/e-commerce.mp4",
        "panier et commande.mp4",
        "panier et se déconnecter.mp4",
        "/catalogue.mp4",
        "/connexion.mp4",
        "/démo-brickolo.mp4",
        "/brickolo.png",
      ],
    },
    {
      title: "Application bancaire",
      githubUrl: "https://github.com/mialisoa/banque",
      skillId: [
        "realiser",
        "optimiser",
        "administrer",
        "gerer",
        "conduire",
        "collaborer",
      ],
      longDescription: (
        <>
          <p className="mb-4">
            C'est un projet de création d'une applicatin bancaire
          </p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Développement : Java</li>
            <li>Gestion de la base de données : Oracle SQL</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>CRUD d'un compte</li>
            <li>
              Gestion de compte bancaire : transaction, historique des
              opérations,...
            </li>
          </ul>
        </>
      ),
      tags: ["Java", "JavaFx", "SQL", "Scrum"],
      gallery: ["/banque.png", "/connexion_banque.png", "/client.png"],
    },
    {
      title: "Gestion de scolarité",
      githubUrl: "https://github.com/mialisoa/scolarite",
      skillId: ["realiser", "optimiser"],
      longDescription: (
        <>
          <p className="mb-4">Création d'un site web "Scolarité"</p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Framework : symfony</li>
            <li>Utilisation de Twig pour des vues dynamiques</li>
            <li>Bootswatch/Bootstrap</li>
            <li>Gestion de la base de données : MySQL</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Page d'acceuil</li>
            <li>CRUD étudiant + Détail de l'etudiant</li>
            <li>CRUD diplomes + Détail d'un diplomes</li>
            <li>CRUD promotions + Détail d'une promotion</li>
          </ul>
        </>
      ),
      tags: ["Symfony", "Twig", "Bootstrap", "MySQL"],
      gallery: ["/scolarite.png"],
    },
    {
      title: "Web de restauration",
      githubUrl: "https://github.com/mialisoa/resto",
      skillId: ["realiser", "optimiser", "gerer", "conduire", "collaborer"],
      longDescription: (
        <>
          <p className="mb-4">Création d'un site de restaurant</p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Framework : Angular</li>
            <li>Langage : TypeScript</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>CRUD menu + détail de chaque menu</li>
            <li>CRUD plat + détail de chaque plat</li>
            <li>Distinguer les plats actifs et inactifs</li>
          </ul>
        </>
      ),
      tags: ["Angular", "TypeScript", "javascript"],
      gallery: [
        "/resto.png",
        "/menu_resto.png",
        "/description_menu.png",
        "/nouveau_menu.png",
        "/nouveau_plat.png",
      ],
    },
    {
      title: "App VR - IoT",
      githubUrl: "https://github.com/mialisoa/iot",
      skillId: ["realiser", "optimiser", "collaborer"],
      longDescription: (
        <>
          <p className="mb-4">
            Ajout de capteur et objet 3D dans un batiment de recherche modéliser
            en 3D
          </p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Modélisation 3D : Unity </li>
            <li>Langage : C# </li>
            <li>
              Communication avec un broker MQTT pour la récolte des données de
              capteurs et les informations de l'objet 3D
            </li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Ajouter des capteurs dynamiquement via MQTT</li>
            <li>
              Ajouter des objets 3D en pbliant les caractéristiques de l'objets
              sous format json sur MQTT
            </li>
            <li>Manipuler (saisir et déplacer) les objets 3D</li>
            <li>
              Réalisation d'un tuto intégré dans l'application pour les
              débutants
            </li>
          </ul>
        </>
      ),
      tags: ["Unity", "C#", "MQTT", "3D"],
      gallery: ["/IoT.mp4", "/IotTuto.mp4"],
    },
    {
      title: "Bomberman 3D",
      githubUrl: "https://github.com/mialisoa/bomberman",
      skillId: ["realiser", "optimiser", "collaborer"],
      longDescription: (
        <>
          <p className="mb-4">Création du jeu bomberman en 3D</p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Modélisation 3D : Godot </li>
            <li>Langage : GDScript </li>
            <li>Déploiement sur itch.io</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Déplacer le player sur l'environnement de jeu</li>
            <li>Gérer le nombre de vies et nombre de bombes d'un player</li>
            <li>
              Le joueur peut tuer son ennemie ou casser un mur en explosant une
              bombe
            </li>
            <li>
              Le joueur perd une vie s'il est touché par l'explosion ou si un
              ennemie le tue
            </li>
            <li>Victoire si le joueur a éliminé tous les ennemies</li>
            <li>GameOver si le joueur a 0 vie</li>
          </ul>
          <p>Lien vers le jeu : https://mialisoa.itch.io/bomberman</p>
        </>
      ),
      tags: ["Godot", "GDScript", "3D"],
      gallery: ["/bomberman.mp4"],
    },
    {
      title: "Akari JavaFX", 
      githubUrl: "",
      skillId: ["realiser", "conduire", "collaborer"],
      longDescription: (
        <>
          <p className="mb-4">
            Création d'un jeu de réflexion logique, connu sur le nom 'Light Up'
          </p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Framework : JavaFX </li>
            <li>Langage : Java </li>
            <li>Architecture MVC</li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Générer plusieur grille allant de 3 à 14</li>
            <li>Creer plusieur niveau : facile, moyen, difficile</li>
            <li>
              Victoire si le joueur a éclairé toute la grille en suivant les
              règles
            </li>
          </ul>
        </>
      ),
      tags: ["Java", "JavaFX"],
      gallery: [
        "/akari.jpg",
        "/akari_facile.jpg",
        "/akari_difficile.jpg",
        "/akari_ampoule.jpg",
        "/akari_victoire.jpg",
      ],
    },
    {
      title: "Gestion d'emploi du temps",
      githubUrl: "https://github.com/mialisoa/emploi-du-temps",
      skillId: ["realiser", "optimiser", "gerer", "conduire", "collaborer"],
      longDescription: (
        <>
          <p className="mb-4">Outil de gestion d'emploi du temps</p>
          <p className="font-bold text-blue-400">
            Caractéristiques techniques :
          </p>
          <ul className="list-disc list-inside mb-4 text-slate-300">
            <li>Framework : Django, Vue </li>
            <li>Langage : Python </li>
          </ul>
          <p className="font-bold text-blue-400">Fonctionnalités :</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Gestion des étudiants (CRUD)</li>
            <li>Gestion les salles, horaires, disponibilité des professeurs</li>
            <li>
              Génération automatique d'emploi du temps en fonction des
              contraintes
            </li>
          </ul>
        </>
      ),
      tags: ["Django", "Python", "CRUD"],
      gallery: ["/edt.png"],
    },
  ];

  const nextMedia = () => {
    setActiveMedia((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevMedia = () => {
    setActiveMedia(
      (prev) =>
        (prev - 1 + selectedProject.gallery.length) %
        selectedProject.gallery.length,
    );
  };
  const displayedProjects = filter
    ? projectsData.filter((p) => filter.includes(p.title))
    : projectsData;

  return (
    <section
      id="projets"
      className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5 relative"
    >
      <h3 className="text-5xl font-black text-white mb-20 uppercase italic text-center">
        Mes Projets
      </h3>
      <button
        onClick={onClearFilter}
        className="mb-8 text-blue-400 border border-blue-400/30 px-4 py-1 rounded-full text-xs"
      >
        Afficher tous les projets
      </button>
      <div className="grid md:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedProject(project);
              setActiveMedia(0);
            }}
            className="cursor-pointer"
          >
            <ProjectCard
              title={project.title}
              // --- CORRECTION ICI ---
              description={
                typeof project.longDescription === "string"
                  ? project.longDescription.substring(0, 80) + "..."
                  : "Découvrez les détails de ce projet et ses fonctionnalités techniques."
              }
              tags={project.tags}
              media={project.gallery[0]}
            />
          </div>
        ))}
      </div>

      {/* MODALE AVEC GALERIE DÉFILANTE */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-xl bg-black/90">
          <div className="bg-[#111827] border border-white/10 rounded-[40px] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all border border-white/10"
            >
              <X size={28} />
            </button>

            {/* ZONE MÉDIA (60%) */}
            <div className="lg:w-[60%] bg-black flex flex-col relative group">
              <div className="flex-1 flex items-center justify-center bg-slate-900 overflow-hidden text-white">
                {selectedProject.gallery[activeMedia]
                  .toLowerCase()
                  .endsWith(".mp4") ? (
                  <video
                    key={selectedProject.gallery[activeMedia]}
                    src={selectedProject.gallery[activeMedia]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedProject.gallery[activeMedia]}
                    alt="preview"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {selectedProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-blue-600 transition opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={30} />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-blue-600 transition opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={30} />
                  </button>
                </>
              )}

              <div className="p-4 bg-black/40 flex gap-2 overflow-x-auto justify-center">
                {selectedProject.gallery.map((url, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveMedia(idx)}
                    className={`w-16 h-10 rounded-lg cursor-pointer overflow-hidden border-2 transition-all flex-shrink-0 ${activeMedia === idx ? "border-blue-500 scale-105" : "border-transparent opacity-40"}`}
                  >
                    {url.toLowerCase().endsWith(".mp4") ? (
                      <div className="w-full h-full bg-blue-900/50 flex items-center justify-center text-[8px] text-white">
                        VIDÉO
                      </div>
                    ) : (
                      <img src={url} className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* INFOS (40%) */}
            <div className="lg:w-[40%] p-8 md:p-12 flex flex-col bg-[#111827] overflow-y-auto">
              <h4 className="text-4xl font-black text-white mb-6 uppercase italic leading-tight">
                {selectedProject.title}
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20 font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                {selectedProject.longDescription}
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                  Compétences mobilisées :
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skillId.map((id) => (
                    <button
                      key={id}
                      onClick={() => {
                        onViewSkill(id); // Déclenche le scroll et l'ouverture dans App.js
                        setSelectedProject(null); // Ferme la modale du projet
                      }}
                      className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 text-blue-400 hover:text-white rounded-lg text-[10px] font-bold transition-all uppercase tracking-tight"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>
              <br />
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/10 transition-all">
                  <Github size={20} /> Code Source
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
