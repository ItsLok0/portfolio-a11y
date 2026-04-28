import { cn } from '@/lib/utils';
import { forwardRef, useId } from 'react';
import { Text } from '@/app/ui/components/text';

export type CheckboxType = 'checkbox';
type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label: string[];
    errorMessage?: string;
    error?: boolean;
    size?: CheckboxSize;
}

const sizeStyles: Record<CheckboxSize, string> = {
    sm: 'h-8  px-2.5 text-sm gap-1.5',
    md: 'h-10 px-3 text-base gap-2',
    lg: 'h-12 px-4 text-lg gap-2.5',
};

const labelSizeStyles: Record<CheckboxSize, string> = {
    sm: 'text-xs font-medium',
    md: 'text-sm font-medium',
    lg: 'text-base font-medium',
};

const helperSizeStyles: Record<CheckboxSize, string> = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            id,
            label,
            className,
            error = false,
            errorMessage = 'Ce champ est obligatoire',
            size = 'md',
            required,
            ...rest
        }, ref) => {
            const generatedId = useId();
            const checkboxId = id ?? generatedId;
            const errorId = `${checkboxId}-error`;

        return (
            <div className={cn('flex flex-col gap-1.5', className)}>
                {label.map((text, index) => (
                    <label
                        key={index}
                        className={cn(
                            'flex items-center gap-2 text-sm font-medium',
                            error && 'text-danger',
                            labelSizeStyles[size]
                        )}
                    >
                        <input
                            type="checkbox"
                            ref={ref}
                            aria-invalid={error}
                            aria-describedby={errorId}
                            required={required}
                            {...rest}
                        />
                        <span>{text}</span>
                    </label>
                ))}
                {error && (
                    <Text
                        as='p'
                        id={errorId}
                        role='alert'
                        className={cn('text-danger', helperSizeStyles[size])}
                    >
                        {errorMessage}
                    </Text>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';