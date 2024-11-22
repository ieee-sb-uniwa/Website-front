import React from 'react'
import {council} from "../../constants/constants.js"
import CouncilMember from './CouncilMember.jsx';
import {useTranslations} from 'next-intl';

export const Council = () => {
  const t = useTranslations('Council');
  const halfLength = Math.floor(council.length/2); 
  // const halfLength = Math.floor(memberKeys.length/2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
        <div className="container block lg:flex">
            <div className='council_head-res relative z-2 mr-200 flex-300'>
                <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('council_caption')}</p>
                <h3 className='h3 max-md:h5 text-p4'>{t('council_heading')}</h3>
            </div>
            <div className=' council_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'> 
                {/* Get council from Constants.js.*/}
                <div className='flex-50'>
                    {council.slice(0, halfLength).map((member) => (
                    <CouncilMember
                        key={member.id}
                        item={member}
                        containerClassName="last:after-hidden last:after:max-md:block"
                    />
                    ))}
                </div>
                <div className='flex-50'>
                    {council.slice(halfLength).map((member) => (
                    <CouncilMember
                        key={member.id}
                        item={member}
                        containerClassName="last:after-hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                    />
                    ))}
                </div>
                {/* Get council from translations.*/}
                {/*
                <div className=' flex-50'>
                    {memberKeys.slice(0, halfLength).map((key) => (
                        <CouncilMember
                            key={key}
                            item={{
                                role: t(`members.${key}.role`),
                                photo: t(`members.${key}.photo`),
                                name: t(`members.${key}.name`),
                                email: t(`members.${key}.email`),
                            }}
                            containerClassName="last:after-hidden last:after:max-md:block"
                        />
                    ))}
                </div>
                <div className='flex-50'>
                    {memberKeys.slice(halfLength).map((key) => (
                        <CouncilMember
                            key={key}
                            item={{
                                role: t(`members.${key}.role`),
                                photo: t(`members.${key}.photo`),
                                name: t(`members.${key}.name`),
                                email: t(`members.${key}.email`),
                            }}
                            containerClassName="last:after-hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                        />
                    ))}
                </div>
                */}
            </div>
        </div>
    </section>
  )
}
export default Council;