import { Button } from '@/app/ui/components/button';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text'; // Utilisation de ton nouveau composant Text pour la cohérence
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Boutons accessibles',
    description: 'Découvrez différents exemples de boutons accessibles et bien conçus pour améliorer l\'expérience utilisateur.',
};

export default function ButtonDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            <Heading as="h1" className='mb-10'>
                Système d'Actions (Boutons)
            </Heading>

            <div className="w-full flex flex-col gap-12 max-w-4xl">
                
                {/* Section Primaires */}
                <div className="flex flex-col gap-6 border-b pb-8">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Boutons Primaires</Heading>
                        <Text variant="small">Utilisés pour l'action principale de la page.</Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button variant="primary" size='sm'>Petit</Button>
                        <Button variant="primary">Standard</Button>
                        <Button variant="primary" size='lg'>Grand format</Button>
                        <Button variant="primary" disabled>Désactivé</Button>
                    </div>
                    <Button variant="primary" fullWidth>Action prioritaire sur toute la largeur</Button>
                </div>

                {/* Section Secondaires & Outline */}
                <div className="flex flex-col gap-6 border-b pb-8">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Actions Secondaires</Heading>
                        <Text variant="small">Pour les actions de support ou alternatives (Secondary & Outline).</Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button variant="secondary">Secondaire</Button>
                        <Button variant="outline">Contour (Outline)</Button>
                        <Button variant="ghost">Fantôme (Ghost)</Button>
                    </div>
                </div>

                {/* Section États Sémantiques (Danger & Succès) */}
                <div className="flex flex-col gap-6 border-b pb-8">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>États Sémantiques</Heading>
                        <Text variant="small">Pour confirmer un succès ou avertir d'une action destructive.</Text>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <Text variant="caption">Validation</Text>
                            <div className="flex gap-2 items-center">
                                <Button variant="success" size="sm">Valider</Button>
                                <Button variant="success">Succès</Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Text variant="caption">Zone de danger</Text>
                            <div className="flex gap-2 items-center">
                                <Button variant="danger" size="sm">Supprimer</Button>
                                <Button variant="danger">Action critique</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Liens et Navigation */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Navigation & Discrétion</Heading>
                        <Text variant="small">Le style "Link" conserve les propriétés d'un bouton tout en ressemblant à un lien.</Text>
                    </div>
                    <div className="flex items-center gap-6">
                        <Button variant="link">Retour au catalogue</Button>
                        <Button variant="link" className="text-text-muted">Passer l'étape</Button>
                    </div>
                </div>

                {/* Exemple d'accessibilité : Focus */}
                <div className="mt-10 p-6 bg-primary-subtle rounded-lg border border-border-subtle">
                    <Text variant="body">
                        <Text as='span' variant='small' className='font-bold'>Note Accessibilité :</Text> Tous ces boutons supportent la navigation au clavier. Appuyez sur <Text variant="code">Tab</Text> pour tester les états de focus et les contrastes.
                    </Text>
                </div>

            </div>
        </div>
    );
}