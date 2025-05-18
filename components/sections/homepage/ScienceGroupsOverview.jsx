import React from 'react'
import { scientificGroupsLogos } from "@/constants/constants.js";
import { useTranslations } from 'next-intl';
import { FocusCardsCarousel } from "@/components/ui/FocusCards";
import Button from "@components/ui/Button";
import { MdScience } from "react-icons/md";
import { Link } from '@i18n/navigation';

const ScienceGroupsOverview = () => {
  const t = useTranslations('ScientificGroups');
  return (
    <section className="bg-[url('/assets/photos/energy-project.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-black/50 z-2"></div>
      <section className="mx-auto w-full max-w-7xl p-4 text-center relative z-10">
          <div className="mx-auto w-full max-w-7xl px-4 relative pb-6 text-center">        
              <header className='my-10 md:my-20'>
                  <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
                  <h3 className='text-shadow h3 max-md:h5 text-p4 my-10'>
                      {t('heading')}
                  </h3>
                  <p className='text-shadow my-10 h6 max-lg:body-2 text-p5'>
                    {t('paragraph')}
                  </p>
              </header>
              <FocusCardsCarousel 
                cards={scientificGroupsLogos} 
                showTitles={true}
                openInNewTabs={false} 
              />
          </div>
          <div className='py-7'>
            <Link href="/science-teams">
                <Button icon={<MdScience size={36} color="white"/>}  textClassName='text-p1 base-bold'>{t('all_groups')}</Button>
            </Link>

          </div>
      </section>
    </section>
  )
}

export default ScienceGroupsOverview