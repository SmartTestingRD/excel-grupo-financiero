import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-6xl mx-auto">
        
        {/* 0. BREADCRUMBS */}
        <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-10 transition-all duration-700 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <span className="material-symbols-outlined text-[14px]">home</span>
          <span>Inicio</span>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-900">Diagnóstico Estratégico</span>
        </div>

        {/* 1. HERO BLOCK (McKinsey Style) */}
        <div className="border-l-[3px] border-zinc-900 pl-8 md:pl-10 mb-16 pt-2 opacity-0 animate-[fadeIn_0.5s_ease-out_100ms_forwards]">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Excel Grupo Financiero</span>
            <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
            <span className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px]">Marzo 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-black text-zinc-900 tracking-tight leading-[1.1] mb-6 max-w-3xl">
            Diagnóstico Estratégico de la Plataforma Móvil
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl mb-10">
            Evaluación integral de madurez digital, riesgos operativos y capacidad competitiva del canal de inversiones.
          </p>
          <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-2xl inline-block max-w-3xl shadow-2xl shadow-zinc-900/10 ring-1 ring-zinc-800">
            <p className="text-[17px] md:text-[19px] font-medium tracking-wide leading-relaxed">
              "La plataforma actual no está alineada con los estándares de una institución financiera moderna."
            </p>
          </div>
        </div>

        {/* 2. EXECUTIVE METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16 opacity-0 animate-[fadeIn_0.5s_ease-out_200ms_forwards]">
          
          {/* Circular Score Metric */}
          <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Madurez del producto</span>
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                <path
                  className="text-zinc-100"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-zinc-900"
                  strokeDasharray="30, 100"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ transition: "stroke-dasharray 1.5s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-black text-zinc-900 leading-none">3.0</span>
                <span className="text-[9px] font-bold text-zinc-400">/ 10</span>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-100 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[100px] text-red-600">warning</span>
            </div>
            <span className="text-red-700 text-[10px] font-black uppercase tracking-widest mb-2 relative z-10">Nivel de riesgo</span>
            <div className="mt-auto relative z-10">
              <span className="text-3xl md:text-5xl font-black text-red-600 leading-none tracking-tighter">Crítico</span>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm flex flex-col relative overflow-hidden hover:shadow-md transition-shadow">
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Hallazgos totales</span>
            <div className="mt-auto">
              <span className="text-4xl md:text-5xl font-black text-zinc-900 leading-none tracking-tighter">55</span>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:shadow-md transition-shadow">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
              <span className="material-symbols-outlined text-[100px] text-orange-600">show_chart</span>
            </div>
            <span className="text-orange-700 text-[10px] font-black uppercase tracking-widest mb-2 relative z-10">% impacto financiero</span>
            <div className="mt-auto relative z-10 flex items-end gap-1">
              <span className="text-4xl md:text-5xl font-black text-orange-600 leading-none tracking-tighter">45</span>
              <span className="text-xl font-bold text-orange-600 mb-1">%</span>
            </div>
          </div>
        </div>

        {/* 3. KEY EXECUTIVE STATEMENT */}
        <div className="max-w-4xl mx-auto text-center mb-16 py-12 border-y border-zinc-100 relative opacity-0 animate-[fadeIn_0.5s_ease-out_300ms_forwards]">
          <span className="material-symbols-outlined absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-200 text-[40px] bg-[#FAFAFA] px-4">format_quote</span>
          <p className="text-[20px] md:text-3xl font-medium text-zinc-700 font-display tracking-tight leading-snug">
            "Este diagnóstico evidencia una <strong className="font-black text-red-600">brecha estructural</strong> entre la propuesta de valor de la institución y la capacidad real de su canal digital."
          </p>
        </div>

        {/* 4. NAVIGATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-[fadeIn_0.5s_ease-out_400ms_forwards]">
          
          <Link to="/scorecard" className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ring-1 ring-transparent hover:ring-zinc-900/5">
            <div className="w-12 h-12 bg-zinc-100 group-hover:bg-zinc-900 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-zinc-600 group-hover:text-white transition-colors text-[24px]">speed</span>
            </div>
            <h3 className="text-xl font-black text-zinc-900 mb-2 tracking-tight">Resumen Ejecutivo</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-sm">Visión general del estado actual del canal digital.</p>
            <div className="mt-8 flex items-center gap-2 text-zinc-400 group-hover:text-zinc-900 font-bold text-[13px] transition-colors uppercase tracking-widest">
              Explorar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          <Link to="/risk-center" className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ring-1 ring-transparent hover:ring-red-600/20">
            <div className="w-12 h-12 bg-red-50 group-hover:bg-red-600 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-red-600 group-hover:text-white transition-colors text-[24px]">warning</span>
            </div>
            <h3 className="text-xl font-black text-zinc-900 mb-2 tracking-tight">Riesgos Clave</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-sm">Exposición financiera, reputacional y operativa identificada.</p>
            <div className="mt-8 flex items-center gap-2 text-zinc-400 group-hover:text-red-600 font-bold text-[13px] transition-colors uppercase tracking-widest">
              Explorar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          <Link to="/business-risk" className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ring-1 ring-transparent hover:ring-orange-500/20">
            <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-orange-600 group-hover:text-white transition-colors text-[24px]">trending_down</span>
            </div>
            <h3 className="text-xl font-black text-zinc-900 mb-2 tracking-tight">Impacto en Negocio</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-sm">Consecuencias directas en ingresos, clientes y operativa diaria.</p>
            <div className="mt-8 flex items-center gap-2 text-zinc-400 group-hover:text-orange-500 font-bold text-[13px] transition-colors uppercase tracking-widest">
              Explorar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          <Link to="/flow-analysis" className="group bg-white border border-zinc-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ring-1 ring-transparent hover:ring-blue-600/20">
            <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-600 group-hover:text-white transition-colors text-[24px]">route</span>
            </div>
            <h3 className="text-xl font-black text-zinc-900 mb-2 tracking-tight">Flujos Críticos</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-sm">Puntos exactos donde la experiencia de cliente y servicio falla.</p>
            <div className="mt-8 flex items-center gap-2 text-zinc-400 group-hover:text-blue-600 font-bold text-[13px] transition-colors uppercase tracking-widest">
              Explorar <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </Link>

          <Link to="/recommendation" className="group bg-emerald-50/40 border-2 border-emerald-500/30 rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ring-1 ring-transparent hover:ring-emerald-500 lg:col-span-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 group-hover:bg-emerald-500/20 transition-colors"></div>
            <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-500 transition-colors rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <span className="material-symbols-outlined text-emerald-600 group-hover:text-white transition-colors text-[24px]">flag</span>
            </div>
            <h3 className="text-2xl font-black text-zinc-900 mb-2 tracking-tight relative z-10">Recomendación Estratégica</h3>
            <p className="text-zinc-600 font-medium leading-relaxed text-[15px] max-w-lg relative z-10">Plan claro para eliminar la exposición, reconstruir fidelización y crecer la adopción.</p>
            <div className="mt-8 flex items-center gap-2 text-emerald-700 group-hover:text-emerald-800 font-black text-[13px] transition-colors uppercase tracking-widest relative z-10">
              Ver estrategia de resolución <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </Link>

        </div>

      </div>
    </PageWrapper>
  );
};
