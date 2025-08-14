'use client'
import React from 'react';
import { electronics } from '@constants/constants';
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
        <Projects />
      </div>
    </>
  )
};

export default Page;

