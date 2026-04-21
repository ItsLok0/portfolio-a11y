'use server';

import * as z from 'zod';

const emailSchema = z.object({
  email: z
    .email('Veuillez saisir une adresse email valide.')
    .min(1, 'L\'adresse email est obligatoire.'),
});

export type ActionState = {
  message: string;
  success?: boolean;
  errors?: {
    email?: string[];
  };
};

export default async function checkEmail(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawEmail = formData.get('email');

  const result = emailSchema.safeParse({ email: rawEmail });

  if (!result.success) {
    return {
      message: 'Email non valide.',
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    message: `Email valide`,
    success: true,
    errors: {},
  };
}