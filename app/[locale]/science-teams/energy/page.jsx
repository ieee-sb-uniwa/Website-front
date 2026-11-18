import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const {locale} = await params;
  const energy = await getSGByName(locale, 'Energy');
  const energy_projects = await getProjectsBySG(locale, 'Energy');
  const energyData = {
    ...energy,
    themeClass: 'energy'
  };
  return (
    <>
      <ScientificGroupIntro groupData={energyData} />
      <div id="projects">
        <Projects projectList={energy_projects} themeClass={energyData.themeClass}  />
      </div>
    </>
  )
};

export default Page;
