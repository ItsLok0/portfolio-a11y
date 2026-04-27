import { Text } from '@/app/ui/components/text';
import { Heading } from '@/app/ui/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Typographie et Textes',
    description: 'Exemples d\'utilisation du composant Text pour maintenir une cohérence visuelle et sémantique.',
};

export default function TextDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            <Heading as="h1" className='mb-10'>
                Système Typographique
            </Heading>

            <div className="w-full flex flex-col gap-12 max-w-4xl">
                
                {/* Paragraphe Lead - Pour les introductions */}
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Variante : Lead</Heading>
                    <Text variant="lead">
                        Le texte "Lead" est idéal pour les introductions ou les résumés en haut de page. 
                        Il offre une meilleure lisibilité grâce à sa taille de 20px (text-xl).
                    </Text>
                </div>

                {/* Paragraphe Standard - Body */}
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Variante : Body (Défaut)</Heading>
                    <Text variant="body">
                        Ceci est le texte par défaut. Il utilise une taille de base (16px) avec une hauteur de ligne 
                        optimisée pour la lecture de longs paragraphes. C'est le style standard pour le contenu principal.
                    </Text>
                    <Text variant="body" className="font-bold">
                        On peut facilement ajouter des classes utilitaires comme le gras via Tailwind.
                    </Text>
                </div>

                {/* Small Text */}
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Variante : Small</Heading>
                    <Text variant="small">
                        Le texte "Small" est utilisé pour les informations secondaires, les notes de bas de page 
                        ou les descriptions denses. Il est légèrement plus petit mais reste très lisible.
                    </Text>
                </div>

                {/* Caption - Souvent utilisé pour les métadonnées */}
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Variante : Caption</Heading>
                    <div className="flex flex-col gap-2">
                        <Text variant="caption">Publié le 22 Avril 2026</Text>
                        <Text variant="caption" as="figcaption">
                            Légende : Une illustration du rendu typographique.
                        </Text>
                    </div>
                </div>

                {/* Code - Pour les éléments techniques */}
                <div className="flex flex-col gap-4 border-b pb-8">
                    <Heading as='h2' level={3} className='text-primary'>Variante : Code</Heading>
                    <div className="flex items-center gap-2">
                        <Text variant="body">Utilisez la commande</Text>
                        <Text variant="code">npm install @ui/components</Text>
                        <Text variant="body">pour commencer.</Text>
                    </div>
                </div>

                {/* Polymorphisme - Changement de balise HTML */}
                <div className="flex flex-col gap-4">
                    <Heading as='h2' level={3} className='text-primary'>Sémantique (Propriété "as")</Heading>
                    <div className="space-y-4">
                        <div>
                            <Text variant="small" className="block mb-1 text-text-secondary">Rendu en tant que &lt;label&gt; :</Text>
                            <Text variant="body" as="label" htmlFor="email" className="cursor-pointer underline">
                                Adresse Email
                            </Text>
                        </div>
                        <div>
                            <Text variant="small" className="block mb-1 text-text-secondary">Rendu en tant que &lt;span&gt; :</Text>
                            <Text variant="body" as="span" className="bg-yellow-100 italic">
                                Je suis un span à l'intérieur d'un flux de texte.
                            </Text>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}