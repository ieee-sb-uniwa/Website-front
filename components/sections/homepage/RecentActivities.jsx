import React from "react";
import CardsCollection from "@components/events/CardsCollection";
import { useTranslations } from "next-intl";

const RecentActivities = ({ activities = [], locale }) => {
  const t = useTranslations("RecentEvents");
  return (
    <section className="section_container my-10">
      <p className="caption green_gradient mt-5 mb-5 mx-md:mb-2.5 ">
        {t("caption")}
      </p>
      <h3 className="h3 max-md:h4 text-p4">{t("heading")}</h3>
      {/* <div className='mt-8 body-1 max-md:body-2 text-p5'>
         {t('sentence1')}
      </div>
      <p className='my-8 body-1 max-md:body-2 text-p5'>{t('sentence2')} 🍕</p> */}
      <CardsCollection
        events={activities}
        maxCards={3}
        locale={locale}
        eventsType={"sb-events"}
      />
    </section>
  );
};

export default RecentActivities;
