import React from 'react'
import {council} from "../../constants/constants.js"
import CouncilMember from './CouncilMember.jsx';
import {useTranslations} from 'next-intl';
export const Council = () => {
  const t = useTranslations('Council');
  const halfLength = Math.floor(council.length/2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
        <div className="container block lg:flex">
            <div className='council_head-res relative z-2 mr-200 flex-300'>
                <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('council_caption')}</p>
                <h3 className='h3 max-md:h5 text-p4'>{t('council_heading')}</h3>
            </div>
            <div className=' council_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'> 
                <div className=' flex-50'>
                    {council.slice(0, halfLength).map((council) => (
                        <CouncilMember 
                            key={council.id} 
                            item={council} 
                            containerClassName="last:after-hidden last:after:max-md:block"
                        />
                    ))}
                </div>
                <div className='flex-50'>
                    {council.slice(halfLength).map((council) => (
                        <CouncilMember 
                            key={council.id} 
                            item={council} 
                            containerClassName="last:after-hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
export default Council;