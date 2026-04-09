import { cn } from '@/lib/utils';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps<T extends React.ElementType> = {
    children: React.ReactNode;
    as?: T;
    level?: HeadingLevel;
} & React.ComponentPropsWithoutRef<T>;

// Création des styles de chaque level de heading
const levelStyles: Record<HeadingLevel, string> = {
    1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    2: 'scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl',
    3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    5: 'text-lg font-semibold tracking-tight',
    6: 'text-base font-semibold tracking-tight',
};

const Heading = <T extends React.ElementType = 'h1'>({
    children,
    as,
    level,
    className,
    ...props
}: HeadingProps<T>) => {
    const HeadingComponent = as as React.ElementType;
    level = level || (Number(as?.valueOf().toString().substring(1))) as HeadingLevel;

    return (
        <HeadingComponent   
            className={cn(
                levelStyles[level],
                className
            )}
            {...props}
        >
            {children}
        </HeadingComponent>
    );
};

export default Heading;