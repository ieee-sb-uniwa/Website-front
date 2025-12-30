'use client'
import React from 'react';
import { naval,naval_projects } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
const Page = () => {
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

