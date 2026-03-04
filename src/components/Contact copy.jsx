import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
      <h3 className="text-5xl font-black text-white mb-20 uppercase italic text-center">Contact</h3>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* INFOS DE CONTACT */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-white mb-6">Contacter moi via ce formulaire ou mes contacts ci-dessous</h4>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Actuellement à la recherche d'une alternance pour mon master, je suis disponible pour discuter de futures opportunités.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                <p className="text-white">mialisoarazaf@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Téléphone</p>
                <p className="text-white">+33 6 64 33 13 67</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Adresse</p>
                <p className="text-white">31700 Beauzelle, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULAIRE SIMPLE */}
        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Nom" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition w-full"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition w-full"
            />
          </div>
          <input 
            type="text" 
            placeholder="Sujet" 
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition w-full"
          />
          <textarea 
            placeholder="Votre message" 
            rows="5"
            className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition w-full resize-none"
          ></textarea>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/20">
            <Send size={18} /> Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}