import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { motion } from 'framer-motion'; 
import Image from 'next/image'; 

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale(); // Get the current locale
  const [isPending, startTransition] = useTransition();
  const [isSwitching, setIsSwitching] = useState(false); 

  // Define the language switch handler
  const switchLanguage = () => {
    // Determine the next locale based on the current locale
    const nextLocale = locale === 'en' ? 'gr' : 'en';
    setIsSwitching(true);
    setTimeout(() => {
      startTransition(() => {
        router.replace(`/${nextLocale}`);  
      });
      setIsSwitching(false);  
    }, 500);  // Matching the duration of the animation
  };

  return (
    <a
      href="#"
      className="social-icon" 
      onClick={(e) => {
        e.preventDefault();
        switchLanguage();
      }}
      disabled={isPending} // Disable button while transition is pending
    >
      <motion.div
        key={locale}  // Key helps framer-motion track the element changes
        initial={{ rotateY: 0 }}  // Initial state (no rotation)
        animate={{ rotateY: 360 }}  // Rotate on language switch
        transition={{ duration: 0.5 }}  // Smooth animation
        style={{ display: 'inline-block' }}  // Ensure the div is inline for better control
      >
        <Image
          src={`/assets/icons/${locale === 'en' ? 'greece' : 'great-britain'}.png`} // Use flag icons
          alt="language switcher"
          width={40}
          height={40}
          className="object-cover"
        />
      </motion.div>
    </a>
  ); 
}
