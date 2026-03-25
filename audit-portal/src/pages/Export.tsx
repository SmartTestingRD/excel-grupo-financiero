import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export const Export: React.FC = () => {
  const [downloading, setDownloading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleSimulatedDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    }, 2000);
  };

  return (
    <PageWrapper title="Export & Distribution" subtitle="Generate Executive PDF Brief">
      
      <div className="max-w-2xl mt-8">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 text-center flex flex-col items-center">
          
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-10 h-10" />
          </div>
          
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Executive Summary Report</h2>
          <p className="text-slate-500 mb-8 max-w-md">
            Generates a high-fidelity, print-ready 15-page PDF detailing the audit methodology, scorecard, critical findings, and the 90-day remediation strategy.
          </p>

          <button 
            onClick={handleSimulatedDownload}
            disabled={downloading || done}
            className={`flex items-center gap-3 px-8 py-4 rounded-md font-medium text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
              done ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-slate-800'
            }`}
          >
            {downloading ? (
               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : done ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            {downloading ? 'Compiling PDF...' : done ? 'Export Complete' : 'Download Executive Report (PDF)'}
          </button>

        </div>
      </div>

    </PageWrapper>
  );
};
