import { cn } from "@/lib/utils";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faTriangleExclamation,
  faInfoCircle,
  faCircle,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export type BadgeVariant = "neutral" | "success" | "danger" | "warning" | "info";

// Avec Label
type BadgeWithLabel = {
    label: string;
    icon?: IconDefinition;
    srText?: string;
}

// Icon only
type BadgeIcon = {
    label?: never;
    icon: IconDefinition;
    srText: string;
}

type BadgeContentProps = BadgeWithLabel | BadgeIcon;

type BadgeProps = BadgeContentProps & {
    variant?: BadgeVariant;
    className?: string;
}

const baseStyles = "inline-flex items-center gap-1.5 rounded-full text-xs font-semibold px-2.5 py-1";

// Différentes variantes du bagde
const variantStyles: Record<BadgeVariant, {
    classes: string;
    defaultIcon: IconDefinition;
    defaultPrefix: string;
}> = {
    neutral: {
        classes: "bg-neutral text-neutral-fg!",
        defaultIcon: faCircle,
        defaultPrefix: "Neutral"
    },
    success: {
        classes: "bg-success text-success-fg",
        defaultIcon: faCheckCircle,
        defaultPrefix: "Success"
    },
    danger: {
        classes: "bg-danger text-danger-fg",
        defaultIcon: faTimesCircle,
        defaultPrefix: "Danger"
    },
    warning: {
        classes: "bg-warning text-warning-fg",
        defaultIcon: faTriangleExclamation,
        defaultPrefix: "Warning"
    },
    info: {
        classes: "bg-info text-info-fg",
        defaultIcon: faInfoCircle,
        defaultPrefix: "Info"
    },
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            variant = "info",
            className,
            ...props
        }, ref
    ) => {
        const config = variantStyles[variant];
        const icon   = props.icon ?? config.defaultIcon;
        const label  = 'label' in props ? props.label : undefined;
        const srText = 'srText' in props ? props.srText : undefined;

        return (
            <span
                ref={ref}
                className={cn(
                    baseStyles,
                    config.classes,
                    className
                )}
                role="status"
            >
                {/* Icône toujours cachée */}
                <FontAwesomeIcon
                    icon={icon}
                    className="w-3 h-3 shrink-0"
                    aria-hidden="true"
                />

                {/* Texte visible */}
                {label &&
                    <span
                        aria-hidden="true"
                    >
                        {label}
                    </span>}

                {/* Texte pour les lecteurs d'écran */}
                <span className="sr-only">
                    {srText ?? `${config.defaultPrefix}${label ? ` : ${label}` : ''}`}
                </span>
            </span>
        );
    }
);

Badge.displayName = "Badge";