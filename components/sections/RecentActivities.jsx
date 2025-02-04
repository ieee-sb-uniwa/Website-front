import React from 'react'
import CardsCollection from '@components/events/CardsCollection'
import { useTranslations } from 'next-intl';

const RecentActivities = ({activities = [], locale}) => {
  const t = useTranslations('Events')
  return (
    <section className="section_container">
    <h3 className='h3 max-md:h5 text-p4'>{t('heading')}</h3>
    <CardsCollection events={activities} maxCards={3} locale={locale}/>
    </section>
  )
}

export default RecentActivities