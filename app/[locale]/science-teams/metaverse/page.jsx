'use client'
import React from 'react';
import { metaverse } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
const Page = () => {
  const metaverseData = {
    ...metaverse,
    themeClass: 'metaverse'
  };

  return (
    <>
      <ScientificGroupIntro groupData={metaverseData} />
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;

