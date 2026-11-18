import React from 'react';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { getSGByName, getProjectsBySG } from '@actions/getAllScientificGroups'; 

const Page = async ({params}) => {
  const {locale} = await params;
  const biomed = await getSGByName(locale, 'BioMed');
  const biomed_projects = await getProjectsBySG(locale, 'BioMed');
  const biomedData = {
    ...biomed,
    themeClass: 'biomed'
  };

  return (
    <>
      <ScientificGroupIntro groupData={biomedData} />
      <div id="projects">
        <Projects projectList={biomed_projects} themeClass={biomedData.themeClass}/>
      </div>
    </>
  );
};

export default Page;