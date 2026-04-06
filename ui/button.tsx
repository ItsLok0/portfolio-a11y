'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
}

export function Button({ children, className, isLoading, ...rest}: ButtonProps) {
    const isDisabled = rest.disabled || isLoading;

    return (
        <button
          {...rest}
          className={clsx(
            'flex h-10 items-center rounded-lg (--foreground) px-4 text-sm font-medium text-white hover:bg-blue-400 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
            className,
          )}
          disabled={isDisabled}
          aria-busy={isLoading}
        >
            <span className={clsx(isLoading && 'opacity-80')}>{children}</span>
        </button>
    );
}

Button.displayName = 'Button';