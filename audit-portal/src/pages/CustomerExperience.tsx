import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const CustomerExperience: React.FC = () => {
  const stages = [
    {
      stage: '1. Inicio de sesión',
      expect: 'Seguridad perimetral absoluta y fricción cero (FaceID/Huella).',
      real: 'Solo contraseña alfanumérica, sin reseteo autónomo estable.',
      result: 'Desconfianza'
    },
    {
      stage: '2. Navegación',
      expect: 'Fluidez, claridad financiera y descubrimiento intuitivo.',
      real: 'Interfáz estática, menú sepultado, gráficas inexistentes.',
      result: 'Frustración'
    },
    {
      stage: '3. Transacción',
      expect: 'Control total de la orden, acuse inmediato, certeza.',
      real: 'Tiempos de carga altos, sin feedback visual tras envío.',
      result: 'Incertidumbre'
    },
    {
      stage: '4. Seguimiento',
      expect: 'Notificaciones liquidación proactivas y estado de cuenta visible.',
      real: 'Silencio operativo post-transacción, dependencia de asesor humano.',
      result: 'Abandono'
    }
  ];

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-7xl mx-auto">
        
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm mb-6 inline-flex">
            <span className="material-symbols-outlined text-[14px]">sentiment_dissatisfied</span>
            Journey Audit
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-display font-black text-zinc-900 tracking-tight leading-tight mb-4">Experiencia del Cliente</h2>
          <p className="text-zinc-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            La disonancia absoluta entre la promesa de la marca y la realidad de la plataforma destruye directamente la adopción y confianza del portafolio móvil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((st, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-[2rem] p-8 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-bl-[100%] opacity-50 -z-10 transition-transform group-hover:scale-125"></div>
              
              <h3 className="text-xl font-black text-zinc-900 mb-8 pb-4 border-b border-zinc-100 relative z-10">{st.stage}</h3>
              
              <div className="mb-6 relative z-10">
                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block mb-2">Expectativa del usuario</span>
                <p className="text-[15px] font-medium text-zinc-800 leading-relaxed">{st.expect}</p>
              </div>

              <div className="mb-10 relative z-10">
                <span className="text-[10px] font-black uppercase text-red-500 tracking-widest block mb-2">Realidad del sistema</span>
                <p className="text-[15px] font-medium text-zinc-600 leading-relaxed">{st.real}</p>
              </div>

              <div className="mt-auto bg-zinc-50 rounded-xl p-5 flex flex-col gap-2 border border-zinc-200/80 relative z-10">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em]">Resultado Emocional</span>
                <span className="text-sm font-black text-red-700 bg-red-100 px-3 py-1.5 rounded-lg text-center shadow-sm w-full">{st.result}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
};
