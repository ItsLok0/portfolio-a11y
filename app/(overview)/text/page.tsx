import { Text } from '@/app/ui/components/text';
import { Heading } from '@/app/ui/components/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Système Typographique',
    description: 'Démonstration des composants Heading et Text pour une structure sémantique et accessible.',
};

export default function TypographyDemoPage() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10">
            <Heading as="h1" className='mb-10 text-center'>
                Système Typographique
                <Text as="span" variant="lead" className="block text-primary mt-2">Titres & Paragraphes</Text>
            </Heading>

            <div className="w-full flex flex-col gap-20 max-w-4xl">
                
                {/* --- SECTION 1 : HEADING --- */}
                <section className="flex flex-col gap-10">
                    <div className="space-y-1 border-b pb-2">
                        <Heading as="h2" level={2}>1. Titres (Heading)</Heading>
                        <Text variant="small">Gestion de la hiérarchie visuelle du niveau 1 au niveau 6.</Text>
                    </div>

                    <div className="grid gap-8">
                        {/* Hiérarchie visuelle standard */}
                        <div className="flex flex-col gap-6 p-8 bg-bg-subtle/30 rounded-3xl border border-border-subtle">
                            <Heading as="span" level={1}>Heading Level 1</Heading>
                            <Heading as="span" level={2}>Heading Level 2</Heading>
                            <Heading as="span" level={3}>Heading Level 3</Heading>
                            <Heading as="span" level={4}>Heading Level 4</Heading>
                            <Heading as="span" level={5}>Heading Level 5</Heading>
                            <Heading as="span" level={6}>Heading Level 6</Heading>
                        </div>

                        {/* Démonstration du Découplage */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border rounded-2xl space-y-4">
                                <Heading as="h3" level={4} className="text-primary uppercase tracking-widest">Sémantique vs Visuel</Heading>
                                <Text variant="small">
                                    Ici, on utilise une balise <Text variant="code">h3</Text> pour la structure, 
                                    mais on lui applique le style d'un <Text variant="code">level 1</Text>.
                                </Text>
                                <Heading as="h3" level={1}>Style H1 / Balise H3</Heading>
                            </div>
                            
                            <div className="p-6 border rounded-2xl space-y-4 bg-primary/5 border-primary/20">
                                <Heading as="h3" level={4} className="text-primary uppercase tracking-widest">Note Accessibilité</Heading>
                                <Text variant="small">
                                    Le composant permet de ne jamais sauter de niveau de titre dans le DOM (ex: passer de H1 à H3) 
                                    tout en respectant les maquettes graphiques.
                                </Text>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2 : TEXT --- */}
                <section className="flex flex-col gap-10">
                    <div className="space-y-1 border-b pb-2">
                        <Heading as="h2" level={2}>2. Paragraphes (Text)</Heading>
                        <Text variant="small">Variantes de textes pour le corps de page et les métadonnées.</Text>
                    </div>

                    <div className="flex flex-col gap-12">
                        {/* Paragraphe Lead */}
                        <div className="flex flex-col gap-4">
                            <Heading as='h3' level={3} className='text-primary'>Variante : Lead</Heading>
                            <Text variant="lead">
                                Le texte "Lead" est idéal pour les introductions ou les résumés en haut de page. 
                                Il offre une meilleure lisibilité grâce à sa taille de 20px.
                            </Text>
                        </div>

                        {/* Paragraphe Standard - Body */}
                        <div className="flex flex-col gap-4">
                            <Heading as='h3' level={3} className='text-primary'>Variante : Body (Défaut)</Heading>
                            <div className="space-y-4">
                                <Text variant="body">
                                    Ceci est le texte par défaut (16px). Hauteur de ligne optimisée pour la lecture de longs paragraphes.
                                </Text>
                                <Text variant="body" className="font-bold italic">
                                    Supporte les utilitaires Tailwind comme le gras ou l'italique via className.
                                </Text>
                            </div>
                        </div>

                        {/* Small & Caption */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Heading as='h3' level={4} className='text-primary uppercase'>Variante : Small</Heading>
                                <Text variant="small">
                                    Utilisé pour les informations secondaires, les notes ou les descriptions denses.
                                </Text>
                            </div>
                            <div className="space-y-4">
                                <Heading as='h3' level={4} className='text-primary uppercase'>Variante : Caption</Heading>
                                <Text variant="caption" className="block">PUBIÉ LE 22 MAI 2026</Text>
                                <Text variant="caption" as="figcaption" className="italic">
                                    Légende d'illustration
                                </Text>
                            </div>
                        </div>

                        {/* Code */}
                        <div className="flex flex-col gap-4 bg-bg-subtle rounded-2xl">
                            <Heading as='h3' level={4} className='text-primary uppercase'>Variante : Code</Heading>
                            <div className="flex items-center gap-2">
                                <Text variant="body">Installez le package via</Text>
                                <Text variant="code">npm i @ui/system</Text>
                            </div>
                        </div>

                        {/* Polymorphisme */}
                        <div className="flex flex-col gap-4">
                            <Heading as='h3' level={3} className='text-primary'>Polymorphisme (Prop "as")</Heading>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 border border-dashed rounded-xl">
                                    <Text variant="small" className="block mb-2 opacity-60 italic">Rendu &lt;label&gt; :</Text>
                                    <Text variant="body" as="label" htmlFor="demo" className="cursor-pointer font-bold underline decoration-primary">
                                        Cliquez-moi (Label)
                                    </Text>
                                </div>
                                <div className="p-4 border border-dashed rounded-xl">
                                    <Text variant="small" className="block mb-2 opacity-60 italic">Rendu &lt;span&gt; :</Text>
                                    <Text variant="body" as="span" className="bg-primary/10 px-2 py-1 rounded">
                                        Élément en ligne (Span)
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer de Page (Note Technique) */}
                <footer className="p-8 bg-primary-subtle rounded-2xl border border-border-subtle">
                    <Heading as="h4" level={4} className="mb-4 text-primary">Conformité RGAA (Critère 10.x)</Heading>
                    <Text variant="small">
                        Ce système typographique utilise des unités relatives (rem) pour permettre le redimensionnement du texte par l'utilisateur. 
                        Les composants <strong>Heading</strong> et <strong>Text</strong> séparent strictement la sémantique de la présentation, 
                        permettant une navigation claire pour les lecteurs d'écran (Ticket #4).
                    </Text>
                </footer>
            </div>
        </div>
    );
}