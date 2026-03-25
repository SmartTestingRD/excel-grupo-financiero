import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const BusinessRisk: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-12">

        {/* 1. HERO SECTION */}
        <div className="mb-12 flex flex-col items-start gap-4 border-b border-zinc-200 pb-10">
          <div className="flex items-center gap-2 text-red-600 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-[16px]">bar_chart</span>
            Costos ocultos y fuga de capital
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight leading-tight">Impacto directo en el negocio</h2>
          <p className="text-zinc-600 text-lg md:text-xl mt-2 font-medium leading-relaxed max-w-4xl">
            Las brechas identificadas no son técnicas — <strong className="text-zinc-900">son pérdidas operativas, financieras y competitivas activas.</strong>
          </p>
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-red-50/50 border border-red-100 text-red-900">
            <span className="material-symbols-outlined text-red-600 text-[20px]">info</span>
            <p className="text-[14px] font-bold">La institución ya está absorbiendo estos costos, aunque no estén visibles en reportes financieros directos.</p>
          </div>
        </div>

        {/* 2. QUANTIFIED IMPACT (HIGH PRIORITY NUMBERS) */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900 text-white rounded-[1.5rem] p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-[42px] font-black text-red-500 mb-2 leading-none">$0</div>
            <p className="text-[14px] text-zinc-300 font-medium">ingresos digitales generados</p>
          </div>
          <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-[42px] font-black text-zinc-900 mb-2 leading-none tracking-tight">3<span className="text-zinc-400">–</span>5x</div>
            <p className="text-[14px] text-zinc-600 font-medium">costo operativo por procesos manuales</p>
          </div>
          <div className="bg-white border border-zinc-200 rounded-[1.5rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-[42px] font-black text-orange-500 mb-2 leading-none">100%</div>
            <p className="text-[14px] text-zinc-600 font-medium">dependencia de intervención humana</p>
          </div>
          <div className="bg-white border text-red-900 border-red-200 bg-red-50/30 rounded-[1.5rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="text-[42px] font-black text-red-600 mb-2 leading-none"><span className="material-symbols-outlined text-[42px]">trending_down</span></div>
            <p className="text-[14px] text-red-800 font-semibold">Pérdida silenciosa de clientes (invisible en KPIs)</p>
          </div>
        </div>

        {/* PRIMARY IMPACT CARDS (REORDERED & EXECUTIVE REWRITE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* 1. EXPOSICIÓN FINANCIERA */}
          <div className="p-8 bg-white border border-red-200 rounded-[1.5rem] hover:shadow-xl transition-all flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <span className="material-symbols-outlined text-[14px]">account_balance</span> Tipo: Financiero
              </span>
              <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-widest border border-red-100 text-right">
                Exposición: Crítica
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5 border border-red-100">
              <span className="material-symbols-outlined text-red-600 text-[24px]">gavel</span>
            </div>
            <h3 className="text-[20px] font-black text-zinc-900 mb-3 tracking-tight">Exposición financiera directa</h3>
            <p className="text-[15px] text-zinc-700 leading-relaxed font-medium">
              La ausencia de trazabilidad auditable y control biométrico expone legalmente a la institución a pérdidas monetarias masivas y demandas inmediatas vinculadas a suplantación y fraude transaccional.
            </p>
          </div>

          {/* 2. RIESGO REPUTACIONAL */}
          <div className="p-8 bg-white border border-orange-200 rounded-[1.5rem] hover:shadow-xl transition-all flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <span className="material-symbols-outlined text-[14px]">shield_alert</span> Tipo: Reputacional
              </span>
              <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-widest border border-orange-100 text-right">
                Riesgo regulatorio: Elevado
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-5 border border-orange-100">
              <span className="material-symbols-outlined text-orange-600 text-[24px]">public_off</span>
            </div>
            <h3 className="text-[20px] font-black text-zinc-900 mb-3 tracking-tight">Destrucción absoluta de confianza</h3>
            <p className="text-[15px] text-zinc-700 leading-relaxed font-medium">
              La inestabilidad operativa y las fallas de acceso aniquilan la fiabilidad de marca, provocando que los clientes institucionales de alto patrimonio retiren estructuralmente sus fondos para migrar a competidores directos.
            </p>
          </div>

          {/* 3. PÉRDIDA DE CLIENTES (CAC) */}
          <div className="p-8 bg-white border border-red-200 rounded-[1.5rem] hover:shadow-xl transition-all flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <span className="material-symbols-outlined text-[14px]">group_remove</span> Tipo: Operativo
              </span>
              <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-widest border border-red-100 text-right">
                % Potencial afectado: 100% retención
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5 border border-red-100">
              <span className="material-symbols-outlined text-red-600 text-[24px]">trending_down</span>
            </div>
            <h3 className="text-[20px] font-black text-zinc-900 mb-3 tracking-tight">Pérdida neta de adquisición digital</h3>
            <p className="text-[15px] text-zinc-700 leading-relaxed font-medium">
              La extrema fricción física en un flujo que debería ser asíncrono anula por completo la inversión en marketing institucional, desperdiciando el CAC y reduciendo las tasas de conversión orgánica íntegramente a cero.
            </p>
          </div>

          {/* 4. IMPACTO ESTRATÉGICO */}
          <div className="p-8 bg-[#fafafa] border border-zinc-300 rounded-[1.5rem] hover:shadow-xl transition-all flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-500 font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-zinc-200 pb-1">
                <span className="material-symbols-outlined text-[14px]">domain_disabled</span> Tipo: Estratégico
              </span>
              <span className="bg-zinc-200 text-zinc-800 text-[10px] font-bold px-2.5 py-1 rounded-[6px] uppercase tracking-widest border border-zinc-300 text-right">
                Impacto estimado: Alto
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center mb-5 border border-zinc-300">
              <span className="material-symbols-outlined text-zinc-700 text-[24px]">block</span>
            </div>
            <h3 className="text-[20px] font-black text-zinc-900 mb-3 tracking-tight">Incapacidad de evolución del producto</h3>
            <p className="text-[15px] text-zinc-700 leading-relaxed font-medium">
              La dependencia estructural sobre sistemas monolíticos paraliza innegablemente la operatividad de innovación, impidiendo lanzamientos financieros clave y marginando cualquier expansión volumétrica del fondo matriz.
            </p>
          </div>

        </div>

        {/* COST OF INACTION & FINAL EXECUTIVE STATEMENT BLOCK */}
        <div className="mt-8 p-10 bg-zinc-900 border border-zinc-800 rounded-[1.5rem] text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-500 rounded-bl-full -z-0 opacity-10 filter blur-3xl text-red-500"></div>
          
          <p className="text-lg md:text-xl font-bold text-zinc-400 leading-relaxed max-w-3xl mx-auto tracking-wide mb-6 relative z-10 border-b border-zinc-700 pb-6">
            "La inacción no es una posición neutral. Cada mes sin intervención incrementa costos operativos, reduce competitividad y amplía la brecha tecnológica."
          </p>
          
          <p className="relative z-10 text-[18px] md:text-[22px] font-black text-white leading-relaxed max-w-4xl mx-auto tracking-wide">
            "La operación digital actual está generando una pérdida recurrente de valor comercial. El impacto no es teórico ni potencial; <span className="text-red-400">es actual, absolutamente cuantificable y destructivamente acumulativo.</span>"
          </p>
        </div>

      </div>
    </PageWrapper>
  );
};
