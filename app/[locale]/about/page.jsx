export const dynamic = 'force-dynamic'
import React from 'react'
import AboutIntro from '@components/sections/aboutpage/AboutIntro';
import TextWithImageSegment from '@components/sections/aboutpage/TextWithImageSegment';
import IEEEUniwa from '@components/sections/aboutpage/IEEEUniwa';
import {getCouncil, getCounselor} from "@actions/getCouncil";
import {getTranslations} from 'next-intl/server';
import Team from '@components/sections/team/Team';
import MapWrapper from '@components/sections/map/MapWrapper';
import JoinUsCTA from '@components/sections/aboutpage/JoinUsCTA';

async function Page(props) {
  const params = await props.params;
  const locale = params.locale;
  const council = await getCouncil(locale);
  const counselor = await getCounselor(locale);
  if (!council || !counselor) notFound();
  // Concatenate counselor to council
  const CouncilTranslations =  await getTranslations('Council');
  const CounselorTranslations =  await getTranslations('Counselor');

  //Get translations for TextWithImageSegments
  const IEEESegmentTranslations = await getTranslations('TextWithImageSegments.IEEE');
  const GreeceSegmentTranslations = await getTranslations('TextWithImageSegments.IEEEGreeceSection');
  const Region8SegmentTranslations = await getTranslations('TextWithImageSegments.IEEERegion8');
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
        imagePosition='left'
        imageSrc="/assets/images/region8-map-transparent.png"
        imageAlt={Region8SegmentTranslations('imageAlt')}
        caption={Region8SegmentTranslations('caption')}
        text={Region8SegmentTranslations('text')}
        title={Region8SegmentTranslations('title')}
        links={Region8SegmentTranslations.raw('links')}
        imageWidth={1280}
        imageHeight={548}
        buttonIcon='/assets/icons/read.svg'
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
        imageSrc="/assets/images/ieee-sb-greek-logos-collage2.PNG"
        imageAlt={SBSegmentTranslations('imageAlt')}
        caption={SBSegmentTranslations('caption')}
        text={SBSegmentTranslations('text')}
        title={SBSegmentTranslations('title')}
        links={SBSegmentTranslations.raw('links')}
        imageWidth={3270}
        imageHeight={2264}
        buttonIcon='/assets/icons/students.svg'
  />
  <IEEEUniwa/>
  <JoinUsCTA/>
  <Team team={council} translationsComponent={CouncilTranslations}/>
  <Team team={counselor} translationsComponent={CounselorTranslations}/>
  <div className='g4'><MapWrapper/></div>
  
  </>
);
}

export default Page;