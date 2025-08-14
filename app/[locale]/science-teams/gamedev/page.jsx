'use client';
import React from 'react';
import {gamedev} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';
import Projects from '@components/scientific-groups/Projects';

const Page = () => {
  const gamedevData = {
    ...gamedev,
    themeClass: 'gamedev'
  };

  return (
    <>
      <ScientificGroupIntro groupData={gamedevData} />
      <div id="projects">
        <Projects />
      </div>
    </>
  )
};

export default Page;