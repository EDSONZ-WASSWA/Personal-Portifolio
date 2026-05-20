import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

export const Badge = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: "bg-accent/8 border border-accent/20 backdrop-blur-[8px] text-accent hover:bg-accent/15 transition-colors",
    outline: "border border-foreground/20 text-foreground/70",
    live: "bg-green-500/10 text-green-500 border border-green-500/20 backdrop-blur-[8px]",
  };

  return (
    <span className={cn(
      "px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full inline-flex items-center gap-2",
      variants[variant],
      className
    )}>
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      )}
      {children}
    </span>
  );
};
