import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

export const FlowAnalysis: React.FC = () => {
  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20">

        {/* 1. HERO SECTION */}
        <div className="mb-14 flex flex-col items-start gap-5 border-b border-zinc-200 pb-12">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
            <span className="material-symbols-outlined text-[14px]">timeline</span>
            Diagnóstico de Puntos de Fuga Institucional
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-display font-black text-zinc-900 tracking-[-0.03em] leading-tight">
            Flujos Críticos <br/><span className="text-zinc-400">del Cliente</span>
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            Los puntos de contacto transaccionales donde la confianza se construye — <strong className="text-zinc-900">y donde hoy se destruye drásticamente.</strong>
          </p>
        </div>

        {/* 2. EXECUTIVE JOURNEY HIGHLIGHTS (Bento) */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-[#18181b] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase opacity-70 mb-8">Diagnóstico General</h3>
            <div>
              <div className="text-5xl font-black text-white tracking-tighter mb-2">0/5</div>
              <p className="text-zinc-400 font-medium text-lg leading-snug">Flujos transaccionales cumplen estándares de autonomía fintech modernos.</p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 self-start bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
              <span className="material-symbols-outlined text-[14px]">error</span> Fallo Crítico
            </div>
          </div>
          
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <span className="material-symbols-outlined text-zinc-400 text-3xl mb-4">group_remove</span>
            <div>
              <div className="text-3xl font-black text-zinc-900 mb-1">4 de 5</div>
              <p className="text-sm font-medium text-zinc-500">flujos destruyen directamente la confianza del usuario.</p>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <span className="material-symbols-outlined text-orange-400 text-3xl mb-4">support_agent</span>
            <div>
              <div className="text-3xl font-black text-zinc-900 mb-1">3 de 5</div>
              <p className="text-sm font-medium text-zinc-500">requieren intervención y soporte manual forzoso.</p>
            </div>
          </div>
        </div>

        {/* 3. JOURNEY TIMELINE / CARDS */}
        <div className="relative">
          
          {/* Vertical Track Line (Hidden on small screens) */}
          <div className="hidden lg:block absolute left-[2.5rem] top-8 bottom-8 w-1 bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent rounded-full z-0"></div>

          <div className="flex flex-col gap-12 z-10 relative">

            {/* FLOW 1 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
              {/* Step indicator */}
              <div className="hidden lg:flex flex-col items-center shrink-0 w-20 relative z-10">
                <div className="w-14 h-14 bg-white border-[4px] border-zinc-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl font-black text-zinc-900">1</span>
                </div>
              </div>

              {/* Main Card */}
              <div className="flex-1 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                
                {/* Header */}
                <div className="px-8 py-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black">1</div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Inicio de Sesión</h3>
                      <p className="text-zinc-500 text-sm font-medium">Acceso al portal e identidad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg border border-red-100">Fricción Crítica</span>
                    <div className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1.5 rounded-lg tracking-wide flex items-center gap-2">
                      Score: <span className="text-red-600 text-sm font-black bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">2.5<span className="text-zinc-400 text-[10px]/10"></span></span>
                    </div>
                  </div>
                </div>

                {/* Content Split */}
                <div className="flex flex-col md:flex-row">
                  {/* Ideal State */}
                  <div className="flex-1 p-8 bg-emerald-50/30">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Estructura Operativa / Deber Ser
                    </h4>
                    <p className="text-zinc-700 text-[14px] leading-relaxed font-medium">Autenticación bancaria validada en milisegundos y protegida por los más altos estándares biométricos corporativos de seguridad activa.</p>
                  </div>
                  {/* Divider */}
                  <div className="w-full h-px md:w-px md:h-auto bg-zinc-200"></div>
                  {/* Audit State */}
                  <div className="flex-1 p-8 bg-red-50/50">
                    <h4 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Realidad de Auditoría
                    </h4>
                    <p className="text-zinc-900 text-[14px] font-semibold leading-relaxed mb-6">Proceso de acceso arcaico e inestable. Permite entrada sin validaciones perimetrales serias (Sin MFA nativo) y bloquea operaciones aleatoriamente.</p>
                  </div>
                </div>

                {/* Impact Footer */}
                <div className="bg-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Consecuencia Comercial:</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                    <span className="material-symbols-outlined text-red-500 shrink-0">trending_down</span>
                    <strong className="text-white text-sm lg:text-base font-bold truncate">Usuario pierde confianza inmediata antes de operar.</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOW 2 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
              <div className="hidden lg:flex flex-col items-center shrink-0 w-20 relative z-10">
                <div className="w-14 h-14 bg-white border-[4px] border-zinc-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl font-black text-zinc-900">2</span>
                </div>
              </div>

              <div className="flex-1 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="px-8 py-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black">2</div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Onboarding Institucional</h3>
                      <p className="text-zinc-500 text-sm font-medium">Verificación y apertura de cuenta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg border border-red-100">Fricción Crítica</span>
                    <div className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1.5 rounded-lg tracking-wide flex items-center gap-2">
                       Score: <span className="text-red-600 text-sm font-black bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">3.0</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8 bg-emerald-50/30">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Estructura Operativa / Deber Ser
                    </h4>
                    <p className="text-zinc-700 text-[14px] leading-relaxed font-medium">Aprobación jurídica y financiera 100% digital que permite la captación y custodia de los primeros fondos del cliente al instante.</p>
                  </div>
                  <div className="w-full h-px md:w-px md:h-auto bg-zinc-200"></div>
                  <div className="flex-1 p-8 bg-red-50/50">
                    <h4 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Realidad de Auditoría
                    </h4>
                    <p className="text-zinc-900 text-[14px] font-semibold leading-relaxed mb-6">Captación truncada llena de barreras documentales y formularios rígidos. Finaliza requiriendo intervención humana presencial forzosa.</p>
                  </div>
                </div>
                <div className="bg-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Consecuencia Comercial:</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="material-symbols-outlined text-red-500 shrink-0">door_front</span>
                    <strong className="text-white text-sm lg:text-base font-bold truncate">Abandono definitivo del proceso de apertura.</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOW 3 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
              <div className="hidden lg:flex flex-col items-center shrink-0 w-20 relative z-10">
                <div className="w-14 h-14 bg-white border-[4px] border-zinc-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl font-black text-zinc-900">3</span>
                </div>
              </div>

              <div className="flex-1 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="px-8 py-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black">3</div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Aporte de Capital</h3>
                      <p className="text-zinc-500 text-sm font-medium">Webhooks e integración de fondos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg border border-red-100">Fricción Crítica</span>
                    <div className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1.5 rounded-lg tracking-wide flex items-center gap-2">
                       Score: <span className="text-red-600 text-sm font-black bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">1.5</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8 bg-emerald-50/30">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Estructura Operativa / Deber Ser
                    </h4>
                    <p className="text-zinc-700 text-[14px] leading-relaxed font-medium">Vinculación bancaria autónoma (Webhooks). El flujo de dinero se mueve y se confirma de cuenta a cuenta con garantía auditable y liquidación en tiempo real.</p>
                  </div>
                  <div className="w-full h-px md:w-px md:h-auto bg-zinc-200"></div>
                  <div className="flex-1 p-8 bg-red-50/50">
                    <h4 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Realidad de Auditoría
                    </h4>
                    <p className="text-zinc-900 text-[14px] font-semibold leading-relaxed mb-6">Opacidad absoluta. El cliente deposita, carga papeleo manual y queda ciego ante su dinero hasta que un empleado aprueba operativamente el balance.</p>
                  </div>
                </div>
                <div className="bg-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Consecuencia Comercial:</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="material-symbols-outlined text-red-500 shrink-0">cancel_schedule_send</span>
                    <strong className="text-white text-sm lg:text-base font-bold truncate">Usuario no completa la inyección de fondos.</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOW 4 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
              <div className="hidden lg:flex flex-col items-center shrink-0 w-20 relative z-10">
                <div className="w-14 h-14 bg-white border-[4px] border-zinc-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl font-black text-zinc-900">4</span>
                </div>
              </div>

              <div className="flex-1 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="px-8 py-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black">4</div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Custodia y Portafolio</h3>
                      <p className="text-zinc-500 text-sm font-medium">Revisión de saldos y rendimiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg border border-red-100">Fricción Crítica</span>
                    <div className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1.5 rounded-lg tracking-wide flex items-center gap-2">
                       Score: <span className="text-red-600 text-sm font-black bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">2.0</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8 bg-emerald-50/30">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Estructura Operativa / Deber Ser
                    </h4>
                    <p className="text-zinc-700 text-[14px] leading-relaxed font-medium">Accesibilidad de custodia pura. El cliente valida y analiza sus fondos sin intermitencias institucionales o fallas en el registro de saldo.</p>
                  </div>
                  <div className="w-full h-px md:w-px md:h-auto bg-zinc-200"></div>
                  <div className="flex-1 p-8 bg-red-50/50">
                    <h4 className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Realidad de Auditoría
                    </h4>
                    <p className="text-zinc-900 text-[14px] font-semibold leading-relaxed mb-6">Sistema colapsado que muestra saldos transitorios en "cero" durante la espera del servidor, eliminando de golpe la solidez de los fondos expuestos.</p>
                  </div>
                </div>
                <div className="bg-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Consecuencia Comercial:</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="material-symbols-outlined text-red-500 shrink-0">speed</span>
                    <strong className="text-white text-sm lg:text-base font-bold truncate">Usuario entra en pánico financiero.</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOW 5 */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
              <div className="hidden lg:flex flex-col items-center shrink-0 w-20 relative z-10">
                <div className="w-14 h-14 bg-white border-[4px] border-zinc-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl font-black text-zinc-900">5</span>
                </div>
              </div>

              <div className="flex-1 bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="px-8 py-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-black">5</div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Retiro y Liquidación</h3>
                      <p className="text-zinc-500 text-sm font-medium">Salida de capital y garantías</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg border border-orange-100">Riesgo Alto</span>
                    <div className="bg-zinc-100 text-zinc-700 text-[11px] font-bold px-3 py-1.5 rounded-lg tracking-wide flex items-center gap-2">
                       Score: <span className="text-orange-600 text-sm font-black bg-white px-2 py-0.5 rounded shadow-sm border border-zinc-200">4.0</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8 bg-emerald-50/30">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Estructura Operativa / Deber Ser
                    </h4>
                    <p className="text-zinc-700 text-[14px] leading-relaxed font-medium">Liquidaciones con SLA riguroso. Total certidumbre en las fechas de salida de capital para el reaseguro del inversionista.</p>
                  </div>
                  <div className="w-full h-px md:w-px md:h-auto bg-zinc-200"></div>
                  <div className="flex-1 p-8 bg-orange-50/30">
                    <h4 className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Realidad de Auditoría
                    </h4>
                    <p className="text-zinc-900 text-[14px] font-semibold leading-relaxed mb-6">Inercia total en el desencadenamiento del retiro. El cliente envía la solicitud sin confirmar garantías temporales, entrando a otra cola de atención manual.</p>
                  </div>
                </div>
                <div className="bg-zinc-900 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Consecuencia Comercial:</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="material-symbols-outlined text-orange-500 shrink-0">phone_callback</span>
                    <strong className="text-white text-sm lg:text-base font-bold truncate">Usuario depende de soporte telefónico y se agota.</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </PageWrapper>
  );
};
