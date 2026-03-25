import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const Recommendation: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20">

        {/* 1. HERO SECTION */}
        <div className="mb-14 flex flex-col items-center text-center gap-5 border-b border-zinc-200 pb-12">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Veredicto de Auditoría
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-display font-black text-zinc-900 tracking-tight leading-tight max-w-4xl">
            Recomendación Estratégica
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            El camino para eliminar la exposición actual y construir una plataforma financiera moderna.
          </p>
        </div>

        {/* 2. MAIN MESSAGE (HIGHLIGHT BOX) */}
        <div className="mb-16 bg-zinc-900 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto border border-zinc-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-700/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
          
          <h3 className="relative z-10 text-2xl md:text-4xl font-black text-white leading-tight font-display tracking-tight">
            "Esto no es una mejora tecnológica.<br />
            <span className="text-red-500">Es una decisión de gestión de riesgo.</span>"
          </h3>
        </div>

        {/* 3. DECISION CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* OPTION 1: Mejoras menores */}
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative mt-0 lg:mt-6">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-zinc-500 text-[24px]">build</span>
            </div>
            <h4 className="text-xl font-black text-zinc-900 mb-2">Mejoras menores</h4>
            <p className="text-zinc-500 text-sm font-medium mb-8">Parches tácticos y superficiales.</p>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0 mt-0.5">remove_done</span>
                <span className="text-[14px] text-zinc-700 font-semibold">20% problemas resueltos</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 text-[18px] shrink-0 mt-0.5">warning</span>
                <span className="text-[14px] text-zinc-700 font-semibold">Riesgo crítico permanece activo</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0 mt-0.5">account_tree</span>
                <span className="text-[14px] text-zinc-700 font-semibold">No cambia el modelo operativo</span>
              </div>
            </div>
          </div>

          {/* OPTION 2: Rediseño estructural (RECOMMENDED) */}
          <div className="bg-emerald-50/10 border-2 border-emerald-500 rounded-[2rem] p-8 flex flex-col shadow-xl relative z-10 transform scale-100 lg:scale-105">
            {/* BADGE */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-black text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="material-symbols-outlined text-[14px]">star</span>
              Recomendado
            </div>

            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-emerald-600 text-[24px]">architecture</span>
            </div>
            <h4 className="text-2xl font-black text-zinc-900 mb-2">Rediseño estructural</h4>
            <p className="text-zinc-500 text-sm font-medium mb-8">Revolución de la experiencia transaccional.</p>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span className="text-[14px] text-zinc-900 font-bold">100% hallazgos de origen abordados</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">security</span>
                <span className="text-[14px] text-zinc-900 font-bold">Elimina exposición crítica (Seguridad)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">rocket_launch</span>
                <span className="text-[14px] text-zinc-900 font-bold">Permite evolución del producto e ingresos</span>
              </div>
            </div>
          </div>

          {/* OPTION 3: Reconstrucción total */}
          <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative mt-0 lg:mt-6">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-orange-500 text-[24px]">foundation</span>
            </div>
            <h4 className="text-xl font-black text-zinc-900 mb-2">Reconstrucción total</h4>
            <p className="text-zinc-500 text-sm font-medium mb-8">Desechar operaciones e iniciar de cero.</p>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0 mt-0.5">check_circle</span>
                <span className="text-[14px] text-zinc-700 font-semibold">100% solución operativa</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-[18px] shrink-0 mt-0.5">schedule</span>
                <span className="text-[14px] text-zinc-700 font-semibold">Mayor costo y pérdida de tiempo al mercado</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-500 text-[18px] shrink-0 mt-0.5">block</span>
                <span className="text-[14px] text-zinc-700 font-semibold">No es necesario si hay estabilidad funcional oculta</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. EXECUTION ROADMAP */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                <span className="material-symbols-outlined text-[16px]">map</span>
                Hoja de Ruta de Transformación
              </div>
              <h3 className="text-3xl font-display font-black text-zinc-900 tracking-tight leading-tight">
                Execution Roadmap (3–4 meses)
              </h3>
            </div>
            <p className="text-zinc-500 font-medium max-w-sm text-sm">
              Asumiendo viabilidad operativa central. El proyecto se enfocará ciegamente en <strong className="text-zinc-800">experiencia de cliente, protección activa y apertura de crecimiento comercial</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* FASE 1 */}
            <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm border-t-4 border-t-red-600">
              <div className="text-[10px] font-black uppercase text-red-600 tracking-widest mb-1">FASE 1</div>
              <div className="text-lg font-black text-zinc-900 mb-6 pb-4 border-b border-zinc-100">0–30 días</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Seguridad Privada (MFA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Biometría Nativa Directa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Supervisión Estructural</span>
                </li>
              </ul>
            </div>

            {/* FASE 2 */}
            <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm border-t-4 border-t-emerald-500">
              <div className="text-[10px] font-black uppercase text-emerald-600 tracking-widest mb-1">FASE 2</div>
              <div className="text-lg font-black text-zinc-900 mb-6 pb-4 border-b border-zinc-100">30–60 días</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Rediseño UX/UI Estructural</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Nueva Navegación Cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Dashboard de Portafolio</span>
                </li>
              </ul>
            </div>

            {/* FASE 3 */}
            <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm border-t-4 border-t-blue-500">
              <div className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-1">FASE 3</div>
              <div className="text-lg font-black text-zinc-900 mb-6 pb-4 border-b border-zinc-100">60–90 días</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Aportaciones de Capital Automáticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Retiros Liquidados Directos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Emisión Legal de Recibos</span>
                </li>
              </ul>
            </div>

            {/* FASE 4 */}
            <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-6 shadow-sm border-t-4 border-t-zinc-400">
              <div className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-1">FASE 4</div>
              <div className="text-lg font-black text-zinc-900 mb-6 pb-4 border-b border-zinc-100">90–120 días</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Notificaciones Comerciales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Analytics Operacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 text-[18px] shrink-0">check_circle</span>
                  <span className="text-sm font-semibold text-zinc-700 leading-snug">Optimización de Experiencia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. CERO AMBIGÜEDAD (FINAL SUMMARY BOX) */}
        <div className="mt-20 max-w-4xl mx-auto border-2 border-red-500 bg-red-50/30 rounded-[2rem] p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 shrink-0">cancel</span>
                <span className="text-zinc-900 font-semibold text-sm md:text-base">El producto actual no cumple estándares fintech modernos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 shrink-0">cancel</span>
                <span className="text-zinc-900 font-semibold text-sm md:text-base">Existe exposición financiera activa irreparable</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 shrink-0">cancel</span>
                <span className="text-zinc-900 font-semibold text-sm md:text-base">El modelo y la experiencia actual limitan los ingresos</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <span className="material-symbols-outlined text-emerald-500 shrink-0">check_circle</span>
                <span className="text-emerald-800 font-bold text-sm md:text-base">La solución es clara, directa y altamente ejecutable</span>
              </div>
            </div>
            <div className="md:col-span-2 md:pl-8 text-center md:text-left border-t md:border-t-0 md:border-l border-red-200/50 pt-6 md:pt-0">
              <p className="text-2xl font-black text-red-700 font-display tracking-tight leading-tight">
                "La transformación no es opcional.<br/>
                <span className="text-zinc-900">Es inevitable.</span>"
              </p>
            </div>
          </div>
        </div>

        {/* 6. CALL TO ACTION BUTTONS */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          <button className="flex-1 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group whitespace-nowrap">
            <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">download</span> Descargar plan detallado
          </button>
        </div>

        {/* 7. FINAL DECISION STATEMENT */}
        <div className="mt-16 max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[2rem] p-10 md:p-14 text-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500"></div>
          <p className="text-[20px] md:text-3xl font-medium text-white font-display tracking-tight leading-snug md:leading-snug relative z-10">
            "La decisión no es si invertir en la plataforma.<br />
            Es si <strong className="text-red-500 font-black">Excel Inversiones</strong> está dispuesta a asumir el costo de no hacerlo."
          </p>
        </div>

      </div>
    </PageWrapper>
  );
};
