'use client';
 
import Error from 'next/error';
 
export default function NotFound() {
  return (

      <body>
        <Error statusCode={404} />
      </body>

  );
}