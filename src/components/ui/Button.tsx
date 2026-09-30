import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'glass' | 'secondary' | 'editorial';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon | React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  showArrow = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes with high-performance GPU transitions
  const baseClasses =
    'group relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 ease-out select-none cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  // Size variations
  const sizeClasses = {
    sm: 'text-[11px] px-4 py-2 gap-2 rounded-xs',
    md: 'text-xs px-6 py-3 gap-2.5 rounded-xs',
    lg: 'text-xs sm:text-sm px-8 py-3.5 sm:py-4 gap-3 rounded-xs tracking-widest'
  };

  // Luxury variants
  const variantClasses = {
    // Primary: Luxury architectural gold with micro-sheen and warm glow
    primary:
      'bg-gradient-to-r from-[#DFB257] via-[#E8C26E] to-[#C99E44] text-[#12161A] shadow-[0_4px_20px_rgba(223,178,87,0.25)] hover:shadow-[0_8px_30px_rgba(223,178,87,0.45)] hover:-translate-y-0.5 border border-[#F3D78A]/40',

    // Dark: Deep Obsidian with subtle gold halo border
    dark:
      'bg-[#12161A] text-white hover:bg-[#1A2026] border border-white/10 hover:border-[#DFB257]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5',

    // Outline: Ultra-thin architectural precision border
    outline:
      'bg-transparent border border-neutral-300 text-neutral-800 hover:text-white hover:bg-[#12161A] hover:border-[#12161A] hover:shadow-lg hover:-translate-y-0.5 dark:border-white/20 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/10 dark:hover:border-white/40',

    // Glass: Frosted translucent luxury glassmorphism
    glass:
      'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-[#DFB257]/80 hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:-translate-y-0.5',

    // Secondary: Light neutral
    secondary:
      'bg-neutral-100 hover:bg-neutral-200 text-[#12161A] border border-neutral-200 hover:border-neutral-300 shadow-xs hover:-translate-y-0.5',

    // Editorial: Minimal text link with expanding gold indicator
    editorial:
      'bg-transparent text-[#12161A] hover:text-[#DFB257] dark:text-neutral-300 dark:hover:text-[#DFB257] px-0 py-1 font-semibold tracking-wider hover:translate-x-1'
  };

  const renderIcon = () => {
    if (isLoading) {
      return (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      );
    }
    if (showArrow) {
      return (
        <ArrowRight className="w-3.5 h-3.5 text-current group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0" />
      );
    }
    if (Icon) {
      if (React.isValidElement(Icon)) {
        return <span className="shrink-0">{Icon}</span>;
      }
      const IconComponent = Icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300 shrink-0" />;
    }
    return null;
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Subtle light sheen sweep effect on hover for primary & dark variants */}
      {(variant === 'primary' || variant === 'dark') && (
        <span
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
          aria-hidden="true"
        />
      )}

      {iconPosition === 'left' && renderIcon()}
      <span className="relative z-10">{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};
