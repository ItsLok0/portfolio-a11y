import { Heading } from '@/app/ui/components/heading';
import { Input } from '@/app/ui/components/input';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Inputs accessibles',
    description: 'Découvrez différents exemples d\'inputs accessibles et bien conçus pour améliorer l\'expérience utilisateur.',
};
export default function Page() {
    return (
        <div className="p-8 mx-auto flex flex-col gap-6">
            <Heading as="h1" className='mb-20'>
                Exemples d'Inputs individuels
            </Heading>
            <Input
                label="Description + placeholder"
                placeholder='placeholder'
                description="Description du champ"
                required
            />
            <Input label="En erreur" error="Ce champ est obligatoire" />
            <Input label="Désactivé" disabled value="Valeur non modifiable" />
        </div>
    );
}