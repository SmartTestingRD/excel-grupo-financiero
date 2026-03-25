import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  onOpenPresentation?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenPresentation }) => {
  return (
    <aside className="hidden lg:flex w-[260px] bg-[#fbfbfa] border-r border-zinc-200 flex-col shrink-0 h-screen fixed left-0 top-0">
      {/* Header/Logo */}
      <div className="px-5 py-6 flex items-center justify-center border-b border-zinc-200 bg-white relative">
        <img src="/smartazul.png" alt="Smart Testing" className="h-9 object-contain" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 flex flex-col gap-0.5 custom-scrollbar pb-10">
        
        {/* 1. OVERVIEW */}
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-5 mb-2 mt-2">Visión Global</div>
        <div className="px-2">
          <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">monitoring</span> Panel Ejecutivo
          </NavLink>
          <NavLink to="/summary" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">summarize</span> Resumen Ejecutivo
          </NavLink>
          <NavLink to="/risk-center" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">warning</span> Riesgos Clave
          </NavLink>
          <NavLink to="/business-risk" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">trending_down</span> Impacto en Negocio
          </NavLink>
        </div>

        {/* 2. DIAGNÓSTICO */}
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-5 mb-2 mt-6">Diagnóstico</div>
        <div className="px-2">
          <NavLink to="/findings" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">fact_check</span> Hallazgos (55)
          </NavLink>
          <NavLink to="/systemic-issues" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">account_tree</span> Brechas Sistémicas
          </NavLink>
          <NavLink to="/digital-capabilities" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">speed</span> Capacidades Digitales
          </NavLink>
          <NavLink to="/friction" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">groups</span> Experiencia del Cliente
          </NavLink>
        </div>

        {/* 3. ANÁLISIS */}
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-5 mb-2 mt-6">Análisis</div>
        <div className="px-2">
          <NavLink to="/flow-analysis" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">route</span> Análisis por Flujos
          </NavLink>
          <NavLink to="/evidence" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">library_books</span> Evidencia
          </NavLink>
        </div>

        {/* 4. DECISIÓN */}
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] px-5 mb-2 mt-6">Decisión</div>
        <div className="px-2">
          <NavLink to="/recommendation" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">verified</span> Recomendación Estratégica
          </NavLink>
          <NavLink to="/roadmap" className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-colors ${isActive ? 'bg-zinc-100/80 text-zinc-900 font-semibold shadow-sm' : 'text-zinc-600 hover:bg-zinc-100/50'}`}>
            <span className="material-symbols-outlined text-[18px] opacity-70">map</span> Plan de Transformación
          </NavLink>
        </div>
      </nav>

      {/* Sidebar Footer Action */}
      <div className="p-4 border-t border-zinc-200 shrink-0 flex flex-col gap-2 bg-[#fbfbfa]">
        
        {/* ACTION: Presentación Modal */}
        <button 
          onClick={onOpenPresentation}
          className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-[13px] font-bold transition-all duration-300 shadow-sm group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">co_present</span> Presentación
        </button>

        {/* ACTION: Auto-Download Reporte PDF */}
        <a 
          href="/full-report.html?print=true"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-[13px] font-bold transition-all duration-300 shadow-sm group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-0.5 transition-transform">picture_as_pdf</span> Descargar Reporte
        </a>
      </div>
    </aside>
  );
};
