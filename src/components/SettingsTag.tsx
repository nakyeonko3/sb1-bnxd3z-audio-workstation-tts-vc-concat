import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SettingsTagProps {
  icon: LucideIcon;
  value: string;
  label?: string;
  className?: string;
}

const SettingsTag: React.FC<SettingsTagProps> = ({ 
  icon: Icon, 
  value, 
  label,
  className 
}) => (
  <div 
    className={cn(
      "flex items-center gap-1.5 text-xs text-muted-foreground",
      "bg-muted/50 px-2 py-1 rounded-md",
      "hover:bg-muted/80 transition-colors duration-200",
      "border border-transparent hover:border-muted-foreground/10",
      className
    )}
  >
    <Icon className="w-3 h-3" />
    <span className="font-medium">{value}</span>
    {label && (
      <>
        <span className="text-muted-foreground/40">|</span>
        <span className="text-muted-foreground/60">{label}</span>
      </>
    )}
  </div>
);

export default SettingsTag;