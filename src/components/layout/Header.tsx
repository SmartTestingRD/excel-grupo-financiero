export const Header: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-6">
      <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">{title}</h1>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </header>
  );
};
