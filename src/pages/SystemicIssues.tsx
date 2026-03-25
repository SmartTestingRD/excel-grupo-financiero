import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const SystemicIssues: React.FC = () => {
  const brechas = [
    {
      id: '01',
      nombre: 'Ausencia de modelo de seguridad moderno',
      desc: 'El flujo transaccional confía en esquemas frágiles, omitiendo biometría nativa y protocolos de autenticación fuerte (MFA) para extracción de capital.',
      impactTag: 'Crítico',
      areas: ['Autenticación', 'Retiros', 'API Base'],
      impactoNegocio: ['Exposición financiera altísima', 'Riesgo de fraude de identidad', 'Penalizaciones regulatorias'],
      color: 'red'
    },
    {
      id: '02',
      nombre: 'Falta de diseño centrado en el usuario',
      desc: 'Interfaz transaccional sin feedback visual, jerarquía confusa y omisión de confirmaciones del sistema en acciones que mueven dinero.',
      impactTag: 'Crítico',
      areas: ['Onboarding', 'Portafolio', 'Transacciones'],
      impactoNegocio: ['Pérdida de clientes antes del primer fondeo', 'Altas tasas de abandono operativo', 'Reputación digital dañada'],
      color: 'orange'
    },
    {
      id: '03',
      nombre: 'Dependencia de procesos manuales',
      desc: 'Rutinas que deberían ser autónomas —reseteo de claves, recuperación de saldos— están atadas a intervención humana (Soporte Técnico).',
      impactTag: 'Alto',
      areas: ['Atención a Cliente', 'Backoffice', 'Recuperación de cuenta'],
      impactoNegocio: ['Incremento dramático de costos operativos', 'Falla de SLAs en fines de semana', 'Estancamiento en escalabilidad'],
      color: 'amber'
    },
    {
      id: '04',
      nombre: 'Ausencia de capacidades digitales clave',
      desc: 'La plataforma carece de notificaciones push proactivas, reportes on-demand fiables y gráficas dinámicas de rendimiento de inversión.',
      impactTag: 'Alto',
      areas: ['Notificaciones', 'Reporteo', 'Experiencia'],
      impactoNegocio: ['Limitación grave de ingresos digitales', 'Bajo nivel de inversión recurrente', 'Fuga de capital a otras aplicaciones'],
      color: 'emerald'
    },
    {
      id: '05',
      nombre: 'Falta de arquitectura orientada a crecimiento',
      desc: 'Core monolítico y flujos heredados que imposibilitan iterar servicios rápidamente o aislar sectores caídos en la app.',
      impactTag: 'Crítico',
      areas: ['Ingeniería', 'Mantenimiento', 'DevOps'],
      impactoNegocio: ['Downtimes (Caídas de servicio generalizadas)', 'Costos hundidos por soporte infinito', 'Time-to-market para lanzar productos nuevos es excesivo'],
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', fill: 'bg-red-600', hover: 'hover:border-red-400', tag: 'bg-red-600 text-white' };
      case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', fill: 'bg-orange-600', hover: 'hover:border-orange-400', tag: 'bg-red-600 text-white' };
      case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', fill: 'bg-amber-600', hover: 'hover:border-amber-400', tag: 'bg-amber-600 text-white' };
      case 'emerald': return { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', fill: 'bg-emerald-600', hover: 'hover:border-emerald-400', tag: 'bg-amber-600 text-white' };
      case 'blue': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', fill: 'bg-blue-600', hover: 'hover:border-blue-400', tag: 'bg-red-600 text-white' };
      default: return { bg: 'bg-zinc-50', border: 'border-zinc-200', text: 'text-zinc-700', fill: 'bg-zinc-600', hover: 'hover:border-zinc-400', tag: 'bg-zinc-600 text-white' };
    }
  };

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-5xl mx-auto">
        
        {/* SUMMARY SECTION */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight leading-tight mb-4">Brechas Sistémicas</h2>
          
          <div className="bg-zinc-900 text-white p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden mt-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black"></div>
            <p className="text-xl md:text-[22px] font-medium leading-relaxed relative z-10 font-display text-zinc-100">
              "Las brechas identificadas evidencian que la plataforma <strong className="font-black text-white">no fue diseñada para operar como un canal digital financiero moderno.</strong>"
            </p>
            <p className="mt-4 text-base text-zinc-400 font-medium relative z-10">
              Esto <span className="text-red-400 font-bold">limita la capacidad de crecimiento</span>, incrementa estructuralmente el riesgo y <span className="text-orange-400 font-bold">afecta irreparablemente la experiencia del cliente.</span>
            </p>
          </div>
        </div>

        {/* GAPS LIST */}
        <div className="flex flex-col gap-6">
          {brechas.map((b, idx) => {
            const styles = getColorClasses(b.color);
            return (
              <div key={idx} className={`bg-white border rounded-[1.5rem] p-8 shadow-sm transition-all duration-300 relative group overflow-hidden ${styles.border} ${styles.hover}`}>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full">
                  {/* Left Column: Def */}
                  <div className="flex-1 md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm ${styles.tag}`}>
                        Riesgo {b.impactTag}
                      </span>
                    </div>
                    <h3 className="text-[22px] font-black text-zinc-900 mb-3 leading-snug">{b.nombre}</h3>
                    <p className="text-zinc-600 font-medium text-[15px] leading-relaxed mb-6">
                      {b.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {b.areas.map((area, i) => (
                        <span key={i} className={`bg-zinc-50 text-zinc-600 text-[11px] font-bold px-3 py-1.5 flex items-center gap-1.5 rounded-md border border-zinc-200`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${styles.fill} opacity-60`}></span>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Business Impact */}
                  <div className={`md:w-80 shrink-0 ${styles.bg} rounded-2xl p-6 border ${styles.border}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`material-symbols-outlined text-[18px] ${styles.text}`}>request_quote</span>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${styles.text}`}>Impacto en Negocio</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {b.impactoNegocio.map((impacto, x) => (
                        <li key={x} className="flex gap-2 items-start">
                          <span className={`material-symbols-outlined text-[16px] mt-0.5 ${styles.text}`}>arrow_right</span>
                          <span className="text-[14px] font-bold text-zinc-800 leading-snug">{impacto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
};
