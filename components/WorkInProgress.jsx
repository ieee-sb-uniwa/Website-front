import React from 'react'
import { FaGears } from "react-icons/fa6";
import { TiArrowBack } from "react-icons/ti";
import Button from '@components/ui/Button';
import { useTranslations } from 'next-intl';

const WorkInProgress = () => {
    const t = useTranslations("NotFoundPage");

    return (
      <main className="flex h-screen flex-col items-center justify-center gap-2 mx-4">
        <FaGears size={160} className='text-p4' />
        <h4 className='green_gradient max-w-440 h4 max-lg:h5 text-p4 mb-10 animate-pulse'>
          {t('h4')}
        </h4>
        <p className='max-w-440 mb-14 body-1 max-lg:body-2 max-md:mb-10 text-p5'>
          {t('paragraph')}
        </p>
        <Button 
          href="/" 
          icon={<TiArrowBack size={36} color="white" />} 
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
          {t('button_text')}
        </Button>
      </main>
    );
}

export default WorkInProgress