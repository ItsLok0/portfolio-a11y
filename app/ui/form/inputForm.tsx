'use client';

import { useActionState, useRef, useEffect } from 'react';
import { Input } from '@/app/ui/components/input';
import { Button } from '@/app/ui/components/button';
import { Heading } from '../components/heading';
import { Text } from '../components/text';
import checkEmail from '@/app/actions';

const initialState = {
  message: '',
  success: undefined,
  errors: {},
}

export default function InputForm() {
   const [state, formAction, pending] = useActionState(checkEmail, initialState);
   const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state.message && statusRef.current) {
      statusRef.current.focus();
    }
  }, [state.message]);

  return (
    <div className="form">
      <Heading as="h2" className='mb-8'>Test de validation dynamique</Heading>
      <form
        action={formAction}
        noValidate
        className="w-full p-6 border rounded-xl bg-ghost-hover/20 flex flex-col gap-4"
      >
        <Text as='p' variant='small' className='text-text-secondary'>* : champ obligatoire</Text>
        <Input
          name='email'
          label="Tester un email"
          placeholder="nom.prenom@email.com"
          type='email'
          autoComplete='email'
          error={!!state.errors?.email}
          errorMessage={state.errors?.email?.[0]}
          description="Entrez une adresse pour tester le déclenchement de l'erreur."
          required
        />

        {state.message && (
          <Text
            as="p"
            ref={statusRef}
            tabIndex={-1}
            aria-live="polite"
            className={
              state.success
                ? 'text-sm text-success font-medium rounded-md p-3 bg-success/10 border border-success/30 outline-none'
                : 'text-sm text-danger font-medium rounded-md p-3 bg-danger/10 border border-danger/30 outline-none'
            }
          >
            {state.message}
          </Text>
        )}

        <Button
          fullWidth={true}
          type="submit"
          aria-label="Valider le champ email pour vérifier les erreurs"
          isLoading={pending}
          disabled={pending}
        >
          Valider le champ
        </Button>
      </form>
    </div>
  );
}