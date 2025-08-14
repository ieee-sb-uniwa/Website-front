import React from 'react'
import { scientificGroupsLogos } from "@/constants/constants.js";
import { useTranslations } from 'next-intl';
import { FocusCardsCarousel, FocusCards } from "@/components/ui/FocusCards";
import Button from "@components/ui/Button";
import { MdScience } from "react-icons/md";

const ScienceGroupsOverview = () => {
  const t = useTranslations('ScientificGroups');
  return (
    <section className="bg-[url('/assets/photos/energy-project.jpg')] bg-cover bg-center bg-no-repeat relative bg-s1">
      <div className="absolute inset-0 bg-black/50 z-2 "></div>
      <section className="mx-auto w-full max-w-7xl py-1 text-center relative z-10">
          <div className="mx-auto w-full max-w-7xl relative text-center">        
              <header className='my-10 md:my-20'>
                  <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
                  <h3 className='text-shadow h3 max-md:h5 text-p4 my-10'>
                      {t('heading')}
                  </h3>
                  <p className='text-shadow my-10 h6 max-lg:body-2 text-p5'>
                    {t('paragraph')}
                  </p>
              </header>
              {
                scientificGroupsLogos.length > 4 ? (
                  <FocusCardsCarousel 
                    cards={scientificGroupsLogos} 
                    showTitles={true}
                    openInNewTabs={false} 
                  />
                ) : (
                  <div className='mb-14'>
                    <FocusCards 
                      cards={scientificGroupsLogos}  
                      showTitles={true} 
                      openInNewTabs={false} 
                    />
                  </div>
                )
              }
          </div>
          <div className='py-7'>
           <Button icon={<MdScience size={36} color="white"/>} textClassName='text-p1 base-bold'>{t('all_groups')}</Button>
          </div>
      </section>
    </section>
  )
}

export default ScienceGroupsOverview