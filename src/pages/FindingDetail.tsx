import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { useParams, useNavigate } from 'react-router-dom';
import { mockFindings } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft, PlayCircle, Image as ImageIcon, AlertTriangle, Lightbulb } from 'lucide-react';

export const FindingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const finding = mockFindings.find(f => f.id === id);

  if (!finding) {
    return (
      <PageWrapper title="Finding Not Found">
        <button onClick={() => navigate('/findings')} className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Findings
        </button>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper 
      title={`Finding Detail: ${finding.id}`} 
      subtitle={`Flow: ${finding.flow} / Screen: ${finding.screen}`}
    >
      <div className="mb-6">
        <button onClick={() => navigate('/findings')} className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to List
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* SECTION 1 - Summary */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={finding.severity}>{finding.severity}</Badge>
              <Badge variant={finding.category}>{finding.category}</Badge>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">{finding.title}</h2>
            <p className="text-slate-700 leading-relaxed text-lg">{finding.description}</p>
          </section>

          {/* SECTION 4 - Explanation */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> Technical Context & Deviation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This issue occurs during the {finding.flow} sequence. According to standard fintech heuristics, 
              users expect seamless transitions. The current implementation introduces artificial friction 
              or anxiety due to poor system feedback. This deviates from modern standards (e.g., Robinhood, Interactive Brokers)
              which leverage optimistic UI patterns and clear financial transparency.
            </p>
          </section>

          {/* SECTION 5 - Recommendation */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm border-l-4 border-l-blue-600">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" /> Strategic Recommendation
            </h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-4">
              {finding.recommendation}
            </p>
            <div className="bg-blue-50/50 p-4 rounded text-sm text-slate-700 flex items-start gap-3">
              <div className="mt-0.5">
                <span className="font-semibold">Structural Issue?</span> {finding.isStructural ? 'Yes, requires architectural changes.' : 'No, fixable via UI/frontend update.'}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          
          {/* SECTION 2 - Business Impact */}
          <section className="bg-white rounded-lg border border-red-200 shadow-sm p-6 bg-red-50/10">
            <h3 className="text-base font-semibold text-red-800 mb-3 uppercase tracking-wider text-sm">Business Impact</h3>
            <p className="text-slate-800 font-medium mb-4">{finding.businessImpact}</p>
            <div className="pt-4 border-t border-red-100 flex items-center justify-between text-sm">
              <span className="text-slate-600">Direct Financial Risk:</span>
              <span className={`font-bold ${finding.financialRisk ? 'text-red-600' : 'text-slate-500'}`}>
                {finding.financialRisk ? 'YES' : 'NO'}
              </span>
            </div>
          </section>

          {/* SECTION 3 - Evidence */}
          <section className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-4">Evidence artifacts</h3>
            
            {finding.evidence.video && (
              <div className="aspect-video bg-slate-900 rounded-md mb-4 relative overflow-hidden group flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-mono">
                  {finding.evidence.timestamp || '00:00'}
                </div>
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {finding.evidence.video}
                </div>
              </div>
            )}

            {finding.evidence.screenshot && (
              <div className="aspect-[4/3] bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 flex-col gap-2">
                <ImageIcon className="w-8 h-8" />
                <span className="text-xs font-mono">{finding.evidence.screenshot}</span>
              </div>
            )}
          </section>

        </div>
      </div>
    </PageWrapper>
  );
};
