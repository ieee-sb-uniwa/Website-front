import React from 'react';
import Image from 'next/image';
import Button from '@components/ui/Button';
import { MdOutlineWork } from "react-icons/md";

const ScientificGroupIntro = ({ groupData }) => {
  if (!groupData) {
    return null;
  }

  const {
    name,
    name_short,
    logo,
    wallpaper,
    info,
    themeClass 
  } = groupData;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen w-full">
      
      {/* Mobile Header Image - Only visible on mobile and tablet */}
      <div className="lg:hidden relative">
        {wallpaper && (
          <>
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src={wallpaper}
                alt={`${name_short} background wallpaper`}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay for better visual effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
            </div>
            {/* 2px gradient border at bottom */}
            <div className={`h-0.5 w-full bg-gradient-${themeClass}`}></div>
          </>
        )}
      </div>

      {/* Main container with responsive padding and margins */}
      <div className="relative flex flex-col lg:flex-row w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 pt-6 sm:pt-8 md:pt-10 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
        
        {/* Left side: Logo, Name, Description */}
        <div className="w-full lg:w-1/2 lg:mt-6 xl:mt-12 lg:pl-20 xl:pl-28">
          
          {/* Logo and Name Container - Moved up on small devices */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 md:mb-10 space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 relative -mt-20 sm:-mt-15 lg:mt-0">
            
            {/* Logo */}
            <div className="flex-shrink-0 self-center sm:self-auto">
              <Image 
                src={logo}       
                alt={`${name} logo`}
                width={200}
                height={200}
                className="rounded w-28 h-28 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
              />
            </div>
            
            {/* Name and Subtitle */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className={`h1 max-md:h2 max-sm:h3 text-border-title font-poppins mb-1 sm:mb-2 bg-gradient-${themeClass} uppercase gradient-text leading-tight break-words lg:drop-shadow-lg`}>
                {name_short}
              </h1>
              <h2 className={`h3 max-md:h4 max-sm:h5 text-p4/70 text-shadow italic font-poppins lg:drop-shadow-md`}>
                Scientific Group
              </h2>
            </div>
          </div>
          
          {/* Description */}
          <div className="my-6">
              <p className="body-1 max-xl:body-2 max-sm:body-3 text-p4 leading-relaxed">
                {info?.en?.description}
              </p>
          </div>
          <div onClick={scrollToProjects} className="cursor-pointer">
            <Button textClassName="text-p1 base-bold" icon={<MdOutlineWork size={30} color='white'/>}>PROJECTS</Button>
          </div>
        </div>

        {/* Right side: Much Larger Wallpaper Image - Hidden on mobile, prominent on desktop */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center py-4 sm:py-6 md:py-8 -z-1">
          {wallpaper && (
            <div className="relative">
              {/* Significantly larger circular container */}
              <div className={`rounded-full p-[4px] bg-gradient-${themeClass} inline-block`}>
                <div className="bg-s1 rounded-full p-6"> 
                  <Image
                    src={wallpaper}
                    alt={`${name} wallpaper`}
                    width={1000}        
                    height={1000}       
                    className="rounded-full object-cover lg:w-[35rem] lg:h-[35rem] xl:w-[42rem] xl:h-[42rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScientificGroupIntro;