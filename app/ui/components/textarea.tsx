import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';
import { Text } from '@/app/ui/components/text';
import React from "react";

type TextAreaSize = 'sm' | 'md' | 'lg';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    label: string;
    errorMessage?: string;
    error?: boolean;
    description?: string;
    size?: TextAreaSize;
}

const sizeStyles: Record<TextAreaSize, string> = {
    sm: 'px-2.5 text-sm gap-1.5',
    md: 'px-3 text-base gap-2',
    lg: 'px-4 text-lg gap-2.5',
};

const labelSizeStyles: Record<TextAreaSize, string> = {
    sm: 'text-xs font-medium',
    md: 'text-sm font-medium',
    lg: 'text-base font-medium',
};

const helperSizeStyles: Record<TextAreaSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

const baseTextAreaStyles = [
    'w-full border rounded-md',
    'text-text-primary',
    'bg-bg-surface',
    'border-border-subtle',
    'placeholder:text-text-muted',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'disabled:bg-ghost-hover',
].join(' ');

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
                <textarea
                    ref={ref}
                    id={inputId}
                    name={props.name ?? inputId}
                    className={cn(
                        baseTextAreaStyles,
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
                            className={cn('text-text-secondary', helperSizeStyles[size], error && 'sr-only')}
                        >
                            {description}
                        </Text>
                    )}
            
                    {error && (
                        <Text
                            as="p"
                            id={errorId}
                            role='alert'
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

TextArea.displayName = 'Textarea';