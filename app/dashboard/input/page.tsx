'use client';

import { useState } from 'react';   
import { InputComponent } from '@/app/ui/components/input';

export default function Page() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validate = (value: string) => {
        if (!value) return setError('Ce champ est obligatoire');
        if (!value.includes('@')) return setError('Adresse e-mail invalide');
        setError('');
    };

    return (
        <div className="p-8 max-w-md mx-auto flex flex-col gap-6">
            <InputComponent
                label="Adresse e-mail"
                placeholder="nom@exemple.fr"
                description="Exemple d'une description"
                size="md"
                value={email}
                onChange={(e) => { setEmail(e.target.value); validate(e.target.value); }}
                onBlur={(e) => validate(e.target.value)}
                error={error}
            />

            <InputComponent label="Taille sm" size="sm" placeholder="Petit" />
            <InputComponent label="Taille md" size="md" placeholder="Moyen" />
            <InputComponent label="Taille lg" size="lg" placeholder="Grand" />

            <InputComponent label="Avec description" description="Texte d'aide visible." />
            <InputComponent label="Avec erreur" error="Ce champ est obligatoire." />
            <InputComponent label="Désactivé" disabled value="Valeur non modifiable" onChange={() => {}} />
        </div>
    );
}