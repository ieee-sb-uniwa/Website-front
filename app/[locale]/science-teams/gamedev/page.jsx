'use client';
import React from 'react';
import {gamedev, gamedev_projects} from '@constants/constants';
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
      <div id="projects" >
        <Projects projectList={gamedev_projects} themeClass={gamedevData.themeClass}/>
      </div>
    </>
  )
};

export default Page;