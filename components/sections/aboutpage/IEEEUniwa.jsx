import React from 'react';
import Benefits from '@components/ui/Benefits';
import { useTranslations } from 'next-intl';
import ReusableCTA from '@components/sections/aboutpage/ReusableCTA';

const IEEEUniwa = () => {
  const t = useTranslations("AboutPage.IEEEUniwa"); 
  const storyTranslations = useTranslations(A);
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="h3 text-center green_gradient mb-12">
          {t('heading')}
        </h3>
        <ReusableCTA
            backgroundImage="assets/photos/IEEE Student Branch Pireaus.jpg"
            heading={t('heading')}
            paragraph={t('paragraph')}
            buttonText={t('ctaButtonText')}
            buttonLink="/join"
            buttonIcon="/assets/icons/people-add.svg"
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
              <Benefits benefits={t.raw('benefitsIEEEUniwa')}/>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IEEEUniwa;

