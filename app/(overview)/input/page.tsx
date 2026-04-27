import { Input } from '@/app/ui/components/input';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { TextArea } from '@/app/ui/components/textarea';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Composants de saisie',
    description: 'Démonstration des composants Input et TextArea accessibles.',
};

export default function InputDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            {/* Titre Principal */}
            <div className="text-center mb-10">
                <Heading as="h1">
                    Champs de saisie
                </Heading>
                <Text variant="lead" className="text-primary font-bold">
                    (Inputs & Textarea)
                </Text>
            </div>

            <div className="w-full flex flex-col gap-16 max-w-4xl">
                
                {/* --- SECTION INPUTS --- */}
                <section className="flex flex-col gap-10">
                    <Heading as='h2' level={2} className="border-b pb-2">1. Inputs Standards</Heading>

                    {/* Tailles */}
                    <div className="flex flex-col gap-6">
                        <Heading as='h3' level={4} className='text-primary uppercase tracking-wider'>Variantes de tailles</Heading>
                        <div className="flex flex-col gap-4">
                            <Input label="Petit (sm)" size="sm" placeholder="Rechercher..." type="search" />
                            <Input label="Standard (md)" size="md" placeholder="Jean Dupont" />
                            <Input label="Grand (lg)" size="lg" placeholder="06 12 34 56 78" />
                        </div>
                    </div>

                    {/* Validation & États */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <Heading as='h3' level={4} className='text-primary uppercase tracking-wider'>Validation</Heading>
                            <Input 
                                label="Mot de passe" 
                                type="password" 
                                required 
                                error 
                                errorMessage="8 caractères minimum." 
                                defaultValue="123" 
                            />
                        </div>
                        <div className="space-y-6">
                            <Heading as='h3' level={4} className='text-primary uppercase tracking-wider'>Interactif</Heading>
                            <Input label="Désactivé" disabled placeholder="Non modifiable" />
                        </div>
                    </div>
                </section>

                {/* --- SECTION TEXTAREA --- */}
                <section className="flex flex-col gap-10">
                    <Heading as='h2' level={2} className="border-b pb-2">2. Zones de texte (TextArea)</Heading>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tailles et Styles */}
                        <div className="flex flex-col gap-6">
                            <Heading as='h3' level={4} className='text-primary uppercase tracking-wider'>Formats</Heading>
                            <TextArea 
                                label="Commentaires" 
                                description="Maximum 500 caractères." 
                                placeholder="Votre message ici..."
                            />
                            <TextArea 
                                label="Grand format (lg)" 
                                size="lg" 
                                placeholder="Zone de texte large" 
                                rows={3}
                            />
                        </div>

                        {/* États Spécifiques */}
                        <div className="flex flex-col gap-6">
                            <Heading as='h3' level={4} className='text-primary uppercase tracking-wider'>États & Aide</Heading>
                            <TextArea 
                                label="Message d'erreur" 
                                required
                                error
                                errorMessage="Ce champ ne peut pas être vide."
                            />
                            <TextArea 
                                label="Description courte" 
                                placeholder="Dites-nous en plus..."
                            />
                        </div>
                    </div>

                    {/* Exemple Pleine Largeur */}
                    <TextArea 
                        label="Note détaillée (Fixe)" 
                        rows={6} 
                        className="resize-none"
                        placeholder="resize-none : l'utilisateur ne peut pas redimensionner ce champ."
                    />
                </section>

                {/* Note technique commune */}
                <footer className="mt-6 p-6 bg-primary-subtle rounded-lg border border-border-subtle">
                    <Text variant="small" className="text-primary-700">
                        <span className='font-bold underline'>Note Accessibilité :</span> Les composants <Text variant="code">Input</Text> et <Text variant="code">TextArea</Text> partagent la même 
                        logique de liaison sémantique. L'utilisation de <Text variant="code">aria-describedby</Text> permet 
                        de notifier dynamiquement l'utilisateur des instructions ou erreurs, quel que soit le type de champ.
                    </Text>
                </footer>

            </div>
        </div>
    );
}