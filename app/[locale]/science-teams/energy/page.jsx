'use client';
import React from 'react';
import {energy} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const energyData = {
    ...energy,
    themeClass: 'energy'
  };
  return (
    <>
      <ScientificGroupIntro groupData={energyData} />
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;
