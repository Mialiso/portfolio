import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Presentation() {
  return (
    <section id="hero" style={{ minHeight: '100vh', paddingTop: '72px', background: '#F7F2EC', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-name {
          line-height: 0.88;
          margin-bottom: 1.75rem;
        }
        .hero-name .first {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 900;
          font-style: italic;
          font-size: clamp(4rem, 9vw, 8.5rem);
          color: #D9603B;
          display: block;
          letter-spacing: -0.03em;
          line-height: 0.9;
        }
        .hero-name .last {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 700;
          font-style: normal;
          font-size: clamp(1.6rem, 3.8vw, 3.5rem);
          color: #2a1f1a;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          margin-top: 0.25em;
          line-height: 1;
        }
        .hero-greeting {
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #b09080;
          font-weight: 500;
        }
        .hero-badge {
          display: inline-block;
          background: #D9603B;
          color: #fff;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 1rem;
          border-radius: 999px;
        }
        .hero-sub {
          font-family: 'DM Sans', Arial, sans-serif;
          color: #7a6a60;
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 300;
        }
        .cv-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1.5px solid #2a1f1a;
          color: #2a1f1a;
          padding: 0.7rem 1.6rem;
          border-radius: 999px;
          transition: background 0.22s, color 0.22s;
          text-decoration: none;
        }
        .cv-pill:hover { background: #2a1f1a; color: #F7F2EC; }

        .social-icon { color: #c0b0a0; transition: color 0.2s; }
        .social-icon:hover { color: #D9603B; }

        .photo-frame {
          width: 300px;
          height: 420px;
          overflow: hidden;
          border-radius: 0;
          position: relative;
          z-index: 2;
          background: transparent;
        }
        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          filter: drop-shadow(0 30px 60px rgba(42,31,26,0.18));
        }
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(217,96,59,0.15);
        }
        .ruled-line {
          width: 60px;
          height: 1.5px;
          background: #D9603B;
          display: inline-block;
          vertical-align: middle;
          margin-right: 1rem;
        }
      `}</style>

      {/* Decorative background circles */}
      <div className="deco-circle" style={{ width: 600, height: 600, top: -200, right: -200, opacity: 0.5 }} />
      <div className="deco-circle" style={{ width: 300, height: 300, bottom: 50, left: -100, opacity: 0.3 }} />

      {/* Vertical label */}
      <div style={{
        position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
        fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
        color: '#c0b0a0', fontFamily: 'DM Sans, sans-serif', display: 'none',
        zIndex: 3
      }} className="md:block">
        Développeuse · 2026
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', minHeight: 'calc(100vh - 72px)' }}>

        {/* LEFT */}
        <div style={{ flex: 1, maxWidth: 580 }}>
          <p className="hero-greeting" style={{ marginBottom: '1.5rem' }}>
            <span className="ruled-line" />
            Bonjour — C'est ...
          </p>

          <h1 className="hero-name" style={{ marginBottom: '1.75rem' }}>
            <span className="first">Mialisoa</span>
            <span className="last">Razafinirina</span>
          </h1>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
            <span className="hero-badge">BUT Informatique · 3ᵉ année</span>
            <span style={{ color: '#c0b0a0', fontSize: '0.8rem' }}>IUT de Blagnac</span>
          </div>

          <p className="hero-sub" style={{ marginBottom: '0.5rem' }}>
            Parcours : <strong style={{ color: '#D9603B', fontWeight: 600 }}>Réalisation d'application</strong>
          </p>
          <p style={{ fontSize: '0.82rem', color: '#b09080', fontStyle: 'italic', marginBottom: '2.5rem', fontFamily: 'DM Sans, sans-serif' }}>
            À la recherche d'une alternance pour son master
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', alignItems: 'center' }}>
            <a href="/cv-mialisoa.pdf" download="CV_Mialisoa_RAZAFINIRINA.pdf" className="cv-pill">
              <FileText size={14} />
              Télécharger le CV
            </a>
            <div style={{ width: 1, height: 28, background: '#d4c8be' }} />
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <a href="https://linkedin.com/in/mialisoa" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
              <a href="https://github.com/mialiso" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
            </div>
          </div>
        </div>

        {/* RIGHT — Photo style éditorial */}
        <div style={{ position: 'relative', flexShrink: 0, width: 320, height: 440 }}>

          {/* Tache terracotta derrière, décalée en bas à droite */}
          <div style={{
            position: 'absolute',
            width: 280, height: 360,
            background: '#D9603B',
            bottom: -20, right: -20,
            borderRadius: '50% 40% 50% 40% / 40% 50% 40% 50%',
            zIndex: 0,
            opacity: 0.9,
          }} />

          {/* Photo par-dessus, légèrement décalée en haut à gauche */}
          <div style={{
            position: 'absolute',
            top: 50, left: 50,
            width: 280, height: 400,
            borderRadius: '50% 40% 50% 40% / 40% 50% 40% 50%',
            overflow: 'hidden',
            zIndex: 2,
            boxShadow: '0 30px 60px rgba(42,31,26,0.2)',
          }}>
            <img
              src="/mialy.jpg"
              alt="Portrait de Mialisoa"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          {/* Floating name tag */}
          <div style={{
            position: 'absolute', bottom: 0, right: -10,
            background: '#fff',
            border: '1px solid rgba(217,96,59,0.15)',
            borderRadius: '14px',
            padding: '0.7rem 1.1rem',
            boxShadow: '0 8px 30px rgba(42,31,26,0.1)',
            zIndex: 4,
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2a1f1a', fontFamily: 'DM Sans, Arial, sans-serif' }}>Mialisoa · 20 ans</p>
            <p style={{ fontSize: '0.65rem', color: '#b09080', fontFamily: 'DM Sans, Arial, sans-serif' }}>Toulouse, France</p>
          </div>
        </div>

      </div>
    </section>
  );
}