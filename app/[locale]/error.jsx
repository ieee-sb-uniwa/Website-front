'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);
  const errorTranslations = useTranslations('ErrorPage');
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="text-center p-8 bg-s5 shadow-md rounded-lg">
        <h4 className="h4 font-semibold text-red-600 mb-4">{errorTranslations('h4')}</h4>
        <p className="text-p5 mb-6">
          {error?.message || errorTranslations('paragraph')}
        </p>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-p4 hover:bg-blue-500 transition-colors"
          onClick={reset}
        >
          {errorTranslations('button_text')}
        </button>
      </div>
    </main>
  );
}
