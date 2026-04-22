import { Button } from '@/app/ui/components/button';
import { Heading } from '@/app/ui/components/heading';
import { Text } from '@/app/ui/components/text';
import { Input } from '@/app/ui/components/input';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            {/* PREMIERE SECTION */}
            <section className="py-20 px-6 border-b border-border-subtle">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
                    <Heading as="h1" className="text-5xl md:text-6xl font-extrabold">
                        Kore <span className="text-primary">A11Y</span>
                    </Heading>
                    <Text variant="lead" className="max-w-2xl">
                        Une bibliothèque de composants pensée pour le RGAA, offrant des éléments accessibles et conformes pour vos projets web.
                    </Text>
                    <div className="flex gap-4 mt-4">
                        <Link href="https://github.com/ItsLok0/Kore-A11y" target="_blank" className="flex items-center gap-2 text-primary hover:underline">
                            Dépôt GitHub
                        </Link>
                    </div>
                </div>
            </section>

            {/* ROADMAP BANDEAU */}
            <section className="bg-primary text-white py-4 shadow-inner overflow-hidden">
                {/* <div className="max-w-5xl mx-auto px-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Text variant="small" className="font-bold text-white uppercase tracking-wider">Phase 1: Atomes</Text>
                    </div>
                    <div className="h-px flex-1 bg-white/20" />
                    <div className="flex items-center gap-2">
                        <Text variant="small" className="text-white uppercase tracking-wider">Phase 2: Complexes</Text>
                    </div>
                    <div className="h-px flex-1 bg-white/20" />
                    <div className="flex items-center gap-2">
                        <Text variant="small" className="text-white/60 uppercase tracking-wider">Phase 3: Templates</Text>
                    </div>
                </div> */}
            </section>

            {/* SECTION ATOMES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <Heading as="h2" level={2} className="mb-16 text-center">
                    Atomes UI & Conformité
                </Heading>

                <div className="grid gap-12">
                  {/* Carte Text - La base du système */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-border-subtle">
                      <div className="flex flex-col gap-4 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <Text variant="lead">Texte d'introduction (Lead)</Text>
                          <Text variant="body">Corps de texte standard pour la lecture.</Text>
                          <div className="flex items-center gap-2">
                              <Text variant="small" className="text-text-muted">Libellé :</Text>
                              <Text variant="code">Component.tsx</Text>
                          </div>
                          <Text variant="caption">MÉTADONNÉES EN MAJUSCULES</Text>
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary font-bold">Composant : Text</Text>
                          <Heading as="h3" level={3}>Typographie & Hiérarchie (10.x)</Heading>
                          <Text variant="body">
                              Gère la cohérence visuelle des polices, tailles et hauteurs de ligne. 
                              Il permet de respecter le critère 10.1 sur la lisibilité et l'espacement du texte sans casser le layout.
                          </Text>
                      </div>
                  </div>

                  {/* Carte Button */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-border-subtle">
                      <div className="flex flex-wrap gap-4 p-10 bg-white rounded-2xl shadow-sm border border-border-subtle justify-center">
                          <Button variant="primary">Valider</Button>
                          <Button variant="outline">Annuler</Button>
                          <Button variant="danger">Supprimer</Button>
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : Button</Text>
                          <Heading as="h3" level={3}>Accessibilité RGAA 11.x</Heading>
                          <Text variant="body">
                              Nos boutons garantissent un contraste minimum de 4.5:1 et des zones de clic optimisées. 
                              Les états de focus sont renforcés pour la navigation au clavier.
                          </Text>
                      </div>
                  </div>

                  {/* Carte Input */}
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-bg-subtle/30 p-8 rounded-3xl border border-border-subtle">
                      <div className="p-10 bg-white rounded-2xl shadow-sm border border-border-subtle">
                          <Input 
                              label="Nom complet" 
                              placeholder="Jean Dupont" 
                              description="Utilisé pour votre profil public." 
                          />
                      </div>
                      <div className="space-y-4">
                          <Text variant="caption" className="text-primary">Composant : Input</Text>
                          <Heading as="h3" level={3}>Saisie de données 11.2</Heading>
                          <Text variant="body">
                              Liaison explicite entre label et champ via <Text variant="code">id</Text>. 
                              Les messages d'erreur et descriptions sont liés via <Text variant="code">aria-describedby</Text>.
                          </Text>
                      </div>
                  </div>
                </div>
            </section>

            {/* SECTION COMPLEXES (Coming Soon) */}
            <section className="py-20 px-6 bg-bg-subtle/50 text-center">
                <Heading as="h2" level={2} className="mb-4">Composants complexes</Heading>
                <Text variant="body" className="mb-12">Prochaines étapes de la bibliothèque.</Text>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {['Modales', 'Tabs', 'Accordéons', 'Toasts'].map((item) => (
                        <div key={item} className="p-4 border border-dashed border-border-subtle rounded-lg grayscale">
                            <Text variant="small" className="font-bold opacity-50 uppercase tracking-widest">{item}</Text>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}