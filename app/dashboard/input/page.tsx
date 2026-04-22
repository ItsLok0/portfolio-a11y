import { Heading } from '@/app/ui/components/heading';
import { Input } from '@/app/ui/components/input';
import { Metadata } from 'next';
import Link from 'next/dist/client/link';

export const metadata: Metadata = {
    title: 'Inputs accessibles',
    description: 'Découvrez différents exemples d\'inputs accessibles et bien conçus pour améliorer l\'expérience utilisateur.',
};
export default function Page() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10 focus-visible:shadow-none!">
            <Heading as="h1" className='mb-20'>
                Exemples d'Inputs individuels
            </Heading>
            <div className="w-full flex flex-col gap-8">
                <Input
                    type='email'
                    autoComplete='email'
                    label="Input de base"
                    placeholder="Entrez du texte ici"
                />
                <Input
                    type='number'
                    label="Input avec placeholder et description"
                    placeholder="Entrez un nombre"
                    description="Description de l'input"
                />
                <Input
                    type='url'
                    label="Input requis"
                    placeholder="Champ requis"
                    required
                />
                <Input
                    type='date'
                    label="Input avec erreur"
                    error={true}
                />
                <Input
                    label="Input avec erreur et message d'erreur"
                    placeholder="Champ avec erreur et message"
                    error={true}
                    errorMessage="Message d'erreur personnalisé"
                />
                <Input
                    label="Input désactivé"
                    value="Désactivé"
                    disabled
                />
                <Input
                    label="Input en lecture seule"
                    value="Reader only"
                    readOnly
                />
            </div>
            <div className="formTest">
                <Link 
                    href="/dashboard/input/form"
                    className='mt-4 p-1 rounded-md text-sm text-text-primary underline'
                >
                    Exemple formulaire avec validation dynamique
                </Link>
            </div>
        </div>
    );
}