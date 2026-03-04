import React, { useState } from "react";
import { ProjectCard } from "./Cards";
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects({ filter, onClearFilter, onViewSkill }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const projectsData = [
    {
      title: "Site e‑commerce",
      githubUrl: "https://github.com/mialisoa/ecommerce",
      skillId: ["realiser","optimiser","administrer","conduire","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Site e-commerce de Bricolo SARL, une entreprise qui vend des LEGO</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Développement : PHP / MySQL</li><li>Architecture MVC</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Création d'un compte</li><li>Connexion sécurisée</li><li>Consulter, trier et rechercher des produits</li><li>Gestion de panier et commandes</li><li>Interface admin (stocks)</li></ul></>),
      tags: ["PHP","HTML","CSS","MySQL","Agile"],
      gallery: ["e-commerce.mp4","panier et commande.mp4","panier et se déconnecter.mp4","catalogue.mp4","connexion.mp4","démo-brickolo.mp4","brickolo.png"],
    },
    {
      title: "Application bancaire",
      githubUrl: "https://github.com/mialisoa/banque",
      skillId: ["realiser","optimiser","administrer","gerer","conduire","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Création d'une application bancaire complète</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Développement : Java</li><li>Gestion de la base de données : Oracle SQL</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>CRUD d'un compte</li><li>Gestion de compte bancaire : transaction, historique des opérations...</li></ul></>),
      tags: ["Java","JavaFx","SQL","Scrum"],
      gallery: ["banque.png","connexion_banque.png","client.png"],
    },
    {
      title: "Gestion de scolarité",
      githubUrl: "https://github.com/mialisoa/scolarite",
      skillId: ["realiser","optimiser"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Création d'un site web "Scolarité"</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Framework : Symfony</li><li>Utilisation de Twig pour des vues dynamiques</li><li>Bootswatch/Bootstrap</li><li>Gestion de la base de données : MySQL</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Page d'accueil</li><li>CRUD étudiant + Détail de l'étudiant</li><li>CRUD diplômes + Détail d'un diplôme</li><li>CRUD promotions + Détail d'une promotion</li></ul></>),
      tags: ["Symfony","Twig","Bootstrap","MySQL"],
      gallery: ["scolarite.png"],
    },
    {
      title: "Web de restauration",
      githubUrl: "https://github.com/mialisoa/resto",
      skillId: ["realiser","optimiser","gerer","conduire","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Création d'un site de restaurant</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Framework : Angular</li><li>Langage : TypeScript</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>CRUD menu + détail de chaque menu</li><li>CRUD plat + détail de chaque plat</li><li>Distinguer les plats actifs et inactifs</li></ul></>),
      tags: ["Angular","TypeScript","JavaScript"],
      gallery: ["resto.png","menu_resto.png","description_menu.png","nouveau_menu.png","nouveau_plat.png"],
    },
    {
      title: "App VR - IoT",
      githubUrl: "https://github.com/mialisoa/iot",
      skillId: ["realiser","optimiser","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Ajout de capteurs et objets 3D dans un bâtiment de recherche modélisé en 3D</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Modélisation 3D : Unity</li><li>Langage : C#</li><li>Communication avec un broker MQTT</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Ajouter des capteurs dynamiquement via MQTT</li><li>Ajouter des objets 3D via JSON sur MQTT</li><li>Manipuler les objets 3D</li><li>Tutoriel intégré pour les débutants</li></ul></>),
      tags: ["Unity","C#","MQTT","3D"],
      gallery: ["IoT.mp4","IotTuto.mp4"],
    },
    {
      title: "Bomberman 3D",
      githubUrl: "https://github.com/mialisoa/bomberman",
      skillId: ["realiser","optimiser","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Création du jeu Bomberman en 3D</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Moteur : Godot</li><li>Langage : GDScript</li></ul></>),
      tags: ["Godot","GDScript","3D"],
      gallery: ["bomberman.mp4"],
    },
    {
      title: "Akari JavaFX",
      githubUrl: "https://github.com/mialisoa/akari",
      skillId: ["realiser","Conduire","Collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Jeu de puzzle Akari en JavaFX</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>JavaFX</li><li>Architecture MVC</li></ul></>),
      tags: ["Java","JavaFX","MVC"],
      gallery: ["akari.jpg"],
    },
    {
      title: "Gestion d'emploi du temps",
      githubUrl: "https://github.com/mialisoa/emploi-du-temps",
      skillId: ["realiser","optimiser","gerer","conduire","collaborer"],
      longDescription: (<><p style={{ marginBottom: '0.75rem' }}>Outil de gestion d'emploi du temps</p><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Caractéristiques techniques :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Framework : Django, Vue</li><li>Langage : Python</li></ul><p style={{ fontWeight: 700, color: '#D9603B', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Fonctionnalités :</p><ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}><li>Gestion des étudiants (CRUD)</li><li>Gestion des salles, horaires, disponibilité des professeurs</li><li>Génération automatique d'emploi du temps</li></ul></>),
      tags: ["Django","Python","CRUD"],
      gallery: ["edt.png"],
    },
  ];

  const nextMedia = () => setActiveMedia(prev => (prev + 1) % selectedProject.gallery.length);
  const prevMedia = () => setActiveMedia(prev => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  const displayedProjects = filter ? projectsData.filter(p => filter.includes(p.title)) : projectsData;

  return (
    <section id="projets" style={{ background: '#EFE9E0', borderTop: '1px solid rgba(42,31,26,0.06)', position: 'relative', overflow: 'hidden' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <div style={{ position: 'absolute', left: -60, bottom: 40, fontSize: '18rem', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: 'rgba(217,96,59,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>P</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a' }}>Mes Projets</h3>
          </div>
          {filter && (
            <button onClick={onClearFilter} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'transparent', border: '1.5px solid rgba(217,96,59,0.4)', color: '#D9603B', padding: '0.5rem 1.2rem', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em' }}>
              <X size={12} /> Tous les projets
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {displayedProjects.map((project, index) => (
            <div key={index} onClick={() => { setSelectedProject(project); setActiveMedia(0); }}>
              <ProjectCard
                title={project.title}
                description="Découvrez les détails de ce projet et ses fonctionnalités techniques."
                tags={project.tags}
                media={project.gallery[0]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'rgba(42,31,26,0.6)', backdropFilter: 'blur(12px)' }}>
          <div style={{ background: '#FAF6F1', border: '1px solid rgba(42,31,26,0.1)', borderRadius: 40, maxWidth: 1000, width: '100%', maxHeight: '90vh', overflow: 'hidden', boxShadow: '0 60px 120px rgba(42,31,26,0.25)', display: 'flex', flexDirection: 'row', position: 'relative' }}>

            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10, background: 'rgba(42,31,26,0.08)', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#7a6a60', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#D9603B'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(42,31,26,0.08)'}
            >
              <X size={18} />
            </button>

            {/* Media 60% */}
            <div style={{ width: '60%', background: '#2a1f1a', display: 'flex', flexDirection: 'column', position: 'relative' }} className="group">
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: 0 }}>
                {selectedProject.gallery[activeMedia].toLowerCase().endsWith('.mp4')
                  ? <video key={selectedProject.gallery[activeMedia]} src={selectedProject.gallery[activeMedia]} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  : <img src={selectedProject.gallery[activeMedia]} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                }
              </div>

              {selectedProject.gallery.length > 1 && (
                <>
                  <button onClick={prevMedia} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#D9603B'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}><ChevronLeft size={20} /></button>
                  <button onClick={nextMedia} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#D9603B'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}><ChevronRight size={20} /></button>
                </>
              )}

              <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', display: 'flex', gap: '0.5rem', justifyContent: 'center', overflowX: 'auto' }}>
                {selectedProject.gallery.map((url, idx) => (
                  <div key={idx} onClick={() => setActiveMedia(idx)} style={{ width: 56, height: 36, borderRadius: 8, overflow: 'hidden', border: `2px solid ${activeMedia === idx ? '#D9603B' : 'transparent'}`, opacity: activeMedia === idx ? 1 : 0.45, cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s' }}>
                    {url.toLowerCase().endsWith('.mp4')
                      ? <div style={{ width: '100%', height: '100%', background: '#4a3020', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>VIDÉO</div>
                      : <img src={url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Info 40% */}
            <div style={{ width: '40%', padding: '2.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a', lineHeight: 1.1 }}>{selectedProject.title}</h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.6rem', background: 'rgba(217,96,59,0.1)', color: '#D9603B', padding: '0.22rem 0.75rem', borderRadius: 999, border: '1px solid rgba(217,96,59,0.2)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans, sans-serif' }}>{tag}</span>
                ))}
              </div>

              <div style={{ color: '#5a4a40', fontSize: '0.88rem', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif' }}>{selectedProject.longDescription}</div>

              <div style={{ borderTop: '1px solid rgba(42,31,26,0.08)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#b09080', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}>Compétences mobilisées :</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selectedProject.skillId.map(id => (
                    <button key={id} onClick={() => { onViewSkill(id); setSelectedProject(null); }}
                      style={{ padding: '0.3rem 0.75rem', background: 'rgba(42,31,26,0.05)', border: '1px solid rgba(42,31,26,0.12)', color: '#5a4a40', borderRadius: 8, fontSize: '0.65rem', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#D9603B'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#D9603B'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(42,31,26,0.05)'; e.currentTarget.style.color = '#5a4a40'; e.currentTarget.style.borderColor = 'rgba(42,31,26,0.12)'; }}
                    >{id}</button>
                  ))}
                </div>
              </div>

              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.9rem', background: '#2a1f1a', color: '#F7F2EC', border: 'none', borderRadius: 14, fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#D9603B'} onMouseLeave={e => e.currentTarget.style.background = '#2a1f1a'}>
                <Github size={16} /> Code Source
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}