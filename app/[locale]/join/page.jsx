'use client';
import React, { useState } from 'react'
import ToggleButton from '@components/ui/ToggleButton';
import {useTranslations} from 'next-intl';
import Hyperlink from '@components/ui/Hyperlink';
import StepsList from '@components/sections/joinpage/StepsList';
import { joinIEEEStepsGR, joinSBStepsGR, joinIEEEStepsEN, joinSBStepsEN } from '@constants/constants';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Faq from '@components/sections/joinpage/Faq';

const Page = () => {
  const { locale } = useParams(); 
  const [SB, setSB] = useState(true);  
  // Select the correct steps based on the locale
  const joinIEEESteps = locale === 'gr' ? joinIEEEStepsGR : joinIEEEStepsEN;
  const joinSBSteps = locale === 'gr' ? joinSBStepsGR : joinSBStepsEN;
  const t = useTranslations("JoinPage");
  return (
    <section>
        <div className='container'>
            <div className ="max-w-960 join-head_before relative mx-auto bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative text-center mx-auto my-14  mx-w-lg  text-p4 max-md:my-11 max-sm:max-w-sm'>
                  {t('h3')}
                </h3>
                <p className='h6 max-lg:body-1 max-md:body-2 relative text-center mx-auto text-p5  my-11 max-md:my-8'>
                        {t('subheading_first_part')}
                        <span className="green_gradient">{t('volunteer')}</span>
                        {t('subheading_second_part')}
                        <span className="green_gradient">{t('ieee')}</span>
                </p>
                
                <ToggleButton
                  leftText={t('option1')}
                  rightText={t('option2')}
                  state={SB}
                  setState={setSB}
                />
                <div className='flex-1 flex justify-center items-center'>
                    <Image
                      src={SB ? "/assets/logos/sblogo-text-white.svg" : "/assets/logos/IEEE_logo.png"}
                      alt="logo"
                      width={525}
                      height={180}
                      className="max-sm:w-[40%] max-sm:h-[40%] max-md:w-[30%] max-md:h-[30%] w-[20%] h-[20%] object-contain mt-10"
                    />
                </div>
                {/* Conditionally render different text based on the toggle state */}
                <div className="mt-10 ml-5">
                {SB ? (
                  <div>
                    <p className='body-1 max-lg:body-2 relative mx-auto text-p4'>
                      {t('sb_intro1')}&nbsp;
                      <Hyperlink href="/science-teams" className="body-1 max-lg:body-2 text-p4 mx-auto" arrow={false}>
                        {t('scientific_groups')}
                      </Hyperlink>
                      {t('sb_intro2')}
                      <Hyperlink href="/departments" className="body-1 max-lg:body-2 text-p4" arrow={false}>
                        {t('departments')}
                      </Hyperlink>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className='body-1 max-lg:body-2 relative mx-auto text-p4'>{t('ieee_intro')}</p>  
                  </div>
                )}
                <h4 className='h4 max-lg:h5 py-3 md:py-5 z-3 mx-auto relative mx-w-lg my-10 text-p4 max-md:my-8'>{t('join_steps')}</h4>
                {/* Re-mount StepsList with a unique key when toggled */}
                <StepsList key={SB ? 'sb-steps' : 'ieee-steps'} steps={SB ? joinSBSteps : joinIEEESteps} />
              </div>
                <Faq showNumbers={false} noOfQuestions={6}/>
            </div>
        </div>
    </section>
  )
}

export default Page