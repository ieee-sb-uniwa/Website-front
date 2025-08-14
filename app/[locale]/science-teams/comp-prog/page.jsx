'use client';
import React from 'react';
import { compprog } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
const Page = () => {
  const compprogData = {
    ...compprog,
    themeClass: 'compprog'
  };

  return (
    <>
      <ScientificGroupIntro groupData={compprogData} />
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;
