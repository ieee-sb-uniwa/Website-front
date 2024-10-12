import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Image from 'next/image'; // Ensure you import Image for rendering flags

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale(); // Get the current locale
  const [isPending, startTransition] = useTransition();

  // Define the language switch handler
  const switchLanguage = () => {
    // Determine the next locale based on the current locale
    const nextLocale = locale === 'en' ? 'gr' : 'en';

    startTransition(() => {
      router.replace(`/${nextLocale}`); // Replace the current path with the new locale
    });
  };

  return (
  <a
      href="#"
      className="social-icon" 
      onClick={switchLanguage}
      disabled={isPending} // Disable button while transition is pending
    >
      <Image
        src={`/assets/icons/${locale === 'en' ? 'greece' : 'great-britain'}.png`} // Use flag icons
        alt="language switcher"
        width={40}
        height={40}
        className="object-cover"
      />
    </a>
  ); 
}
