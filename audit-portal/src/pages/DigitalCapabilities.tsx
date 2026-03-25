import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const DigitalCapabilities: React.FC = () => {
  const tableData = [
    { expect: 'Autenticación segura (Biometría, MFA)', current: 'Solo contraseña débil' },
    { expect: 'Visualización interactiva de portafolio', current: 'Solo vista texto plano' },
    { expect: 'Notificaciones push en tiempo real', current: 'No existen' },
    { expect: 'Confirmaciones instantáneas de transacción', current: 'Email retrasado / Sin acuse en app' },
    { expect: 'Recuperación de cuenta autónoma', current: 'Dependencia absoluta de soporte' },
    { expect: 'Exportación de estados consolidados', current: 'Proceso manual y con alta tasa de error' },
  ];

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm mb-6 inline-flex">
            <span className="material-symbols-outlined text-[14px]">devices</span>
            Assessment
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight">Capacidades Digitales</h2>
          <p className="text-zinc-500 font-medium mt-4 text-lg">Brecha estructural entre lo que se oferta al mercado y la realidad entregada de la plataforma.</p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-lg shadow-zinc-200/50">
          <div className="grid grid-cols-2 bg-zinc-900 text-white p-8 border-b border-zinc-800">
            <div className="text-[12px] font-black uppercase tracking-widest pl-4">Capacidad Esperada (Mercado)</div>
            <div className="text-[12px] font-black uppercase tracking-widest pl-4 text-red-400">Capacidad Actual (Plataforma)</div>
          </div>
          
          <div className="divide-y divide-zinc-100">
            {tableData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 p-8 hover:bg-zinc-50 transition-colors">
                <div className="flex items-center gap-4 pl-4">
                  <span className="material-symbols-outlined text-emerald-500 text-[24px]">check_circle</span>
                  <span className="text-[16px] font-bold text-zinc-900 leading-snug pr-4">{row.expect}</span>
                </div>
                <div className="flex items-center gap-4 pl-4 border-l border-zinc-100 ml-4">
                  <span className="material-symbols-outlined text-red-500 text-[24px] bg-red-50 rounded-full p-1">cancel</span>
                  <span className="text-[16px] font-semibold text-zinc-600 leading-snug">{row.current}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};
