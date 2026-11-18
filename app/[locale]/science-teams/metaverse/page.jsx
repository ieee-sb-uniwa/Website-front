import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const {locale} = await params;
  const metaverse = await getSGByName(locale, 'Metaverse');
  const metaverse_projects = await getProjectsBySG(locale, 'Metaverse');
  const metaverseData = {
    ...metaverse,
    themeClass: 'metaverse'
  };

  return (
    <>
      <ScientificGroupIntro groupData={metaverseData} />
      <div id="projects">
        <Projects projectList={metaverse_projects} themeClass={metaverseData.themeClass}/>
      </div>
    </>
  )
};

export default Page;

