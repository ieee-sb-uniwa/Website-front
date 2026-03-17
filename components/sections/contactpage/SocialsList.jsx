import React from 'react';
import { motion } from 'framer-motion'; 
import SocialStep from './SocialStep'; 
import { fadeIn, staggerContainer } from '@lib/motion.js';
import { useTranslations } from 'next-intl'; 

const SocialsList = ({ socials }) => {
  const t = useTranslations("ContactPage");

  return (
    <div className='container'>
      
      {/* Title & Subtitle */}
      <div className='w-full mt-12 mb-12'> 
        <h3 className='h3 max-lg:h4 max-md:h5 text-p4 mb-10'>
          {t('follow_us_title')}
        </h3>
        <p className='body-1 max-md:body-2 text-p5 max-w-2xl'>
          {t('follow_us_text')}
        </p>
      </div>

      {/* Socials Grid */}
      <div className="w-full flex justify-center mb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 w-fit' 
        >
          {socials.map((social, index) => (
            <motion.div 
              key={social.id}
              variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
            >
              <SocialStep
                icon={social.icon}
                title={social.title}
                url={social.url}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default SocialsList;