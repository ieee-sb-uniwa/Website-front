import React from 'react'
import CardsCollection from '@components/events/CardsCollection'
import { useTranslations } from 'next-intl';
import { FlipWords } from '@components/ui/FlipWords';

const RecentActivities = ({activities = [], locale}) => {
  const t = useTranslations('RecentEvents')
  return (
    <section className="section_container">
      <p className='caption green_gradient mt-5 mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
      <h3 className='h3 max-md:h5 text-p4'>{t('heading')}</h3>
      <div className='mt-8 body-1 max-lg:body-2 text-p5'>{t('sentence_before_words')}
        <FlipWords words={t.raw('flippingWords')} className="text-p1" /> 
        {t('sentence_after_words')}
      </div>
      <p className='my-8 body-1 max-lg:body-2 text-p5'>{t('sentence2')} 🍕</p>
      <CardsCollection events={activities} maxCards={3} locale={locale}/>
    </section>
  )
}

export default RecentActivities