import React from 'react'
import { scientificGroupsLogos } from "@/constants/constants.js";
import { FocusCards } from "@/components/ui/FocusCards";
import { useTranslations } from 'next-intl';

const ScienceGroupsOverview = () => {
  const t = useTranslations('ScientificGroups');
  return (
    <section className="bg-s3 overflow-clip hexagonal-mesh">
      <section className="mx-auto w-full max-w-7xl p-4 text-center">
          <div className="mx-auto w-full max-w-7xl px-4 relative py-10 text-center md:py-20">        
              <header className='my-10 md:my-20'>
                  <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
                  <h3 className='h3 max-md:h5 text-p4 my-10'>
                      {t('heading')}
                  </h3>
                  <p className='my-10 h6 max-lg:body-2 text-p5'>
                    {t('paragraph')}
                  </p>
              </header>
              <FocusCards cards={scientificGroupsLogos} showTitles={true}/>
          </div>
      </section>
    </section>
  )
}

export default ScienceGroupsOverview