import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const Evidence: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'seguridad' | 'ux' | 'friccion' | 'operacion'>('seguridad');

  const evidencias = {
    seguridad: {
      titulo: 'Acceso y Seguridad Básica',
      tag: 'Riesgo Crítico',
      tagColor: 'bg-red-600 text-white',
      hallazgo: 'Autenticación frágil y nula biometría',
      desc: 'El flujo inicial de inicio de sesión no implementa Autenticación Multifactor (MFA) obligatoria, dejando las bóvedas de capital expuestas a simple robo de credenciales.',
      consecuencia: 'Un atacante con un volcado de correos y contraseñas públicas (Leak) puede entrar inmediatamente y liquidar fondos sin una sola alerta biométrica secundaria al usuario legítimo.',
      videoUrl: '/evidences/login.mp4'
    },
    ux: {
      titulo: 'Dashboard y Portafolio',
      tag: 'Diseño Obsoleto',
      tagColor: 'bg-orange-600 text-white',
      hallazgo: 'Telemetría inerte y carga cognitiva',
      desc: 'La pantalla principal del portafolio arroja números sin contexto. Las gráficas no permiten interacción profunda y el diseño visual carece de jerarquía institucional.',
      consecuencia: 'Sensación inmediata de desconfianza al no entender "qué hace mi dinero ahora mismo", provocando que los nuevos inversores abandonen la plataforma a los 3 días.',
      videoUrl: '/evidences/balance.mp4'
    },
    friccion: {
      titulo: 'Aportes y Fondeo',
      tag: 'Impacto a Ingresos',
      tagColor: 'bg-emerald-600 text-white',
      hallazgo: 'Procesos de transferencia bloqueantes',
      desc: 'Formularios que obligan a validaciones manuales excesivas, ausencia de integraciones bancarias transparentes (R2P) y cero feedback tras someter una orden.',
      consecuencia: 'Porciones altísimas de capital frenado en el "Check-out" debido a que la interfaz no transmite certeza de que el abono se haya reflejado.',
      videoUrl: '/evidences/transaccion - aporte fondos.mp4'
    },
    operacion: {
      titulo: 'Estados de Cuenta y Documentación',
      tag: 'Cuello de Botella',
      tagColor: 'bg-blue-600 text-white',
      hallazgo: 'Lectura densa no orientada a móvil',
      desc: 'Los procesos para solicitar y leer un estado de cuenta son profundamente ineficientes, requiriendo en múltiples ocasiones llamar a la mesa de ayuda institucional.',
      consecuencia: 'Drenaje excesivo de horas laborales en soporte técnico por procesos que en un neo-banco son 100% autogestionados por el cliente.',
      videoUrl: '/evidences/estados.mp4'
    }
  };

  const currentData = evidencias[activeTab];

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-6xl mx-auto h-[max(80vh,600px)] flex flex-col">
        
        {/* HEADER */}
        <div className="mb-10 text-center shrink-0">
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight leading-tight mb-4">Muro de Evidencias</h2>
          <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto">
            Registro visual y trazable de las vulnerabilidades y fricciones capturadas interactuando con flujos de capital reales en la plataforma móvil.
          </p>
        </div>

        {/* TABS NAVEGADORAS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 shrink-0">
          {[
            { id: 'seguridad', label: '1. Modelo de Seguridad', icon: 'lock' },
            { id: 'ux', label: '2. Experiencia e Interfaz', icon: 'smartphone' },
            { id: 'friccion', label: '3. Fricción al Capital', icon: 'attach_money' },
            { id: 'operacion', label: '4. Intervención Manual', icon: 'support_agent' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-zinc-900 text-white shadow-md scale-105'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              <span className={`material-symbols-outlined text-[18px] ${activeTab === tab.id ? 'opacity-100' : 'opacity-70'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENIDO INTERACTIVO */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
          
          {/* MEDIA BOX (Real Video Player) */}
          <div className="lg:w-3/5 bg-zinc-900 border border-zinc-800 rounded-[2rem] flex items-center justify-center relative overflow-hidden group shadow-xl">
            <video 
              key={currentData.videoUrl}
              src={currentData.videoUrl} 
              className="w-full h-full object-contain absolute inset-0"
              autoPlay 
              loop 
              muted 
              playsInline
            />
            
            <div className="absolute top-6 left-6 flex items-center gap-2 text-white bg-red-600/90 backdrop-blur-md shadow-sm border border-red-500/50 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest z-20">
              <span className="material-symbols-outlined text-[14px]">fiber_manual_record</span> 
              Grabación en vivo
            </div>
            
            {/* Play overlay tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* SIDE INFORMATION CARD */}
          <div className="lg:w-2/5 flex flex-col bg-white border border-zinc-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-50 rounded-bl-full -z-10 pointer-events-none"></div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6 shrink-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm ${currentData.tagColor}`}>
                  {currentData.tag}
                </span>
              </div>

              <h3 className="text-[28px] md:text-3xl font-black text-zinc-900 mb-2 leading-tight shrink-0">
                {currentData.titulo}
              </h3>
              
              <p className="text-lg font-bold text-zinc-600 mb-8 leading-snug tracking-tight shrink-0">
                {currentData.hallazgo}
              </p>

              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">Descripción del Hallazgo</span>
                  <p className="text-[15px] font-medium text-zinc-700 leading-relaxed">
                    {currentData.desc}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">Consecuencia a escala Corporativa</span>
                  <p className="text-[15px] font-bold text-red-900 leading-relaxed bg-red-50 p-4 rounded-xl border border-red-100">
                    {currentData.consecuencia}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};
