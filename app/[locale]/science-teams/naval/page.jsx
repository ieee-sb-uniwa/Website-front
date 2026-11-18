import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const {locale} = await params;
  const naval = await getSGByName(locale, 'Naval');
  const naval_projects = await getProjectsBySG(locale, 'Naval');
  const navalData = {
    ...naval,
    themeClass: 'naval'
  };

  return (
    <>
      <ScientificGroupIntro groupData={navalData} />
      <div id="projects" >
        <Projects projectList={naval_projects} themeClass={navalData.themeClass}/>
      </div>
    </>
  )
};

export default Page;

