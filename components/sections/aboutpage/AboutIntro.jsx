import React from 'react'
import {useTranslations} from 'next-intl';

const AboutIntro = () => {
  const aboutTranslation = useTranslations("AboutPage");
  return (
    <section className='mt-8 max-md:mt-24'>
         <div className='container'>
            <div className="max-w-960 relative mx-auto bg-s1/50 pb-40 pt-40 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                <h2 className='h2 max-lg:h3 max-md:h4 z-3 relative text-center mx-auto my-14  mx-w-lg  text-p4 max-md:my-11 max-sm:max-w-sm'>
                    {aboutTranslation('mainTitle')}
                </h2>
                <p className='h6 max-lg:body-1 max-md:body-2 relative text-center mx-auto text-p5'>
                    {aboutTranslation('introParagraph')}
                </p> 
                <p className='h6 italic mt-4 max-lg:body-1 max-md:body-2 relative text-center mx-auto text-p7'>
                    {aboutTranslation('note')}
                </p> 
            </div>
         </div>
    </section>
  )
}

export default AboutIntro