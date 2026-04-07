'use client';

import { Button } from "@/ui/button";

export default function Home() {
  return (
  <main id="main-content" className="flex flex-1 items-center justify-center p-3 flex-col gap-10 focus-visible:shadow-none!" tabIndex={-1}>
      <h1 className="text-5xl font-bold text-text-danger">
        Portfolio A11Y
      </h1>
      <h2 className="text-text-primary text-4xl font-bold">Exemple bouton</h2>
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