'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';
import { Text } from '@/app/ui/components/text';

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
    'w-full border',
    'font-sans transition-colors duration-200',
    'text-text-primary',
    'placeholder:text-text-muted',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-ghost-hover',
].join(' ');

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            className,
            error,
            description,
            size = 'md',
            required,
            ...props
        }, ref
    ) => {
        const inputId = id ?? useId();
        const errorId = `${inputId}-error`;
        const descId = `${inputId}-desc`;
        const describedBy = error ? errorId : description ? descId : undefined;

        return (
            <div className="w-full flex flex-col gap-1.5">
                <Text
                    as='label'
                    htmlFor={inputId}
                    className={cn(
                        'select-none',
                        labelSizeStyles[size]
                    )}
                >
                    {label}
                    {required && <Text as='span' aria-hidden='true'>*</Text>}
                </Text>
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        baseInputStyles,
                        sizeStyles[size],
                        error && 'error border-danger text-danger',
                        className
                    )}
                    aria-describedby={describedBy}
                    aria-invalid={!!error}
                    required={required}
                    {...props}
                />

                {description && !error && (
                    <Text
                        as='p'
                        className={cn(
                            'text-text-muted ',
                            helperSizeStyles[size]
                        )}
                    >
                        {description}
                    </Text>
                )}

                {error && (
                    <Text
                        as='p'
                        id={errorId}
                        className={cn(
                            'text-danger',
                            helperSizeStyles[size]
                        )}
                        aria-live="polite"
                    >
                        {error}
                    </Text>
                )}
            </div>
        )
    }
);

Input.displayName = 'Input';