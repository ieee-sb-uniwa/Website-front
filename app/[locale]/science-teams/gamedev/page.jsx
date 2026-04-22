import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const locale = params.locale; 
  const gamedev = await getSGByName(locale, 'GameDev');
  const gamedev_projects = await getProjectsBySG(locale, 'GameDev');
  const gamedevData = {
    ...gamedev,
    themeClass: 'gamedev'
  };

  return (
    <>
      <ScientificGroupIntro groupData={gamedevData} />
      <div id="projects" >
        <Projects projectList={gamedev_projects} themeClass={gamedevData.themeClass}/>
      </div>
    </>
  )
};

export default Page;