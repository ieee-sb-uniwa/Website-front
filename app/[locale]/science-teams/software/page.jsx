'use client';
import React from 'react';
import {software} from '@constants/constants';
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
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;