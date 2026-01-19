
import React from 'react'
import WorkInProgress from "@/components/WorkInProgress";
import {SG} from "@/constants/constants";
import {getAllSG} from "@actions/getAllScientificGroups";
import Benefits from "@/components/ui/Benefits";
import { mapSGAPIResponseToBenefitsFormat } from "@/lib/utils";
import { getTranslations } from 'next-intl/server';
import PageIntro from "@/components/ui/PageIntro";

const Page = async ({ params }) => {
  const locale = (await params).locale; 
  const SGApiResponse = await getAllSG(locale);
  const t = await getTranslations('ScientificGroups');
  const SG = mapSGAPIResponseToBenefitsFormat(SGApiResponse);
  return (
    <>
      <PageIntro
         heading={t('heading')}
         subheading={t('paragraph')}
         bgImage="/assets/photos/energy-project.jpg"
      />
      <div className='container relative z-2 py-6'>
       <Benefits benefits={SG} cardsWidth={21}/>
      </div>
    </>
  );
}

export default Page;