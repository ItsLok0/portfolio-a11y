'use client';

import { Button } from "@/ui/button";
import Heading from "@/ui/heading";

export default function Home() {
  return (
  <main id="main-content" className="flex flex-1 items-center justify-center p-3 flex-col gap-10 focus-visible:shadow-none!" tabIndex={-1}>
      <Heading as="h1" level={1}>
        Portfolio A11Y
      </Heading>
      <Heading as="h2">
        Exemple bouton
      </Heading>
      <div className="exemple-btn flex justify-around flex-wrap gap-4">
        <Button
          size="lg"
          fullWidth={false}
          aria-label="Exemple de bouton principal large"
        >
            Btn primary large
        </Button>
        <Button
          variant="secondary"
          aria-label="Exemple de bouton secondaire moyen"
        >
            Btn secondary medium
        </Button>
        <Button
          variant="danger"
          size="sm"
          disabled
          aria-label="Exemple de bouton danger petit désactivé"
        >
            Btn danger small disabled
        </Button>
        <Button
          variant="success"
          fullWidth={true}
          aria-label="Exemple de bouton success plein largeur"
        >
            Btn success full width
        </Button>
      </div>
    </main>
  );
}