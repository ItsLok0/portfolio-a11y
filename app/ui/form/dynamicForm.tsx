'use client';

import { cn } from '@/lib/utils';
import { FieldConfig } from '@/lib/definition';
import { Input } from '../components/input';
import { Button } from '../components/button';

interface DynamicFormProps {
    className?: string;
    fields: FieldConfig[];
    buttonLabel?: string;
}

export default function DynamicForm({
    className,
    fields,
    buttonLabel
}: DynamicFormProps) {
    return (
        <form className={cn(`flex flex-col gap-6`, className)}>
            {fields.map((field) => (
                <Input
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    placeholder={field.placeholder}
                    defaultValue={field.defaultValue}
                    required={field.validation?.required}
                    type={field.type}
                    size={field.size ?? 'md'}
                />
            ))}
            
            {buttonLabel && (
                <Button type='submit'>
                    {buttonLabel}
                </Button>
            )}
        </form>
    );
};