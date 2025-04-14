// import { cn } from '../../lib/utils';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      default: 'bg-[#FF6A3D] text-white hover:bg-[#e95e33]',
      ghost: 'bg-transparent text-white hover:bg-white hover:text-[#23005B] border border-white',
    };

    return (
      <button
        className={base, variants[variant], className}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';