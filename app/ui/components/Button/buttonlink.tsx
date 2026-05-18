import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import React from 'react';
import { ButtonSize, variantStyles } from '@/app/ui/components/Button/button';

interface ButtonLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  variant?: keyof typeof variantStyles;
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-10 px-4 text-base gap-2',
    lg: 'h-12 px-6 text-lg gap-2.5',
};

const baseStyles = [
    'inline-flex items-center justify-center',
    'font-medium leading-none rounded-md',
    'select-none whitespace-nowrap',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:none',
    'focus-visible:outline-none focus-visible:shadow-(--focus-ring)',
    'not-disabled:active:scale-[0.99]',
].join(' ');

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'link',
      external = false,
      href,
      ...props
    },
    ref
  ) => {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <Link
        ref={ref}
        tabIndex={0}
        href={href}
        className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
        )}
        {...externalProps}
        {...props}
      >
        {children}

        {/* Pour les liens externes */}
        {external && (
          <span className="sr-only">(ouvre dans un nouvel onglet)</span>
        )}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';