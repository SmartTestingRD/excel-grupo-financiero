import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const Scorecard: React.FC = () => {
  const metrics = [
    { title: 'Seguridad', score: 2.1, max: 10, color: 'bg-red-500', bgBar: 'bg-red-100', desc: 'Carencia de validaciones de biometría y MFA.' },
    { title: 'Confianza', score: 3.2, max: 10, color: 'bg-red-500', bgBar: 'bg-red-100', desc: 'Disonancia de marca y nulo feedback operativo post-transaccional.' },
    { title: 'Funcionalidad', score: 4.5, max: 10, color: 'bg-orange-500', bgBar: 'bg-orange-100', desc: 'Dificultad estructural en onboarding y reseteos manuales.' },
    { title: 'UX/UI', score: 4.8, max: 10, color: 'bg-orange-500', bgBar: 'bg-orange-100', desc: 'Interfaz no escalable, estática y diseño no estandarizado.' },
    { title: 'Rendimiento', score: 6.0, max: 10, color: 'bg-zinc-500', bgBar: 'bg-zinc-200', desc: 'Tiempos de latencia por encima de métricas Fintech.' },
  ];

  const globalScore = 4.1; // (2.1 + 3.2 + 4.5 + 4.8 + 6.0) / 5

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-4xl mx-auto">
        
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm mb-6 inline-flex">
            <span className="material-symbols-outlined text-[14px]">insert_chart</span>
            Medición Cuantitativa
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight mb-4">Scorecard</h2>
          <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto">Evaluación parametrizada del estado del producto digital basado en estándares vigentes de banca móvil.</p>
        </div>

        {/* Global Score */}
        <div className="bg-zinc-900 rounded-[2rem] p-10 md:p-12 text-center text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-900"></div>
          <div className="relative z-10">
            <h3 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-xs mb-4">Puntuación Global de Salud</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-6xl md:text-[5rem] font-black tracking-tighter text-red-500 leading-none">{globalScore.toFixed(1)}</span>
              <span className="text-2xl font-bold text-zinc-600 mb-1">/ 10</span>
            </div>
            <div className="inline-flex mt-4 items-center gap-2 bg-red-600/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold border border-red-500/20">
              <span className="material-symbols-outlined text-[16px]">warning</span> Riesgo Crítico Sostenido
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
          <h3 className="text-xl font-black text-zinc-900 mb-8 border-b border-zinc-100 pb-4">Desglose de Componentes</h3>
          <div className="flex flex-col gap-10">
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div className="flex flex-wrap md:flex-nowrap justify-between items-end gap-2 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[15px] font-bold text-zinc-900">{m.title}</span>
                    <span className="text-[13px] font-medium text-zinc-500">{m.desc}</span>
                  </div>
                  <div className="flex items-baseline gap-1 bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-200 whitespace-nowrap">
                    <span className="text-xl font-black text-zinc-900 leading-none">{m.score.toFixed(1)}</span>
                    <span className="text-[11px] font-bold text-zinc-400">/ 10</span>
                  </div>
                </div>
                {/* Progress Bar Container */}
                <div className={`w-full h-3 rounded-full overflow-hidden ${m.bgBar}`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${m.color}`}
                    style={{ width: `${(m.score / m.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};
