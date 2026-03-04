import React from 'react';

export const ProjectCard = ({ title, description, tags, media }) => {
  const isVideo = media?.toLowerCase().endsWith('.mp4');

  return (
    <div className="bg-[#111827] border border-white/5 p-6 rounded-3xl hover:border-blue-500/50 transition-all group">
      <div className="h-48 bg-slate-800 rounded-2xl mb-6 overflow-hidden">
        {media ? (
          isVideo ? (
            <video src={media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={media} alt={title} className="w-full h-full object-cover" />
          )
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-slate-500 font-mono italic">
            Aperçu Projet
          </div>
        )}
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/10 uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-blue-400 transition">
        VOIR LES DÉTAILS
      </button>
    </div>
  );
};

export const TimelineItem = ({ title, place, date, desc }) => (
  <div className="relative pl-8 pb-12 border-l border-blue-500/30 last:pb-0 text-left">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#030712] border-2 border-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full mb-3 uppercase tracking-wider">
      {date}
    </span>
    <h4 className="text-xl font-bold text-white">{title}</h4>
    <p className="text-blue-400 text-sm font-medium mb-3">{place}</p>
    <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
  </div>
);