import React from 'react';
import { GraduationCap, Target, Briefcase, Database, ArrowRight } from 'lucide-react';

export default function PPP() {
  return (
    <section id="ppp" style={{ background: '#F7F2EC', borderTop: '1px solid rgba(42,31,26,0.06)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .ppp-card {
          background: #fff;
          border: 1px solid rgba(42,31,26,0.08);
          border-radius: 24px;
          padding: 2rem;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ppp-card:hover {
          border-color: rgba(217,96,59,0.35);
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(42,31,26,0.08);
        }
        .ppp-tag {
          display: inline-block;
          background: rgba(217,96,59,0.1);
          color: #D9603B;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(217,96,59,0.2);
        }
        .timeline-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #D9603B;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .career-arrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #b09080;
          font-size: 0.8rem;
          font-family: 'DM Sans', Arial, sans-serif;
        }
      `}</style>

      {/* Déco lettre */}
      <div style={{ position: 'absolute', right: -30, top: 20, fontSize: '20rem', fontFamily: 'Playfair Display, serif', fontWeight: 900, color: 'rgba(217,96,59,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>P</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D9603B', fontWeight: 600, fontFamily: 'DM Sans, Arial, sans-serif', marginBottom: '0.5rem' }}>Mes ambitions</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a', lineHeight: 1 }}>Projet Professionnel</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

          {/* LEFT — Master MIAGE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Master visé */}
            <div className="ppp-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(217,96,59,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={20} color="#D9603B" />
                </div>
                <div>
                  <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#b09080', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Formation visée</p>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2a1f1a' }}>Master Informatique et Master MIAGE </h4>
                </div>
              </div>

              {/* <p style={{ color: '#7a6a60', fontSize: '0.88rem', lineHeight: 1.75, fontFamily: 'DM Sans, Arial, sans-serif', marginBottom: '1.25rem' }}>
                La <strong style={{ color: '#2a1f1a' }}>MIAGE</strong> (Méthodes Informatiques Appliquées à la Gestion des Entreprises) est la formation idéale pour allier compétences techniques et vision métier — en phase avec mes ambitions d'architecte logiciel et de gestion de projet.
              </p> */}

              {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Génie logiciel', 'Gestion de projet', 'Base de données'].map(tag => (
                  <span key={tag} className="ppp-tag">{tag}</span>
                ))}
              </div> */}
            </div>

            {/* Alternance */}
            <div className="ppp-card" style={{ borderLeft: '3px solid #D9603B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Briefcase size={18} color="#D9603B" />
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#D9603B', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Recherche d'alternance</p>
              </div>
              <p style={{ color: '#2a1f1a', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'DM Sans, Arial, sans-serif', marginBottom: '0.4rem' }}>
                Disponible dès septembre 2026
              </p>
              <p style={{ color: '#7a6a60', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'DM Sans, Arial, sans-serif' }}>
                Je suis à la recherche d'un contrat en alternance dans le cadre de mon Master, avec l'objectif d'acquérir une expérience professionnelle concrète en parallèle de ma formation académique.</p>
            </div>

          </div>

          {/* RIGHT — Projet professionnel long terme */}
          <div className="ppp-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(217,96,59,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target size={20} color="#D9603B" />
              </div>
              <div>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#b09080', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Projet à long terme</p>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2a1f1a' }}>Ma trajectoire</h4>
              </div>
            </div>

            {/* Timeline carrière */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Étape 1 */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div className="timeline-dot" />
                  <div style={{ width: 1, flex: 1, background: 'rgba(217,96,59,0.2)', minHeight: 40 }} />
                </div>
                <div style={{ paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#D9603B', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Court terme · 2026–2028</span>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: '#2a1f1a', margin: '0.2rem 0' }}>Architecte Logiciel</p>
                  <p style={{ color: '#7a6a60', fontSize: '0.82rem', lineHeight: 1.65, fontFamily: 'DM Sans, Arial, sans-serif' }}>Concevoir et structurer des systèmes applicatifs robustes, évolutifs et maintenables pour des entreprises.</p>
                </div>
              </div>

              {/* Étape 2 */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div className="timeline-dot" style={{ background: '#2a1f1a' }} />
                  <div style={{ width: 1, flex: 1, background: 'rgba(42,31,26,0.15)', minHeight: 40 }} />
                </div>
                <div style={{ paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#7a6a60', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Moyen terme · 2028–2032</span>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: '#2a1f1a', margin: '0.2rem 0' }}>Chef de Projet IT</p>
                  <p style={{ color: '#7a6a60', fontSize: '0.82rem', lineHeight: 1.65, fontFamily: 'DM Sans, Arial, sans-serif' }}>Piloter des équipes et des projets de transformation digitale, en assurant la livraison dans les délais et les budgets.</p>
                </div>
              </div>

              {/* Étape 3 */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="timeline-dot" style={{ background: '#b09080' }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#b09080', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans, Arial, sans-serif' }}>Long terme · 2032+</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: '#2a1f1a' }}>Administratrice de Base de Données</p>
                    <Database size={16} color="#D9603B" />
                  </div>
                  <p style={{ color: '#7a6a60', fontSize: '0.82rem', lineHeight: 1.65, fontFamily: 'DM Sans, Arial, sans-serif' }}>Garantir la performance, la sécurité et la disponibilité des données stratégiques de l'entreprise.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
