'use client'
import React from 'react';
import { electronics, electronics_projects } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const electronicsData = {
    ...electronics,
    themeClass: 'electronics'
  };

  return (
    <>
      <ScientificGroupIntro groupData={electronicsData} />
      <div id="projects">
        <Projects projectList={electronics_projects} themeClass={electronicsData.themeClass}/>
      </div>
    </>
  )
};

export default Page;

