import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const locale = params.locale; 
  const ai = await getSGByName(locale, 'AI');
  const ai_projects = await getProjectsBySG(locale, 'AI');
  const aiData = {
    ...ai,
    themeClass: 'ai'
  };
  return (
    <>
      <ScientificGroupIntro groupData={aiData} />
      <div id="projects">
        <Projects projectList={ai_projects} themeClass={aiData.themeClass}/>
      </div>
    </>
  )
};

export default Page;
