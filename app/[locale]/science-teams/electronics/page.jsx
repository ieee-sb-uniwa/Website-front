'use client'
import React from 'react';
import { electronics } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';
import {energy_projects} from "@constants/constants"
const Page = () => {
  const electronicsData = {
    ...electronics,
    themeClass: 'electronics'
  };

  return (
    <>
      <ScientificGroupIntro groupData={electronicsData} />
      <div id="projects">
        <Projects projectList={energy_projects} themeClass={electronicsData.themeClass}  />
      </div>
    </>
  )
};

export default Page;

