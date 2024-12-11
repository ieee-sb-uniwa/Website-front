'use client';
import React, { useState } from 'react'
import ToggleButton from '@components/ui/ToggleButton';
import {useTranslations} from 'next-intl';

const page = () => {
  const [SB, setSB] = useState(true);  
  const t = useTranslations("JoinPage");
  return (
    <section>
        <div className='container'>
            <div className ="max-w-960 join-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative text-center mx-auto mb-14 my-20 mx-w-lg py-10 md:py-20 text-p4 max-md:mb-11 max-sm:max-w-sm'>
                  {t('h3')}
                </h3>
                
                <ToggleButton
                  leftText={t('option1')}
                  rightText={t('option2')}
                  state={SB}
                  setState={setSB}
                />
            </div>
        </div>
    </section>
  )
}

export default page