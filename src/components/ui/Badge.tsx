import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Badge: React.FC<{
  variant?: 'Critical' | 'High' | 'Medium' | 'Low' | 'UX/UI' | 'Functional' | 'Performance' | 'Security' | 'Trust';
  children: React.ReactNode;
  className?: string;
}> = ({ variant, children, className }) => {
  let colorStyles = "bg-slate-100 text-slate-700 border-slate-200";

  switch (variant) {
    case 'Critical':
      colorStyles = "bg-red-50 text-red-700 border-red-200";
      break;
    case 'High':
      colorStyles = "bg-orange-50 text-orange-700 border-orange-200";
      break;
    case 'Medium':
      colorStyles = "bg-yellow-50 text-yellow-700 border-yellow-200";
      break;
    case 'Low':
      colorStyles = "bg-blue-50 text-blue-700 border-blue-200";
      break;
    case 'Security':
    case 'Trust':
      colorStyles = "bg-purple-50 text-purple-700 border-purple-200";
      break;
    case 'Performance':
    case 'Functional':
      colorStyles = "bg-indigo-50 text-indigo-700 border-indigo-200";
      break;
    case 'UX/UI':
      colorStyles = "bg-teal-50 text-teal-700 border-teal-200";
      break;
  }

  return (
    <span className={twMerge(clsx("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border", colorStyles, className))}>
      {children}
    </span>
  );
};
