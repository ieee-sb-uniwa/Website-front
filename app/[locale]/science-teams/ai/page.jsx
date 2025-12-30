'use client';
import React from 'react';
import { ai, ai_projects } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const aiData = {
    ...ai,
    themeClass: 'ai'
  };

  return (
    <>
      <ScientificGroupIntro groupData={aiData} />
      <div id="projects" >
        <Projects projectList={ai_projects} themeClass={aiData.themeClass}/>
      </div>
    </>
  )
};

export default Page;
