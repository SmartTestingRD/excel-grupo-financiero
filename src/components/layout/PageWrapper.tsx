import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { NavLink } from 'react-router-dom';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex relative">
      <Sidebar onOpenPresentation={() => setShowModal(true)} />

      {/* Modal de Presentación / Exportación */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          
          <div className="bg-white rounded-[2rem] w-full max-w-md relative z-10 shadow-2xl p-8 transform animate-fade-in scale-100">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px] text-zinc-900">co_present</span>
            </div>
            
            <h3 className="text-2xl font-black text-zinc-900 mb-2">Informe Ejecutivo</h3>
            <p className="text-zinc-500 font-medium text-[15px] mb-8 leading-relaxed">
              El reporte de diagnóstico estratégico está disponible en dos formatos. ¿Cómo deseas proceder?
            </p>
            
            <div className="flex flex-col gap-3">
              <a href="/board-presentation.html" target="_blank" rel="noopener noreferrer" onClick={() => setShowModal(false)} className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-zinc-200 hover:border-zinc-900 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-zinc-900 transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-zinc-600 group-hover:text-white transition-colors">visibility</span>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-zinc-900 text-[15px]">Ver Presentación Interactiva</h4>
                  <p className="text-[13px] text-zinc-500 font-medium">Abre en una nueva pestaña</p>
                </div>
              </a>
              
              <a href="/full-report.html?print=true" target="_blank" rel="noopener noreferrer" onClick={() => setShowModal(false)} className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-zinc-200 hover:border-zinc-900 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-zinc-900 transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px] text-zinc-600 group-hover:text-white transition-colors">download</span>
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-zinc-900 text-[15px]">Descargar Reporte Integral</h4>
                  <p className="text-[13px] text-zinc-500 font-medium">Documento ejecutivo de 5 páginas (PDF)</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area - Push right by sidebar width */}
      <div className="flex-1 ml-[260px] flex flex-col h-screen overflow-hidden bg-white relative">
        
        {/* PREMIUM STICKY HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200 px-6 h-16 flex items-center justify-between shadow-sm shrink-0 gap-4">
          
          {/* LEFT: Logos */}
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logoexcel.png" alt="Excel Inversiones" className="h-7 object-contain" />
            <div className="hidden lg:block h-4 w-px bg-zinc-300 ml-2"></div>
            <span className="hidden lg:block text-[13px] font-semibold text-zinc-800">Auditoría Estratégica</span>
          </div>

          {/* CENTER: Navigation */}
          <nav className="hidden xl:flex items-center gap-6 justify-center flex-1">
            <NavLink to="/" className={({ isActive }) => `text-[13px] font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Panel</NavLink>
            <NavLink to="/findings" className={({ isActive }) => `text-[13px] font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Hallazgos</NavLink>
            <NavLink to="/systemic-issues" className={({ isActive }) => `text-[13px] font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Brechas</NavLink>
            <NavLink to="/evidence" className={({ isActive }) => `text-[13px] font-bold transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Evidencia</NavLink>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Auditoría Estratégica</span>
              <span className="text-[11px] font-semibold text-zinc-800 leading-none mt-1">Marzo 2026</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 shrink-0">
              <img src="https://i.pravatar.cc/100?img=33" alt="Auditor Avatar" className="w-full h-full object-cover" />
            </div>
            
            <button onClick={() => setShowModal(true)} className="hidden sm:flex bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-[13px] font-bold transition-colors items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">co_present</span> Presentación
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-10 lg:px-12 lg:py-10 custom-scrollbar bg-[#fbfbfa]">
          <div className="max-w-[1400px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
