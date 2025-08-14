'use client';
import React from 'react'
import {telecom} from '@constants/constants';
import ScientificGroupIntro from '@components/scientific-groups/ScientificGroupIntro';

const Page = () => {
  const telecomData = {
    ...telecom,
    themeClass: 'telecom'
  };

  return <ScientificGroupIntro groupData={telecomData} />;
}

export default Page;
