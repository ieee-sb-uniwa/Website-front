'use client';
import React from 'react';
import { ai } from '@constants/constants';
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
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;
