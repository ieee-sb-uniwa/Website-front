import React from 'react';
import Benefits from '@components/ui/Benefits';
import { benefitsIEEEUniwa } from "@constants/constants";
import { useTranslations } from 'next-intl';

const IEEEUniwa = () => {
  const t = useTranslations("AboutPage.IEEEUniwa"); 
  return (
    <section className="py-10">
      <div className="container">
        <h3 className="h3 text-center green_gradient mb-12">
          {t('heading')}
        </h3>

        <div className="hidden lg:ieee-uniwa-grid">
          {/* Left Side: Vertical Title */}
          <h4 className="goals-title grid-title text-p1/50">
            {t('goals_title')}
          </h4>

          {/* Right Side: Content Container (Goals Text + Goal Cards) */}
          <section className="grid-goalcontent">
            {/* Goals Text */}
            <p className="body-1 text-pretty text-p4 text-left">
              {t('paragraph')}
            </p>

            {/* Goal Cards */}
            <div className="flex flex-wrap gap-6">
              
              <Benefits benefits={t.raw('benefitsIEEEUniwa')}/>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IEEEUniwa;

