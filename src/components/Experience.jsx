import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, place, date, desc }) => (
  <div style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: '3rem', borderLeft: '1.5px solid rgba(217,96,59,0.25)' }}>
    <div style={{
      position: 'absolute', left: -9, top: 4,
      width: 16, height: 16,
      background: '#F7F2EC',
      border: '2.5px solid #D9603B',
      borderRadius: '50%',
      boxShadow: '0 0 0 4px rgba(217,96,59,0.12)',
    }} />
    <span style={{
      display: 'inline-block',
      background: '#D9603B',
      color: '#fff',
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '0.25rem 0.85rem',
      borderRadius: 999,
      marginBottom: '0.75rem',
      fontFamily: 'DM Sans, sans-serif',
    }}>{date}</span>
    <h4 style={{ fontSize: '1.15rem', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#2a1f1a', marginBottom: '0.25rem' }}>{title}</h4>
    <p style={{ color: '#D9603B', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.6rem', fontFamily: 'DM Sans, sans-serif' }}>{place}</p>
    <div style={{ color: '#7a6a60', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>{desc}</div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#EFE9E0', borderTop: '1px solid rgba(42,31,26,0.06)', borderBottom: '1px solid rgba(42,31,26,0.06)' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>

          {/* PROFESSIONNEL */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3.5rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(217,96,59,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={20} color="#D9603B" />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, fontStyle: 'italic', color: '#2a1f1a' }}>Professionnelle</h3>
            </div>
            <TimelineItem
              date="24 Mars – 16 Mai 2025"
              title="Stage Réseau Informatique"
              place={<a href="https://www.banky-foibe.mg/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(217,96,59,0.4)' }}>Banque centrale de Madagascar</a>}
              desc="Configuration d'équipements réseau (switchs Cisco C1300). Mise en réseau, dépannage et réinstallation de postes de travail."
            />
            <TimelineItem
              date="2024–2025"
              title="Jobs étudiants"
              place="Toulouse"
              desc={<><span>Préparatrice de commande (2024)</span><br /><span>Babysitting (2024–2025)</span></>}
            />
          </div>

          {/* ACADÉMIQUE */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3.5rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(217,96,59,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={20} color="#D9603B" />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, fontStyle: 'italic', color: '#2a1f1a' }}>Parcours académique</h3>
            </div>
            <TimelineItem
              date="2023–2026"
              title="BUT Informatique"
              place={<a href="https://www.iut-blagnac.fr/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(217,96,59,0.4)' }}>IUT de Blagnac — Université Toulouse Jean Jaurès</a>}
              desc="Parcours réalisation d'application : conception, développement, validation."
            />
            <TimelineItem
              date="2022–2023"
              title="Baccalauréat général — Mention Bien"
              place={<a href="https://www.lyceebird.mg/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(217,96,59,0.4)' }}>Lycée BIRD, Madagascar</a>}
              desc="Spécialités Mathématiques et Physique‑Chimie — Option Maths Expertes."
            />
          </div>

        </div>
      </div>
    </section>
  );
}