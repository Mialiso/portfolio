import React from 'react';

export const ProjectCard = ({ title, description, tags, media }) => {
  const isVideo = media?.toLowerCase().endsWith('.mp4');

  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(42,31,26,0.08)',
      borderRadius: 28,
      overflow: 'hidden',
      transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
      cursor: 'pointer',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(42,31,26,0.1)'; e.currentTarget.style.borderColor = 'rgba(217,96,59,0.35)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(42,31,26,0.08)'; }}
    >
      {/* Media */}
      <div style={{ height: 200, background: '#EFE9E0', overflow: 'hidden', position: 'relative' }}>
        {media ? (
          isVideo
            ? <video src={media} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <img src={media} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(217,96,59,0.15) 0%, rgba(217,96,59,0.05) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#c0b0a0', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>Aperçu Projet</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#2a1f1a', marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ color: '#9a8a7a', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.6rem',
              background: 'rgba(217,96,59,0.08)',
              color: '#D9603B',
              padding: '0.22rem 0.7rem',
              borderRadius: 999,
              border: '1px solid rgba(217,96,59,0.2)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'DM Sans, sans-serif',
            }}>{tag}</span>
          ))}
        </div>

        <button style={{
          width: '100%',
          padding: '0.8rem',
          background: '#2a1f1a',
          color: '#F7F2EC',
          border: 'none',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#D9603B'}
          onMouseLeave={e => e.currentTarget.style.background = '#2a1f1a'}
        >
          Voir les détails
        </button>
      </div>
    </div>
  );
};

export const TimelineItem = ({ title, place, date, desc }) => (
  <div style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: '3rem', borderLeft: '1.5px solid rgba(217,96,59,0.25)' }}>
    <div style={{ position: 'absolute', left: -9, top: 4, width: 16, height: 16, background: '#F7F2EC', border: '2.5px solid #D9603B', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(217,96,59,0.12)' }} />
    <span style={{ display: 'inline-block', background: '#D9603B', color: '#fff', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.85rem', borderRadius: 999, marginBottom: '0.75rem', fontFamily: 'DM Sans, sans-serif' }}>{date}</span>
    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#2a1f1a', marginBottom: '0.25rem' }}>{title}</h4>
    <p style={{ color: '#D9603B', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.5rem', fontFamily: 'DM Sans, sans-serif' }}>{place}</p>
    <div style={{ color: '#7a6a60', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>{desc}</div>
  </div>
);