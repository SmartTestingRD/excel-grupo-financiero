import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const CustomerFriction: React.FC = () => {

  const stages = [
    {
      id: 1,
      nombre: 'Inicio de sesión',
      desc: 'El primer punto de contacto (Apertura de App).',
      esperado: 'Acceso hiper-rápido, biométrico y con percepción táctil de alta seguridad institucional.',
      realidad: 'El usuario no percibe seguridad en el acceso a su capital al requerir únicamente una contraseña estática en texto.',
      emocion: 'Desconfianza en el sistema',
      resultado: 'El usuario desconfía de almacenar montos altos en la plataforma.',
      scoreLabel: 'Percepción de Seguridad',
      score: 2.5
    },
    {
      id: 2,
      nombre: 'Onboarding (Creación de cuenta)',
      desc: 'Vinculación inicial y captura documental del cliente.',
      esperado: 'Flujo digital ágil, segmentado por pasos claros con auto-guardado y validación OCR inmediata.',
      realidad: 'El usuario se enfrenta a un muro cognitivo de formularios legales asimétricos sin asistencia dinámica contextual.',
      emocion: 'Frustración y Sobrecarga',
      resultado: 'El usuario abandona el proceso de alta antes de concluir.',
      scoreLabel: 'Tasa de Conversión (Enrollment)',
      score: 3.0
    },
    {
      id: 3,
      nombre: 'Navegación / Consulta de portafolio',
      desc: 'Revisión del rendimiento y estatus del capital invertido.',
      esperado: 'Claridad instantánea sobre rentabilidad diaria, proyecciones transparentes y jerarquía visual financiera.',
      realidad: 'El usuario no entiende cómo operar la plataforma y es incapaz de deducir, a simple vista, si está ganando o perdiendo su dinero.',
      emocion: 'Confusión e Incertidumbre',
      resultado: 'El usuario pierde interés y reduce su frecuencia de interacción.',
      scoreLabel: 'Autonomía de Análisis',
      score: 4.5
    },
    {
      id: 4,
      nombre: 'Ejecución de transacciones',
      desc: 'Aportes de liquidez a un fondo de inversión.',
      esperado: 'Movimientos de capital fluidos (1-clic directos), con comprobación instantánea de cuentas origen.',
      realidad: 'El usuario experimenta fricción extrema para fondear su cuenta, topándose con bloqueos preventivos y pantallas sin salida táctica.',
      emocion: 'Ansiedad e Inseguridad Financiera',
      resultado: 'El usuario no concreta sus aportes recurrentes.',
      scoreLabel: 'Fluidez de Aportación',
      score: 3.5
    },
    {
      id: 5,
      nombre: 'Seguimiento / Confirmación',
      desc: 'Visibilidad post-orden y obtención de comprobantes oficiales.',
      esperado: 'Generación automática de recibos fiscales y notificaciones Push confirmando liquidación exitosa de aportes.',
      realidad: 'La aplicación opera en silencio absoluto, dejando las órdenes "en el limbo" sin generar comprobantes digitales válidos al instante.',
      emocion: 'Irritación y Desamparo Operativo',
      resultado: 'El usuario exige asistencia técnica humana por canales tradicionales.',
      scoreLabel: 'Certeza Transaccional',
      score: 2.0
    }
  ];

  const getScoreColor = (score: number) => {
    if (score < 5) return 'text-red-600 bg-red-50 border-red-200';
    if (score < 8) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  const getScoreDot = (score: number) => {
    if (score < 5) return 'bg-red-500';
    if (score < 8) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-5xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center pt-8">
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-900 tracking-tight leading-tight mb-4">Experiencia del Cliente</h2>
          <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold mb-8">
            Cómo el usuario percibe la plataforma en cada punto de interacción
          </p>
          
          <div className="bg-red-50 border border-red-100 p-8 rounded-[2rem] max-w-3xl mx-auto text-center shadow-sm">
            <span className="material-symbols-outlined text-red-500 text-4xl mb-3">warning</span>
            <p className="text-[20px] font-medium text-red-900 leading-relaxed font-display">
              "La experiencia digital actual no cumple con las expectativas de una plataforma financiera moderna, <strong className="font-black">afectando radicalmente la confianza, la usabilidad y la retención del capital del cliente.</strong>"
            </p>
          </div>
        </div>

        {/* JOURNEY STAGES LIST */}
        <div className="flex flex-col gap-6 relative">
          
          {/* Vertical Timeline Line (desktop only) */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-zinc-200 z-0"></div>

          {stages.map((stage) => {
            const scoreStyles = getScoreColor(stage.score);
            const dotColor = getScoreDot(stage.score);

            return (
              <div key={stage.id} className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 group">
                
                {/* Timeline Number & Basic Info */}
                <div className="lg:w-1/4 flex flex-row lg:flex-col items-start gap-4 lg:gap-2 pt-2 bg-white rounded-2xl p-4 lg:p-0 border border-zinc-200 lg:border-none shadow-sm lg:shadow-none relative">
                  
                  {/* Step Circle */}
                  <div className="w-16 h-16 shrink-0 bg-zinc-900 text-white font-black text-3xl rounded-full flex items-center justify-center shadow-lg lg:absolute lg:-left-8 lg:-translate-x-1/2 lg:top-4 lg:border-4 lg:border-white transition-transform group-hover:scale-110">
                    {stage.id}
                  </div>
                  
                  <div className="flex-1 lg:pl-12 lg:pt-3">
                    <h3 className="text-xl font-black text-zinc-900 leading-tight mb-1">{stage.nombre}</h3>
                    <p className="text-sm font-medium text-zinc-500 leading-snug mb-4">{stage.desc}</p>
                    
                    {/* Score Ribbon */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-bold text-xs uppercase tracking-wider ${scoreStyles}`}>
                      <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`}></span>
                      {stage.scoreLabel}: {stage.score.toFixed(1)} / 10
                    </div>
                  </div>
                </div>

                {/* The Comparison Card */}
                <div className="lg:w-3/4 bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-sm group-hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 relative">
                    {/* Esperado (Green side) */}
                    <div className="flex-1 bg-green-50/50 p-5 rounded-2xl border border-green-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                        <h4 className="font-bold text-green-800 text-sm uppercase tracking-widest">Esperado / Estándar</h4>
                      </div>
                      <p className="text-[15px] font-medium text-green-900 leading-relaxed">
                        {stage.esperado}
                      </p>
                    </div>
                    
                    {/* Realidad (Red side) */}
                    <div className="flex-1 bg-red-50/50 p-5 rounded-2xl border border-red-100 relative">
                      {/* VS badge (Desktop only visible in middle) */}
                      <div className="hidden sm:flex absolute -left-[20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full items-center justify-center font-black text-[12px] text-zinc-400 z-10 shadow-sm">
                        VS
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-[18px] text-red-600">cancel</span>
                        <h4 className="font-bold text-red-800 text-sm uppercase tracking-widest">Realidad de la App</h4>
                      </div>
                      <p className="text-[15px] font-medium text-red-900 leading-relaxed">
                        {stage.realidad}
                      </p>
                    </div>
                  </div>

                  {/* Emotional & Business Outcome */}
                  <div className="flex flex-col sm:flex-row border-t border-zinc-100 pt-5 gap-4">
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Resultado Emocional</span>
                      <span className="text-zinc-900 font-extrabold text-[17px]">{stage.emocion}</span>
                    </div>

                    <div className="flex-[2] bg-zinc-900 text-white rounded-xl p-4 flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-2xl shrink-0">crisis_alert</span>
                      <div>
                        <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-0.5">Resultado del Usuario:</span>
                        <strong className="text-[16px] xl:text-[18px] font-black leading-tight block">
                          {stage.resultado}
                        </strong>
                      </div>
                    </div>
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
