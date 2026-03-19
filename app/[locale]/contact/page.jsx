'use client';
import React, { useState } from 'react';
import PageIntro from '@components/ui/PageIntro';
import { useTranslations } from 'next-intl';
import ToggleButton from '@components/ui/ToggleButton';
import MapWrapper from '@components/sections/map/MapWrapper';

import SocialsList from '@components/sections/contactpage/SocialsList.jsx'; 
import { socials } from '../../../constants/constants.js'; 

const Page = () => {
  const t = useTranslations("ContactPage");
  const [socialMedia, setSocialMedia] = useState(true);

  return (
    <>
      <PageIntro
        url="/assets/photos/ieee-contact.png"
        heading={t("heading")}
        subheading={t("subheading")}
      />
      
        <div className='pt-24 flex justify-center'>
          <ToggleButton
            leftText={t('option_1')}
            rightText={t('option_2')}
            state={socialMedia}
            setState={setSocialMedia}
          />
        </div>
        
        {socialMedia ? (
          <div>
            <SocialsList socials={socials} />
          </div>
        ) : (
          <div>
            <MapWrapper />
          </div>
        )}
    </>
  );
};

export default Page;