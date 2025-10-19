'use client'
import React from 'react';
import { naval } from '@constants/constants';
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
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;

