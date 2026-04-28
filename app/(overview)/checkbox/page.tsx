import { Text } from '@/app/ui/components/text';
import { Heading } from '@/app/ui/components/heading';
import { Metadata } from 'next';
import { Checkbox } from '@/app/ui/components/checkbox';

export const metadata: Metadata = {
    title: 'Typographie et Textes',
    description: 'Exemples d\'utilisation du composant Text pour maintenir une cohérence visuelle et sémantique.',
};

export default function CheckboxDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            <Heading as="h1" className='mb-10'>
                Composant Checkbox
            </Heading>

            <div className="w-full flex flex-col gap-12 max-w-4xl">
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Exemple de Checkbox</Heading>
                    <Text variant="body">
                        Voici un exemple d'utilisation du composant Checkbox. Il est conçu pour être accessible et facile à utiliser, avec des styles clairs pour les états d'erreur et de description.
                    </Text>
                </div>
            </div>

            <Checkbox
                label={['Option 1', 'Option 2', 'Option 3']}
                error={true}
                errorMessage="Ce champ est obligatoire"
            />
        </div>
    );
}