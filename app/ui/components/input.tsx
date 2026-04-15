'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string;
    error?: string;
    description?: string;
    size?: InputSize;
}

const sizeStyles: Record<InputSize, string> = {
    sm: 'h-8  px-2.5 text-sm gap-1.5',
    md: 'h-10 px-3 text-base gap-2',
    lg: 'h-12 px-4 text-lg gap-2.5',
};

const labelSizeStyles: Record<InputSize, string> = {
    sm: 'text-xs font-medium',
    md: 'text-sm font-medium',
    lg: 'text-base font-medium',
};

const helperSizeStyles: Record<InputSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

const baseInputStyles = [
    'w-full rounded-[--radius-md] border',
    'bg-bg-surface',
    'font-sans transition-colors duration-200',
    'border-border-default',
    'text-text-primary',
    'placeholder:text-text-muted',
    'focus-visible:outline-none',
    'focus-visible:shadow-[var(--focus-ring)]',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-ghost-hover',
].join(' ');

const errorInputStyles = [
    'border-danger',
    'focus-visible:shadow-[--focus-ring-danger]',
].join(' ');

const baseLabelStyles = [
    'leading-none select-none',
    'text-text-primary',
].join(' ');

const descriptionStyles = [
    'leading-[1.6]',
    'text-text-muted',
].join(' ');

const errorMessageStyles = [
    'font-medium leading-[1.6]',
    'text-danger',
].join(' ');

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            className,
            error,
            description,
            size = 'md',
            ...props
        }, ref
    ) => {
        const inputId = id ?? useId();
        const errorId = `${inputId}-error`;
        const descId = `${inputId}-desc`;
        const describedBy = error ? errorId : description ? descId : undefined;

        return (
            <div className="w-full flex flex-col gap-1.5">
                <label
                    htmlFor={inputId}
                    className={cn(
                        baseLabelStyles,
                        labelSizeStyles[size]
                    )}
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        baseInputStyles,
                        sizeStyles[size],
                        error && errorInputStyles,
                        className
                    )}
                    aria-describedby={error ? `${inputId}-error` : description ? `${inputId}-desc` : undefined}
                    aria-invalid={!!error}
                    {...props}
                />

                {description && !error && (
                    <p
                        id={descId}
                        className={cn(
                            descriptionStyles,
                            helperSizeStyles[size]
                        )}
                    >
                        {description}
                    </p>
                )}

                {error && (
                    <p 
                        id={errorId}
                        className={cn(
                            errorMessageStyles,
                            helperSizeStyles[size]
                        )}
                        aria-live="polite"
                    >
                        {error}
                    </p>
                )}
            </div>
        )
    }
);

InputComponent.displayName = 'InputComponent';