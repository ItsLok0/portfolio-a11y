import { cn } from '@/lib/utils';

export  default function SkipLink() {
    return (
        <div className="skipLink">
            <a
                href="#main-content"
                className={cn(
                    'sr-only focus:not-sr-only',
                    'bg-primary text-primary-fg! underline',
                    'px-4 py-2 m-2'
                )}
            >
                Aller au contenu principal
            </a>
        </div>
    );
}