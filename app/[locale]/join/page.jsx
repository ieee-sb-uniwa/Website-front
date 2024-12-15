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
                {/* Conditionally render different text based on the toggle state */}
                <div className="text-p4 mt-10 ml-5">
                {SB ? (
                  <div>
                    <p className=''>{t('sb_intro')}</p>  
                    <h4 className='h4 max-lg:h5 max-md:h6 py-3 md:py-5 z-3 mx-auto relative mx-w-lg mb-11 text-p4 max-md:mb-7 max-sm:max-w-sm'>Βήματα εγγραφής στο ΙΕΕΕ SB UniWA</h4>
                    <ol class="overflow-hidden space-y-8">
                      <li class="relative flex-1">
                        Submit a registration request in the form below:
                      </li>
                      <li class="relative flex-1 ">
                        A member of the student branch will contact you and discuss how you can get involved in the branch based on your skills and strengths.
                      </li>
                    </ol>
                  </div>
                ) : (
                  <div>
                    <p>Σύμφωνα με το ΙΕΕΕ, τα επίσημα μέλη του IEEE SB UniWA θεωρούνται όλοι οι φοιτητές του Πανεπιστημίου Δυτικής Αττικής που είναι εγγεγραμμένα μέλη στον οργανισμό μέσω ετήσιας συνδρομής.</p>  
                    <p>You can register on the official IEEE website: IEEE Membership Registration</p>
                  </div>
                )}
              </div>
            </div>
        </div>
    </section>
  )
}

export default page