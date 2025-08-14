'use client';
import React from 'react';
import {web} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const webData = {
    ...web,
    themeClass: 'web'
  };
  return (
    <>
      <ScientificGroupIntro groupData={webData} />
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;