import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#F7F2EC', borderTop: '1px solid rgba(42,31,26,0.06)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .contact-input {
          background: #fff;
          border: 1.5px solid rgba(42,31,26,0.1);
          border-radius: 14px;
          padding: 0.9rem 1.25rem;
          color: #2a1f1a;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input::placeholder { color: #b09080; }
        .contact-input:focus { border-color: #D9603B; }
        .contact-info-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: rgba(217,96,59,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #D9603B; flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }
        .contact-info-row:hover .contact-info-icon { background: #D9603B; color: #fff; }
      `}</style>

      {/* Decorative */}
      <div style={{ position: 'absolute', right: -80, top: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(217,96,59,0.05)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 2rem', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, fontStyle: 'italic', color: '#2a1f1a' }}>Contact</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left — Info */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: '#2a1f1a', marginBottom: '1rem' }}>Contactez-moi via ce formulaire ou mes coordonnées</h4>
            <p style={{ color: '#7a6a60', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '3rem', fontFamily: 'DM Sans, sans-serif' }}>
              Actuellement à la recherche d'une alternance pour mon master, je suis disponible pour discuter de futures opportunités.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: Mail, label: 'Email', value: 'mialisoarazaf@gmail.com' },
                { icon: Phone, label: 'Téléphone', value: '+33 6 64 33 13 67' },
                { icon: MapPin, label: 'Adresse', value: '31700 Beauzelle, France' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="contact-info-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'default' }}>
                  <div className="contact-info-icon"><Icon size={20} /></div>
                  <div>
                    <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#b09080', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.2rem', fontFamily: 'DM Sans, sans-serif' }}>{label}</p>
                    <p style={{ color: '#2a1f1a', fontWeight: 500, fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input type="text" placeholder="Nom" className="contact-input" />
              <input type="email" placeholder="Email" className="contact-input" />
            </div>
            <input type="text" placeholder="Sujet" className="contact-input" />
            <textarea placeholder="Votre message" rows="5" className="contact-input" style={{ resize: 'none' }} />
            <button style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              padding: '1rem', background: '#D9603B', color: '#fff', border: 'none',
              borderRadius: 14, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em',
              boxShadow: '0 8px 30px rgba(217,96,59,0.3)', transition: 'background 0.2s, transform 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c24f2c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#D9603B'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Send size={16} /> Envoyer le message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}