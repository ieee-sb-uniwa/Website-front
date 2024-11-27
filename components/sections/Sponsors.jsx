import React from 'react'
import { sponsors } from "@/constants/constants.js";
import { FocusCards } from "@/components/ui/FocusCards";
import { useTranslations } from 'next-intl';

export const Sponsors = () => {
  const t = useTranslations('Sponsors');
  return (
    <section className="bg-s3 overflow-clip bg-[url('/assets/images/text-slice-pattern.png')]">
      <section className="mx-auto w-full max-w-7xl p-4 text-center">
          <div className="mx-auto w-full max-w-7xl px-4 relative py-10 text-center md:py-20">        
              <header className='my-10 md:my-20'>
                  <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
                  <h3 className='h3 max-md:h5 text-p4 my-10'>
                      {t('heading')}
                  </h3>
                  <p className='my-10 body-2 max-lg:body-3 text-p5'>{t('paragraph')}</p>
              </header>
              <FocusCards cards={sponsors}/>
          </div>
      </section>

    </section>
  )
}
