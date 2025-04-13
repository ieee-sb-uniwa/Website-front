export const dynamic = 'force-dynamic'
import React from 'react'
import AboutIntro from '@components/sections/aboutpage/AboutIntro';
import TextWithImageSegment from '@components/sections/aboutpage/TextWithImageSegment';
import IEEEUniwa from '@components/sections/aboutpage/IEEEUniwa';
import {getCouncil, getCounselor} from "@actions/getCouncil";
import {getTranslations} from 'next-intl/server';
import Team from '@components/sections/team/Team';
import MapWrapper from '@components/sections/map/MapWrapper';

async function Page(props) {
  const params = await props.params;
  const locale = params.locale;
  const council = await getCouncil(locale);
  const counselor = await getCounselor(locale);
  if (!council || !counselor) notFound();
  // Concatenate counselor to council
  const allMembers = [...council, ...counselor];
  const CouncilCounselorTranslations =  await getTranslations('CounselorCouncil');

  //Get translations for TextWithImageSegments
  const IEEESegmentTranslations = await getTranslations('TextWithImageSegments.IEEE');
  const GreeceSegmentTranslations = await getTranslations('TextWithImageSegments.IEEEGreeceSection');
  const SBSegmentTranslations = await getTranslations('TextWithImageSegments.IEEEStudents');
  return (
  <>
  <div className='main'>
    <div className='gradient'/>
  </div>
  <AboutIntro/>
  <TextWithImageSegment
        imagePosition='right'
        imageSrc="/assets/photos/IEEE_LOGO_OFFICE.jpg"
        imageAlt={IEEESegmentTranslations('imageAlt')}
        caption={IEEESegmentTranslations('caption')}
        text={IEEESegmentTranslations('text')}
        title={IEEESegmentTranslations('title')}
        bulletedList={IEEESegmentTranslations.raw('bulletedList')}
        links={IEEESegmentTranslations.raw('links')}
        imageWidth={6016}
        imageHeight={4000}
        buttonIcon='/assets/icons/ieee.svg'
  />
  <TextWithImageSegment
        imagePosition='right'
        imageSrc="/assets/logos/IEEEGR.png"
        imageAlt={GreeceSegmentTranslations('imageAlt')}
        caption={GreeceSegmentTranslations('caption')}
        text={GreeceSegmentTranslations('text')}
        title={GreeceSegmentTranslations('title')}
        links={GreeceSegmentTranslations.raw('links')}
        imageWidth={1920}
        imageHeight={1440}
        buttonIcon='/assets/icons/travel-explore.svg'
  />
  <TextWithImageSegment
        imagePosition='left'
        imageSrc="/assets/images/ieee-sb-logos-collage.png"
        imageAlt={SBSegmentTranslations('imageAlt')}
        caption={SBSegmentTranslations('caption')}
        text={SBSegmentTranslations('text')}
        title={SBSegmentTranslations('title')}
        links={SBSegmentTranslations.raw('links')}
        buttonIcon='/assets/icons/students.svg'
  />
  <IEEEUniwa/>
  <Team team={allMembers} translationsComponent={CouncilCounselorTranslations}/>
  <div className='g4'><MapWrapper/></div>
  
  </>
);
}

export default Page;