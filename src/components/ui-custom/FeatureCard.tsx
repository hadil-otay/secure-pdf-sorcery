
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  onClick,
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-white border border-slate-100 shadow-soft transition-all duration-300",
        "hover:shadow-soft-lg hover:border-slate-200 hover:translate-y-[-2px]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg bg-pdf-50 flex items-center justify-center mb-4",
        iconClassName
      )}>
        <Icon className="h-6 w-6 text-pdf-500" />
      </div>
      <h3 className="text-lg font-medium text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
