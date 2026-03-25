import React, { useState, useMemo } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { auditFindings } from '../data/findingsData';

export const Findings: React.FC = () => {
  const [sevFilter, setSevFilter] = useState('Todas');
  const [catFilter, setCatFilter] = useState('Todas');

  const filteredFindings = useMemo(() => {
    return auditFindings.filter((item) => {
      const sevMatch = sevFilter === 'Todas' || item.sev === sevFilter;
      const catMatch = catFilter === 'Todas' || item.categoria === catFilter;
      return sevMatch && catMatch;
    });
  }, [sevFilter, catFilter]);

  return (
    <PageWrapper>
      <div className="animate-fade-in pb-20 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-black text-zinc-900 tracking-tight mb-4">Hallazgos identificados</h2>
          <p className="text-zinc-500 font-medium">Listado consolidado de debilidades detectadas en la plataforma</p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-4 mb-8 bg-white p-4 border border-zinc-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 pr-4 border-r border-zinc-100">
            <span className="material-symbols-outlined text-[18px] text-zinc-400">filter_list</span>
            <span className="text-sm font-bold text-zinc-700 uppercase tracking-widest text-[11px]">Filtros</span>
          </div>
          <select value={sevFilter} onChange={(e) => setSevFilter(e.target.value)} className="bg-zinc-50 border border-zinc-200 text-sm font-medium rounded-lg px-4 py-2.5 text-zinc-700 outline-none hover:border-zinc-300 transition-colors cursor-pointer">
            <option>Severidad: Todas</option>
            <option>Crítico</option>
            <option>Alto</option>
            <option>Medio</option>
          </select>
          <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} className="bg-zinc-50 border border-zinc-200 text-sm font-medium rounded-lg px-4 py-2.5 text-zinc-700 outline-none hover:border-zinc-300 transition-colors cursor-pointer">
            <option>Categoría: Todas</option>
            <option>Seguridad</option>
            <option>UX</option>
            <option>Funcional</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
                <th className="py-5 px-6">ID</th>
                <th className="py-5 px-6 w-1/3 text-white">Hallazgo</th>
                <th className="py-5 px-6">Categoría</th>
                <th className="py-5 px-6">Severidad</th>
                <th className="py-5 px-6">Impacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredFindings.map((item, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 text-[13px] font-bold text-zinc-400">{item.id}</td>
                  <td className="py-5 px-6 text-[14px] font-semibold text-zinc-900 leading-snug pr-4">{item.hallazgo}</td>
                  <td className="py-5 px-6">
                    <span className="bg-zinc-100/80 text-zinc-600 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-zinc-200">{item.categoria}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider border ${
                      item.sev === 'Crítico' ? 'bg-red-50 text-red-700 border-red-200' : 
                      item.sev === 'Alto' ? 'bg-orange-50 text-orange-700 border-orange-200' : 
                      item.sev === 'Medio' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                      'bg-zinc-100 text-zinc-700 border-zinc-200'
                    }`}>
                      {item.sev}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-[13px] text-zinc-600 font-medium leading-snug">{item.impacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
};
