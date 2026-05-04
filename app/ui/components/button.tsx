'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import React from "react";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'ghost'
  | 'outline'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}

// Création des styles de chaque variante de bouton
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-fg border border-primary ' +
    'not-disabled:hover:bg-primary-hover not-disabled:hover:border-primary-hover ' +
    'not-disabled:active:bg-primary-active',
 
  secondary:
    'bg-secondary text-secondary-fg border border-secondary ' +
    'not-disabled:hover:bg-secondary-hover not-disabled:hover:border-secondary-hover ' +
    'not-disabled:active:bg-secondary-active',
 
  danger:
    'bg-danger text-danger-fg border border-danger ' +
    'not-disabled:hover:bg-danger-hover not-disabled:hover:border-danger-hover ' +
    'not-disabled:active:bg-danger-active',
 
  success:
    'bg-success text-success-fg border border-success ' +
    'not-disabled:hover:bg-success-hover not-disabled:hover:border-success-hover ' +
    'not-disabled:active:bg-success-active',
 
  ghost:
    'bg-transparent text-text-primary border border-transparent ' +
    'not-disabled:hover:bg-ghost-hover ' +
    'not-disabled:active:bg-ghost-active',
 
  outline:
    'bg-transparent text-primary border border-primary ' +
    'not-disabled:hover:bg-primary-subtle ' +
    'not-disabled:active:bg-primary-subtle',
 
  link:
    'bg-transparent text-text-link border-none ' +
    'underline underline-offset-4 ' +
    'not-disabled:hover:text-text-link-hover ' +
    'not-disabled:active:opacity-80 ' +
    'h-auto! px-0!',
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-10 px-4 text-base gap-2',
    lg: 'h-12 px-6 text-lg gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
        children,
        className,
        isLoading,
        disabled,
        variant='primary',
        size='md',
        fullWidth=false,
        'aria-label': ariaLabel,
        ...props
    }, ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
        <button
            ref={ref}
            disabled={isDisabled}
            aria-busy={isLoading}
            aria-label={ariaLabel}
            className={cn(
                'inline-flex items-center justify-center',
                'font-medium leading-none rounded-md',
                'select-none whitespace-nowrap',
                'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:none',
                'focus-visible:outline-none focus-visible:shadow-(--focus-ring)',
                'not-disabled:active:scale-[0.99]',
                variantStyles[variant],
                sizeStyles[size],
                fullWidth && 'w-full',
                className,
            )}
            {...props}
        >
            <span className={cn(isLoading && 'opacity-80')}>
                {children}
            </span>
        </button>
    );
  }
);

Button.displayName = 'Button';