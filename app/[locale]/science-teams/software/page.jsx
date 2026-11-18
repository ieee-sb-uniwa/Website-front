import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const {locale} = await params;
  const software = await getSGByName(locale, 'Software');
  const software_projects = await getProjectsBySG(locale, 'Software');
  const softwareData = {
    ...software,
    themeClass: 'software'
  };
  return (
    <>
      <ScientificGroupIntro groupData={softwareData} />
      <div id="projects" >
        <Projects projectList={software_projects} themeClass={softwareData.themeClass} />
      </div>
    </>
  )
};

export default Page;