import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Presentation() {
  return (
    <section
      id="hero"
      className="pt-40 pb-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 text-left"
    >
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white mb-2">
          Bonjour — C'est ...
        </h2>
        <h1 className="text-5xl md:text-6xl font-black text-blue-500 mb-4 uppercase leading-none">
          Mialisoa
          <br />
          <span className="text-white">RAZAFINIRINA</span>
        </h1>
        <p className="text-lg text-slate-400 mb-6 max-w-lg leading-relaxed">
          Etudiante en 3ᵉ année de B.U.T. Informatique à l'IUT de Blagnac.{" "}
          <br />
          Parcours :{" "}
          <span className="text-blue-400 font-bold">
            Réalisation d'application{" "}
          </span>
        </p>
        <p className="text-sm text-slate-500 mb-6 font-mono">
          Actuellement à la recherche d'une alternance pour mon master
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/cv-mialisoa.pdf"
            download="CV_Mialisoa_RAZAFINIRINA.pdf"
            className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-blue-500 rounded-full font-bold flex items-center gap-2 transition group inline-flex"
          >
            <FileText size={18} className="group-hover:text-blue-400" />
            Télécharger le CV
          </a>
          <div className="flex gap-6 ml-4 text-slate-500">
            <a href="https://linkedin.com/in/mialisoa" target="_blank">
              <Linkedin className="hover:text-blue-400 transition cursor-pointer" />
            </a>
            <a href="https://github.com/mialiso" target="_blank">
              <Github className="hover:text-white transition cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
        <div className="w-72 h-96 bg-slate-800 rounded-[32px] rotate-3 overflow-hidden border-2 border-white/10 group-hover:rotate-0 transition-all duration-500">
          <div className="w-full h-full bg-slate-700 flex flex-col items-center justify-center text-center p-6 text-slate-300">
            <div className="w-full h-full overflow-hidden rounded-[32px]">
              <img
                src="/mialy.jpg"
                alt="Portrait de Mialisoa"
                className="w-full h-full object-cover"
              />
            </div>
            <br />
            <div className="text-sm font-bold">Mialisoa Razafinirina</div>
            <div className="text-xs text-slate-400 italic">20 ans</div>
          </div>
        </div>
      </div>
    </section>
  );
}
//https://www.wedoflow.com/fr/post/personal-portfolio-website-examples-for-students