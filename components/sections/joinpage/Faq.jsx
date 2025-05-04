import React from 'react'
import Hyperlink from '@components/ui/Hyperlink'
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import FaqItem from './FaqItem';
//import {faq} from '@constants/constants';

const Faq = ({showNumbers, noOfQuestions=6}) => {
  const t = useTranslations('FAQ');
  const faq = t.raw('questions_list'); 
  return (
    <section>
        <div className='container relative z-2 py-28'>
            <div>
                <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-lg text-p4 mb-7'>{t('heading')}</h3>
                <p className='body-1 max-sm:body-2 max-lg:max-w-lg'>{t('paragraph')}{' '} 
                    <Hyperlink href="/contact" className="text-p4" arrow={false}>
                        {t('contact_link')}
                    </Hyperlink>{' '} 
                    {t('paragraph_end')}</p>
            </div>
            <div className='faq-glow_before relative z-2 border-s2 bg-s1 mt-22'>
                <div className='container flex gap-10 max-lg:block'>
                    <div className='rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1'>
                        <Image
                            src="/assets/icons/faq.svg"
                            alt="faq-icon"
                            height={26}
                            width={26}
                            className="size-1/2"
                        />
                    </div>
                    <div className='relative flex-1 pt-24'>
                        {faq.map((item, index) => (  
                            <FaqItem key={item.id} item={item} index={index} noOfItems={noOfQuestions} showNumbers={showNumbers}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq