import { Input } from '@/app/ui/components/input';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Composant Input',
    description: 'Exemples de champs de saisie avec gestion d\'erreurs, tailles et accessibilité.',
};

export default function InputDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            <Heading as="h1" className='mb-10'>
                Champs de saisie (Inputs)
            </Heading>

            <div className="w-full flex flex-col gap-12 max-w-2xl">
                
                {/* Section Tailles */}
                <div className="flex flex-col gap-6 border-b pb-10">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Variantes de tailles</Heading>
                        <Text variant="small">Trois tailles disponibles pour s'adapter à vos interfaces.</Text>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Input 
                            label="Petit champ (sm)" 
                            size="sm" 
                            placeholder="Ex: Rechercher..." 
                        />
                        <Input 
                            label="Champ standard (md)" 
                            size="md" 
                            placeholder="Ex: Jean Dupont" 
                        />
                        <Input 
                            label="Grand champ (lg)" 
                            size="lg" 
                            placeholder="Ex: 06 12 34 56 78" 
                        />
                    </div>
                </div>

                {/* Section États : Erreur & Aide */}
                <div className="flex flex-col gap-6 border-b pb-10">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Validation et Aide</Heading>
                        <Text variant="small">Gestion native des messages d'erreur et des descriptions d'aide.</Text>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Input 
                            label="Email" 
                            type="email"
                            required
                            placeholder="contact@exemple.fr"
                            description="Nous ne partagerons jamais votre email."
                        />
                        <Input 
                            label="Mot de passe" 
                            type="password"
                            error
                            errorMessage="Le mot de passe doit contenir au moins 8 caractères."
                            defaultValue="123"
                        />
                    </div>
                </div>

                {/* Section États Interactifs */}
                <div className="flex flex-col gap-6 border-b pb-10">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>États interactifs</Heading>
                        <Text variant="small">Visualisation des états désactivés ou en lecture seule.</Text>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Input 
                            label="Champ désactivé" 
                            disabled 
                            placeholder="Vous ne pouvez pas écrire ici"
                        />
                        <Input 
                            label="Valeur fixe (Lecture seule)" 
                            readOnly 
                            defaultValue="Donnée non modifiable"
                        />
                    </div>
                </div>

                {/* Section Types Spécifiques */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <Heading as='h2' level={3} className='text-primary'>Types de saisie</Heading>
                        <Text variant="small">Le composant supporte les types HTML standards (sauf sélecteurs complexes).</Text>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Date" type="date" />
                        <Input label="Nombre" type="number" placeholder="0" />
                    </div>
                </div>

                {/* Note technique */}
                <div className="mt-6 p-6 bg-primary-subtle rounded-lg border border-border-subtle italic">
                    <Text variant="small" className="text-primary-700">
                        <Text as='span' variant='small' className='font-bold'>Note Accessibilité :</Text> Le composant utilise <Text variant="code">useId</Text> pour lier automatiquement le label à l'input, et <Text variant="code">aria-describedby</Text> pour que les lecteurs d'écran lisent la description ou l'erreur lors du focus.
                    </Text>
                </div>

            </div>
        </div>
    );
}