'use client';
import React from 'react';
import {software, energy_projects} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const softwareData = {
    ...software,
    themeClass: 'software'
  };
  return (
    <>
      <ScientificGroupIntro groupData={softwareData} />
      <div id="projects" >
        <Projects projectList={energy_projects} themeClass={softwareData.themeClass} />
      </div>
    </>
  )
};

export default Page;