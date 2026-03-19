import React from 'react';
import Image from 'next/image'; 

const SocialStep = ({ icon, title, url }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className='flex justify-start items-center flex-row hover:opacity-80 transition-opacity cursor-pointer'
  >
    <div
      className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-s2 border-2 border-s4 overflow-hidden'
    >
      <Image 
        src={icon} 
        alt={`${title} logo`} 
        width={38}  
        height={38} 
        className="object-contain" 
      />
    </div>
    <p className="flex-1 ml-[30px] body-1 max-md:body-2 text-p5">
      {title}
    </p>
  </a>
);

export default SocialStep;