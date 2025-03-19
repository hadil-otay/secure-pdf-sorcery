
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessingAnimationProps {
  visible: boolean;
  message?: string;
  className?: string;
}

const ProcessingAnimation: React.FC<ProcessingAnimationProps> = ({
  visible,
  message = "Processing your files locally...",
  className,
}) => {
  if (!visible) return null;
  
  return (
    <div className={cn(
      "fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50",
      "animate-fade-in",
      className
    )}>
      <div className="max-w-md px-8 py-6 rounded-xl bg-white shadow-soft-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-pdf-100 opacity-25"></div>
            <div className="absolute inset-0 rounded-full border-4 border-pdf-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
        <h3 className="text-lg font-medium text-slate-800 mb-1">{message}</h3>
        <p className="text-sm text-slate-500">Your files are never uploaded to any server.</p>
      </div>
    </div>
  );
};

export default ProcessingAnimation;
