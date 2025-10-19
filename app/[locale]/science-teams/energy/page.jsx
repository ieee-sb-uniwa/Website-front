'use client';
import React from 'react';
import {energy} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import { energy_projects } from '@constants/constants';

const Page = () => {
  const energyData = {
    ...energy,
    themeClass: 'energy'
  };
  return (
    <>
      <ScientificGroupIntro groupData={energyData} />
      <div id="projects">
        <Projects projectList={energy_projects} />
      </div>
    </>
  )
};

export default Page;
