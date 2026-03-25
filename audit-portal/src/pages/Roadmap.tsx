import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const Roadmap: React.FC = () => {
  const fases = [
    {
      fase: 'FASE 1',
      tiempo: '0–30 días',
      titulo: 'Seguridad Perimetral y Contención',
      desc: 'Blindaje inmediato de endpoints y cierre de exposición de datos.',
      hitos: ['Implementación de biometría nativa', 'Autenticación en dos pasos (MFA)', 'Sanitización de endpoints públicos', 'Cierre automático de sesión'],
      color: 'border-red-500',
      bgText: 'text-red-600',
      bgFondo: 'bg-red-50'
    },
    {
      fase: 'FASE 2',
      tiempo: '30–60 días',
      titulo: 'Rediseño Estructural de UX/UI',
      desc: 'Reconstrucción visual para cumplir estándares mínimos del mercado.',
      hitos: ['Lanzamiento de Dark Mode', 'Dashboard interactivo de portafolio', 'Navegación sin laberintos', 'Estandarización de tipografía'],
      color: 'border-orange-500',
      bgText: 'text-orange-600',
      bgFondo: 'bg-orange-50'
    },
    {
      fase: 'FASE 3',
      tiempo: '60–90 días',
      titulo: 'Core Transaccional Seguro',
      desc: 'Garantizar que el movimiento de capital sea infalible y transparente.',
      hitos: ['Motor de aportes con feedback inmediato', 'Retiros con validación cruzada', 'Exportación de PDFs íntegros', 'Recibos digitales en tiempo real'],
      color: 'border-emerald-500',
      bgText: 'text-emerald-600',
      bgFondo: 'bg-emerald-50'
    },
    {
      fase: 'FASE 4',
      tiempo: '90–120 días',
      titulo: 'Inteligencia y Retención',
      desc: 'Convertir la aplicación de transaccional a predictiva y útil.',
      hitos: ['Notificaciones push proactivas', 'Motor de Analytics de comportamiento', 'Alertas de mercado', 'Optimización de latencia total'],
      color: 'border-blue-500',
      bgText: 'text-blue-600',
      bgFondo: 'bg-blue-50'
    }
  ];

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-[3.5rem] font-display font-black text-zinc-900 tracking-tight leading-none mb-4">Plan de Transformación</h2>
          <h3 className="text-xl md:text-2xl font-black text-zinc-400 tracking-tight mb-6">Ruta de implementación para eliminar riesgos y evolucionar la plataforma digital</h3>
          <p className="text-zinc-600 font-medium text-[17px] max-w-2xl mx-auto leading-relaxed">
            El siguiente plan permite cerrar las brechas identificadas en un período duro de <strong>3 a 4 meses</strong>, priorizando la contención inmediata del riesgo y reconstruyendo posteriormente la experiencia del cliente.
          </p>
        </div>

        <div className="relative border-l border-zinc-200 ml-4 md:ml-10">
          {fases.map((f, idx) => (
            <div key={idx} className="mb-14 relative pl-8 md:pl-16 group hover:-translate-y-1 transition-transform duration-300">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 -translate-x-[4.5px] w-2.5 h-2.5 rounded-full bg-white border-2 transition-transform duration-300 group-hover:scale-150 ${f.color}`}></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                
                {/* Time Indicator */}
                <div className="w-40 shrink-0 relative mt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[11px] font-black uppercase tracking-widest ${f.bgText}`}>{f.fase}</span>
                  </div>
                  <span className="text-2xl font-black text-zinc-900 tracking-tight">{f.tiempo}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 border border-zinc-200 rounded-[2rem] p-8 shadow-sm transition-all duration-300 group-hover:shadow-lg bg-white relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 -z-10 rounded-bl-full ${f.bgFondo}`}></div>
                  
                  <h4 className="text-[22px] font-black text-zinc-900 mb-2 leading-snug">{f.titulo}</h4>
                  <p className="text-zinc-500 font-medium text-[15px] leading-relaxed mb-6">{f.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {f.hitos.map((hito, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm">
                        <span className={`material-symbols-outlined text-[18px] mt-px ${f.bgText}`}>check_circle</span>
                        <span className="font-semibold text-zinc-800 leading-snug">{hito}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
};
