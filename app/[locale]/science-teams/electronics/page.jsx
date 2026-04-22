import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const locale = params.locale; 
  const electronics = await getSGByName(locale, 'Electronics');
  const electronics_projects = await getProjectsBySG(locale, 'Electronics');
  const electronicsData = {
    ...electronics,
    themeClass: 'electronics'
  };

  return (
    <>
      <ScientificGroupIntro groupData={electronicsData} />
      <div id="projects">
        <Projects projectList={electronics_projects} themeClass={electronicsData.themeClass}/>
      </div>
    </>
  )
};

export default Page;

