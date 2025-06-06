import React from 'react';
import Benefits from '@components/ui/Benefits';
import { useTranslations } from 'next-intl';
import CTA from '@components/sections/aboutpage/CTA';

const IEEEUniwa = () => {
  const t = useTranslations("AboutPage.IEEEUniwa"); 
  const story = useTranslations("AboutPage.SBHistory"); 
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="h3 text-center green_gradient mb-12">
          {t('heading')}
        </h3>
          <CTA
            backgroundImage="/assets/photos/ourHistory.jpg"
            heading= {story('heading')}
            paragraph={story('paragraph')}
          />
        <div className="ieee-uniwa-grid">
          {/* Left Side: Vertical Title */}
          <h4 className="max-lg:hidden goals-title grid-title text-s3">
            {t('goals_title')}
          </h4>

          {/* Right Side: Content Container (Goals Text + Goal Cards) */}
          <section className="grid-goalcontent">
            {/* Goals Text */}
            <p className="body-1 text-pretty text-p4 text-left">
              {t('paragraph')}
            </p>

            {/* Goal Cards */}
            <div className="flex flex-wrap gap-6 mt-10">
              <Benefits benefits={t.raw('benefitsIEEEUniwa')} cardsWidth={15}/>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IEEEUniwa;

