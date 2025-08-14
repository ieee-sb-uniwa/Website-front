'use client';
import React from 'react';
import { biomed } from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';

const Page = () => {
  const biomedData = {
    ...biomed,
    themeClass: 'biomed'
  };

  return (
    <>
      <ScientificGroupIntro groupData={biomedData} />

    </>
  );
};

export default Page;