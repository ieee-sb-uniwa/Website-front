export const dynamic = 'force-dynamic'
import React from 'react'
import AboutIntro from '@components/sections/aboutpage/AboutIntro';
import TextWithImageSegment from '@components/sections/aboutpage/TextWithImageSegment';
import IEEEUniwa from '@components/sections/aboutpage/IEEEUniwa';
import {getCouncil} from "@actions/getCouncil";
import {getTranslations} from 'next-intl/server';
import Team from '@components/sections/team/Team';
import MapWrapper from '@components/sections/map/MapWrapper';

async function Page(props) {
  const params = await props.params;
  const locale = params.locale;
  const council = await getCouncil(locale);
  if (!council) notFound();
  const councilTranslations =  await getTranslations('Council');
  return (
  <>
  <AboutIntro/>
  <TextWithImageSegment
    imagePosition='right'
    imageSrc="/assets/photos/IEEE_LOGO_OFFICE.jpg"
    imageAlt="Photo of the IEEE Master Brand logo, taken from our office (ΖΒ006)"
    caption="The world's largest technological organization"
    text="The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization, focused on advancing technology for the benefit of humanity."
    title="What is IEEE?"
    bulletedList={[
      "It was founded in 1963 through the merger of the American Institute of Electrical Engineers and the Institute of Radio Engineers.",
      "The organization's headquarters are located in New York.",
      "It is the largest organization of technology professionals, with approximately 430,000 members in around 160 countries.",
      "The majority of members are engineers and scientists/academics. Most of them are computer scientists, software engineers, IT professionals, physicists, and even doctors.",
      "For this reason, the organization often prefers using the acronym IEEE rather than its full name."
    ]}
    links={[
      { href: "/join", text: "Join IEEE Today" },
      { href: "https://ieee.org", text: "Explore More" }
    ]}
    imageWidth={6016}
    imageHeight={4000}
    buttonIcon='/assets/icons/ieee.svg'
  />
  <TextWithImageSegment
    imagePosition='left'
    imageSrc="/assets/photos/ieee-student-branch.png"
    imageAlt='IEEE Student Branch Event'
    caption='University-based IEEE Community'
    title='What is an IEEE Student Branch (SB)?'
    text='An IEEE Student Branch (SB) is a branch of IEEE at universities. It is aimed at students in the same scientific fields as IEEE. The branch exists to connect students with each other (either within the same university or across other IEEE SBs) or with industry professionals, in order to promote education and the technical development of electrical engineering, telecommunications, computer science, and unified standards. To achieve this, it organizes events and implements applications in this scientific field, which can be funded and promoted through IEEE. Similar branches exist at universities around the world, including in Greece.'
    links={[
      { href: "https://students.ieee.org/", text: "Explore IEEE Students" }
    ]}
    buttonIcon='/assets/icons/students.svg'
  />
  <IEEEUniwa/>
  <Team team={council} translationsComponent={councilTranslations}/>
  <div className='g5'><MapWrapper/></div>
  
  </>
);
}

export default Page;