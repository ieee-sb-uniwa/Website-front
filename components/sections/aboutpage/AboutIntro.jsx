import React from 'react'
import {useTranslations} from 'next-intl';

const AboutIntro = () => {
  const aboutTranslation = useTranslations("AboutPage");
  return (
    <section className='mt-8 max-md:mt-24'>
         <div className='container'>
            <div className="max-w-960 relative mx-auto pb-40 pt-40 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                <h2 className='h3 max-md:h4 z-3 relative text-center mx-auto my-12 mx-w-lg text-p4 max-md:my-10 max-sm:max-w-sm'>
                    {aboutTranslation('mainTitle')}
                </h2>
                {/* <p className='body-1 max-md:body-2 relative text-center mx-auto text-p5'>
                    {aboutTranslation('introParagraph')}
                </p>  */}
                <p className='body-1 italic mt-4 max-md:body-2 relative text-center mx-auto text-p3'>
                    {aboutTranslation('note')}
                </p> 
            </div>
         </div>
    </section>
  )
}

export default AboutIntro