import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const RiskCenter: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-12">
        {/* 1. HERO SECTION */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 text-red-600 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-[16px]">donut_large</span>
            Exposición activa del canal digital
          </div>
          <h2 className="text-4xl font-display font-black text-zinc-900 tracking-tight leading-tight">Riesgos Clave</h2>
          <p className="text-zinc-600 text-[17px] mt-1 font-medium leading-relaxed max-w-3xl">
            La institución enfrenta riesgos financieros, operativos y reputacionales <strong className="text-zinc-900">que ya están activos</strong> en la experiencia actual del cliente.
          </p>
        </div>

        {/* 2. TOP RISK INDICATORS (4 KPI Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Financiero */}
          <div className="p-6 bg-white border border-red-200 rounded-[1.25rem] shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-zinc-900 text-[15px]">Riesgo Financiero</h4>
              <span className="bg-red-50 text-red-700 font-bold px-2 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-red-100">Crítico</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-medium mt-auto">Vulnerabilidad de acceso que sitúa a la firma bajo contingencias legales inminentes por suplantación y fraude.</p>
          </div>

          {/* Operativo */}
          <div className="p-6 bg-white border border-orange-200 rounded-[1.25rem] shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-zinc-900 text-[15px]">Riesgo Operativo</h4>
              <span className="bg-orange-50 text-orange-700 font-bold px-2 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-orange-100">Alto</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-medium mt-auto">Dependencia sistémica de intervención humana que paraliza la ejecución institucional en tiempo real.</p>
          </div>

          {/* Reputacional */}
          <div className="p-6 bg-white border border-orange-200 rounded-[1.25rem] shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-zinc-900 text-[15px]">Riesgo Reputacional</h4>
              <span className="bg-orange-50 text-orange-700 font-bold px-2 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-orange-100">Medio</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-medium mt-auto">Percepción de plataforma obsoleta, diluyendo masivamente el prestigio corporativo moderno de la marca.</p>
          </div>

          {/* Confianza */}
          <div className="p-6 bg-white border border-red-200 rounded-[1.25rem] shadow-sm hover:shadow-md transition-all flex flex-col hover:-translate-y-1 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-zinc-900 text-[15px]">Confianza del Cliente</h4>
              <span className="bg-red-50 text-red-700 font-bold px-2 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-red-100">Crítico</span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-medium mt-auto">Abandono de sesiones motivado por barreras de entrada ilógicas impidiendo la captación de usuarios.</p>
          </div>
        </div>

        {/* 4. RISK INTERPRETATION BLOCK */}
        <div className="mb-10 p-6 bg-zinc-900 rounded-[1.25rem] text-center max-w-4xl shadow-lg border border-zinc-800">
          <p className="text-[15px] md:text-[17px] font-bold text-white leading-relaxed max-w-3xl mx-auto tracking-wide">
            "Esto no es un conjunto de hallazgos aislados.<br/>
            Es una exposición institucional acumulada que afecta <span className="text-red-400">seguridad, operación, confianza y capacidad de crecimiento</span>."
          </p>
        </div>

        {/* 3. CRITICAL RISKS TABLE */}
        <div className="mb-10 bg-white border border-zinc-200 rounded-[1.5rem] overflow-hidden shadow-sm">
          <div className="border-b border-zinc-200 bg-zinc-50/50 px-6 py-4">
            <h3 className="font-bold text-zinc-900 text-[15px]">Matriz Cuantitativa de Riesgo</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-50/80">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-widest w-1/4">Riesgo Sistémico</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-widest w-2/4">Impacto Institucional</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">Severidad</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-5 text-[14px] font-bold text-zinc-900">Acceso sin MFA</td>
                  <td className="px-6 py-5 text-[13px] text-zinc-600 font-medium leading-relaxed">Brecha de suplantación y exposición a fraudes inminentes.</td>
                  <td className="px-6 py-5"><span className="bg-red-50 text-red-700 font-bold px-2.5 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-red-100">Crítico</span></td>
                  <td className="px-6 py-5"><span className="flex items-center gap-1.5 text-[12px] font-bold text-zinc-900"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span> Activo</span></td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors bg-zinc-50/30">
                  <td className="px-6 py-5 text-[14px] font-bold text-zinc-900">Operaciones sin trazabilidad</td>
                  <td className="px-6 py-5 text-[13px] text-zinc-600 font-medium leading-relaxed">Imposibilidad de defensión legal mediante trails auditables.</td>
                  <td className="px-6 py-5"><span className="bg-red-50 text-red-700 font-bold px-2.5 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-red-100">Crítico</span></td>
                  <td className="px-6 py-5"><span className="flex items-center gap-1.5 text-[12px] font-bold text-zinc-900"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span> Activo</span></td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-5 text-[14px] font-bold text-zinc-900">Dependencia procesos manuales</td>
                  <td className="px-6 py-5 text-[13px] text-zinc-600 font-medium leading-relaxed">SLA destruido y gastos operativos inflados exponencialmente.</td>
                  <td className="px-6 py-5"><span className="bg-orange-50 text-orange-700 font-bold px-2.5 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-orange-100">Alto</span></td>
                  <td className="px-6 py-5"><span className="flex items-center gap-1.5 text-[12px] font-bold text-zinc-900"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Activo</span></td>
                </tr>
                <tr className="hover:bg-zinc-50/50 transition-colors bg-zinc-50/30">
                  <td className="px-6 py-5 text-[14px] font-bold text-zinc-900">Barrera capital digital</td>
                  <td className="px-6 py-5 text-[13px] text-zinc-600 font-medium leading-relaxed">Captación retenida por un embudo dependiente de procesos físicos.</td>
                  <td className="px-6 py-5"><span className="bg-orange-50 text-orange-700 font-bold px-2.5 py-1 rounded-[4px] text-[10px] uppercase tracking-widest border border-orange-100">Alto</span></td>
                  <td className="px-6 py-5"><span className="flex items-center gap-1.5 text-[12px] font-bold text-zinc-900"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Riesgo Creciente</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. RISK EVOLUTION / URGENCY & 6. CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#fafafa] border border-zinc-200/80 rounded-[1.5rem] p-8">
          
          {/* Evolution Timeline */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-zinc-900 text-[14px] mb-2 uppercase tracking-wide">Evolución sin Remediación</h3>
            
            <div className="flex flex-col relative pl-6 border-l-2 border-zinc-200 gap-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-red-500 ring-4 ring-[#fafafa]"></span>
                <h4 className="text-[12px] font-bold text-zinc-900 uppercase tracking-wider mb-1">Hoy</h4>
                <p className="text-[13px] text-zinc-500 font-medium">Riesgo operativo e institucional activo.</p>
              </div>
              <div className="relative">
                 <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-400 ring-4 ring-[#fafafa]"></span>
                 <h4 className="text-[12px] font-bold text-zinc-900 uppercase tracking-wider mb-1">En 3 Meses</h4>
                 <p className="text-[13px] text-zinc-500 font-medium">Incremento exponencial del impacto de falla.</p>
              </div>
              <div className="relative">
                 <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-[#fafafa]"></span>
                 <h4 className="text-[12px] font-bold text-zinc-900 uppercase tracking-wider mb-1">En 6 Meses</h4>
                 <p className="text-[13px] text-zinc-500 font-medium">Daño legal e impacto destructivo en estados financieros.</p>
              </div>
            </div>
          </div>

          {/* Calls To Action */}
          <div className="flex flex-col lg:items-end gap-3 lg:border-l lg:border-zinc-200 lg:pl-8">
            <button className="w-full sm:w-auto bg-zinc-900 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">map</span> Ver Plan de Transformación
            </button>
            <button className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-zinc-50 shadow-sm transition-colors text-sm flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span> Exportar Informe
            </button>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};
