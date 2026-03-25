import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

export const ExecutiveSummary: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight mb-4">Resumen Ejecutivo</h2>
          <p className="text-zinc-500 font-medium text-lg">Estado actual del canal digital de inversiones</p>
        </div>

        {/* HERO STATEMENT */}
        <div className="bg-red-50 border border-red-200 rounded-[2rem] p-8 md:p-12 mb-10 overflow-hidden relative shadow-sm">
          <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 pointer-events-none">
            <span className="material-symbols-outlined text-[160px] text-red-700">report</span>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-[22px] md:text-4xl font-black text-red-900 leading-snug tracking-tight">
              "La plataforma presenta brechas críticas que afectan la seguridad base, la solvencia operativa y la capacidad real de generación de ingresos."
            </p>
          </div>
        </div>

        {/* SECTIONS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Score General */}
          <Link to="/scorecard" className="group bg-zinc-900 text-white border border-zinc-800 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
            <span className="material-symbols-outlined text-zinc-700 text-[80px] absolute right-2 bottom-2 opacity-50 group-hover:scale-110 transition-transform duration-500">insert_chart</span>
            <span className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-4">1. Score General</span>
            <div className="mt-auto relative z-10 flex items-center gap-2">
               <span className="text-[4rem] font-black text-red-500 leading-none">4.1</span>
               <span className="text-xl font-bold text-zinc-500 mb-2">/ 10</span>
            </div>
            <p className="text-sm font-medium text-zinc-300 mt-4 leading-relaxed relative z-10 max-w-[80%]">Salud general de la plataforma gravemente comprometida.</p>
          </Link>

          {/* 2. Nivel de Riesgo */}
          <Link to="/risk-center" className="group bg-white border border-red-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ring-1 ring-transparent hover:ring-red-500/30">
            <span className="material-symbols-outlined text-red-50 text-[100px] absolute right-2 bottom-2 group-hover:scale-110 transition-transform duration-500">warning</span>
            <span className="text-red-700 text-[10px] font-black uppercase tracking-widest mb-4 relative z-10">2. Nivel de Riesgo</span>
            <div className="mt-auto relative z-10">
               <span className="text-4xl font-black text-red-600 leading-none tracking-tight">C R Í T I C O</span>
            </div>
            <p className="text-sm font-medium text-zinc-600 mt-4 leading-relaxed relative z-10">Vulnerabilidades estructurales de Grado 1 en manejo de estado de sesión, MFA ausente y arquitecturas legibles.</p>
          </Link>

          {/* 3. Hallazgos clave */}
          <Link to="/findings" className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ring-1 ring-transparent hover:ring-zinc-900/10">
            <span className="material-symbols-outlined text-zinc-50 text-[100px] absolute right-2 bottom-2 group-hover:scale-110 transition-transform duration-500">fact_check</span>
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4 relative z-10">3. Hallazgos Clave</span>
            <div className="mt-auto relative z-10">
               <span className="text-6xl font-black text-zinc-900 leading-none">55</span>
            </div>
            <p className="text-sm font-medium text-zinc-600 mt-4 leading-relaxed relative z-10">Deficiencias documentadas a lo largo de 4 pilares tecnológicos y UX a través de todo el flujo cliente.</p>
          </Link>

          {/* 4. Impacto en negocio */}
          <Link to="/business-risk" className="group bg-white border border-orange-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-1 ring-1 ring-transparent hover:ring-orange-500/30">
            <span className="material-symbols-outlined text-orange-50 text-[100px] absolute right-2 bottom-2 group-hover:scale-110 transition-transform duration-500">trending_down</span>
            <span className="text-orange-700 text-[10px] font-black uppercase tracking-widest mb-4 relative z-10">4. Impacto Comercial</span>
            <div className="mt-auto relative z-10">
               <span className="text-[28px] font-black text-orange-600 leading-tight">Fricción severa al movimiento de capital</span>
            </div>
            <p className="text-sm font-medium text-zinc-600 mt-4 leading-relaxed relative z-10">Pérdida material de captación de fondo por fallos sistémicos en altas y bloqueos de depósitos.</p>
          </Link>

          {/* 5. Recomendación */}
          <Link to="/recommendation" className="group bg-emerald-50 border border-emerald-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-2 ring-1 ring-transparent hover:ring-emerald-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] translate-x-1/4 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors pointer-events-none"></div>
            <span className="material-symbols-outlined text-emerald-100 text-[130px] absolute right-0 bottom-[-20px] transition-transform duration-500 group-hover:scale-110">verified</span>
            <span className="text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-4 relative z-10">5. Resolución Estratégica</span>
            <div className="mt-auto relative z-10">
               <span className="text-3xl md:text-[2.5rem] font-black text-emerald-700 leading-tight">Rediseño Interactivo & Contención Estructural</span>
            </div>
            <p className="text-[15px] font-medium text-emerald-900/80 mt-5 leading-relaxed max-w-xl relative z-10">
              Cerrar la disonancia migrando el canal hacia una plataforma inviolable, intuitiva y robusta, abatiendo el nivel de exposición en un roadmap definido a 120 días.
            </p>
          </Link>

        </div>
      </div>
    </PageWrapper>
  );
};
