import React from 'react'
import CardsCollection from '@components/events/CardsCollection'

const RecentActivities = ({activities = [], locale}) => {
  return (
    <section className="section_container">
    <h3 className='h3 max-md:h5 text-p4'>Recent Activities</h3>
    <CardsCollection events={activities} maxCards={3} locale={locale}/>
    </section>
  )
}

export default RecentActivities