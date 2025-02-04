'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@components/ui/Button';
import { MdOutlineReplay } from "react-icons/md";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);
  const errorTranslations = useTranslations('ErrorPage');
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="text-center p-8 bg-s5 shadow-md rounded-lg">
        <h5 className="h5 font-semibold text-red-600 mb-4">{errorTranslations('h4')}</h5>
        <p className="text-p5 mb-6 body-2">
          {error?.message || errorTranslations('paragraph')}
        </p>
        <Button
          icon={<MdOutlineReplay size={36} color="white"/>}
          onClick={reset}
        >
          {errorTranslations('button_text')}
        </Button>
      </div>
    </main>
  );
}
