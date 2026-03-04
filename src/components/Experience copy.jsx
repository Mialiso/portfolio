import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem } from './Cards';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-4 italic uppercase text-left">
            <Briefcase className="text-blue-500" /> Professionnelle
          </h3>
          <TimelineItem 
            date="24 Mars - 16 Mai 2025"
            title="Stage Réseau Informatique"
            place={
              <a href="https://www.banky-foibe.mg/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline decoration-blue-500/30">
                Banque centrale de Madagascar
              </a>
            }
            desc="Configuration d'équipements réseau (switchs Cisco C1300). Mise en réseau, dépannage et réinstallation de postes de travail."
          />
          <TimelineItem 
            date="2024-2025"
            title="Jobs étudiants"
            place="Toulouse"
            desc={<><span>Préparatrice de commande (2024)</span><br/><span>Babysitting (2024-2025)</span></>}
          />
        </div>
        <div>
          <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-4 italic uppercase text-left">
            <GraduationCap className="text-blue-500" /> Parcours académique
          </h3>
          <TimelineItem 
            date="2023 - 2026"
            title="BUT Informatique"
            place= {
              <a href="https://www.iut-blagnac.fr/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline decoration-blue-500/30">
                IUT de Blagnac — Université Toulouse Jean Jaurès
              </a>
            }
            desc="Parcours réalisation d'application : conception, développement, validation."
          />
          <TimelineItem 
            date="2022 - 2023"
            title="Baccalauréat général — Mention Bien"
            place={
              <a href="https://www.lyceebird.mg/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline decoration-blue-500/30">
                Lycée BIRD, Madagascar
              </a>
            }
            desc="Spécialités Mathématiques et Physique‑Chimie — Option Maths Expertes."
          />
        </div>
      </div>
    </section>
  );
}