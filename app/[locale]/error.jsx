'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="text-center p-8 bg-s5 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">Oops! Something went wrong</h1>
        <p className="text-p5 mb-6">
          {error?.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 text-p4 hover:bg-blue-500 transition-colors"
          onClick={reset}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
