import React from 'react'
import { sponsors as constantSponsors, sponsors, USE_API_SPONSORS } from "@/constants/constants.js";
import { FocusCards } from "@/components/ui/FocusCards";
import { getTranslations } from 'next-intl/server';

const tierOrder = ["elite", "diamond", "platinum", "gold", "silver", "bronze"];

const tierStyles = {
  elite: { border: "border-purple-500", text: "text-purple-500" },
  diamond: { border: "border-cyan-400", text: "text-cyan-400" },
  platinum: { border: "border-slate-300", text: "text-slate-300" },
  gold: { border: "border-yellow-400", text: "text-yellow-400" },
  silver: { border: "border-gray-400", text: "text-gray-400" },
  bronze: { border: "border-amber-700", text: "text-amber-700" },
};

export const Sponsors = async () => {
  const t = await getTranslations('Sponsors');



  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    const tier = sponsor.tier?.toLowerCase() || 'bronze';
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push(sponsor);
    return acc;
  }, {});

  return (
    <section className="bg-s3 overflow-clip hexagonal-mesh">
      <section className="mx-auto w-full max-w-7xl p-4 text-center">
          <div className="mx-auto w-full max-w-7xl px-4 relative pb-8 text-center md:pb-16">        
              <header className='my-10 md:my-20'>
                  <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{t('caption')}</p>
                  <h3 className='h3 max-md:h5 text-p4 my-10'>
                      {t('heading')}
                  </h3>
                  <p className='my-10 h6 max-lg:body-2 text-p5'>{t('paragraph')}</p>
              </header>
              <div className="flex flex-col gap-12">
                {tierOrder.map((tier) => {
                  if (!sponsors[tier] || sponsors[tier].length === 0) return null;
                  return (
                    <div key={tier} className={`border-4 rounded-xl p-8 ${tierStyles[tier].border}`}>
                      <h4 className={`text-2xl font-bold mb-8 uppercase tracking-widest ${tierStyles[tier].text}`}>
                        {tier}
                      </h4>
                      <FocusCards cards={sponsors[tier]} showTitles={false} openInNewTabs={true}/>
                    </div>
                  );
                })}
              </div>
          </div>
      </section>

    </section>
  )
}
