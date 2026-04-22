import { Metadata } from "next";
import InputForm from '@/app/ui/form/inputForm';
import { Heading } from "@/app/ui/components/heading";
import Link from "next/dist/client/link";

export const metadata: Metadata = {
    title: 'Formulaire input',
    description: 'Formulaire de test pour un input avec validation dynamique et affichage d\'erreur en temps réel.',
};

export default function Page() {
    return (
        <div className="flex flex-1 items-center justify-center p-3 flex-col gap-10 focus-visible:shadow-none!">
            <div className="flex w-full justify-start">
                <Link
                    href="/dashboard/input"
                    className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-fg"
                >
                    Go Back
                </Link>
            </div>
            <Heading as="h1" className='mb-20'>
                Validation dynamique Input
            </Heading>
            <div className="w-full flex flex-col gap-8">
                <InputForm />
            </div>
        </div>
    );
}