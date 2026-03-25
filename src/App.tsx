import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Scorecard } from './pages/Scorecard';
import { Findings } from './pages/Findings';
import { FindingDetail } from './pages/FindingDetail';
import { SystemicIssues } from './pages/SystemicIssues';
import { BusinessRisk } from './pages/BusinessRisk';
import { Recommendation } from './pages/Recommendation';
import { Roadmap } from './pages/Roadmap';
import { Export } from './pages/Export';
import { RiskCenter } from './pages/RiskCenter';
import { FlowAnalysis } from './pages/FlowAnalysis';
import { CustomerExperience } from './pages/CustomerExperience';
import { DigitalCapabilities } from './pages/DigitalCapabilities';
import { ExecutiveSummary } from './pages/ExecutiveSummary';
import { Evidence } from './pages/Evidence';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/summary" element={<ExecutiveSummary />} />
        <Route path="/risk-center" element={<RiskCenter />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/findings" element={<Findings />} />
        <Route path="/findings/:id" element={<FindingDetail />} />
        <Route path="/systemic-issues" element={<SystemicIssues />} />
        <Route path="/business-risk" element={<BusinessRisk />} />
        <Route path="/friction" element={<CustomerExperience />} />
        <Route path="/digital-capabilities" element={<DigitalCapabilities />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/flow-analysis" element={<FlowAnalysis />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/export" element={<Export />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
