'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';
import { Text } from '@/app/ui/components/text';

type InputSize = 'sm' | 'md' | 'lg';

export type InputType = Exclude<
    React.HTMLInputTypeAttribute,
    'checkbox' | 'radio' | 'file' | 'color' | 'range' | 'image' | 'hidden'
>;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    label: string;
    errorMessage?: string;
    error?: boolean;
    description?: string;
    size?: InputSize;
    type?: InputType;
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
    'w-full border rounded-md',
    'text-text-primary',
    'bg-bg-surface',
    'border-border-subtle',
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
            error = false,
            errorMessage = 'Ce champ est obligatoire',
            description,
            size = 'md',
            required,
            ...props
        }, ref
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const errorId = `${inputId}-error`;
        const descId = `${inputId}-desc`;
        const describedBy = [
            description ? descId : null,
            error ? errorId : null,
        ]
        .filter(Boolean)
        .join(' ') || undefined;

        return (
            <div className="w-full flex flex-col gap-1.5">
                <Text
                    as='label'
                    htmlFor={inputId}
                    className={cn('select-none', labelSizeStyles[size])}
                >
                    {label}
                    {required && (
                        <Text as='span' aria-hidden='true'>
                            *
                        </Text>
                    )}
                </Text>
                <input
                    ref={ref}
                    id={inputId}
                    name={props.name ?? inputId}
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

                <div aria-live="polite" aria-atomic="true">
                    {description && (
                        <Text
                            as="p"
                            id={descId}
                            className={cn('text-text-muted', helperSizeStyles[size], error && 'sr-only')}
                        >
                            {description}
                        </Text>
                    )}
            
                    {error && (
                        <Text
                            as="p"
                            id={errorId}
                            className={cn('text-danger', helperSizeStyles[size])}
                        >
                            {errorMessage}
                        </Text>
                    )}
                </div>
            </div>
        );
    }
);

Input.displayName = 'Input';