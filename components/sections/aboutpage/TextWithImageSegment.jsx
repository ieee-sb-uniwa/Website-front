"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MovingBorder from '@components/ui/MovingBorder';
import { TypingTitle } from './TypingTitle';
import Button from '@components/ui/Button';
import Hyperlink from '@components/ui/Hyperlink';

const TextWithImageSegment = ({ 
  imagePosition = 'right', 
  imageSrc = null,
  imageAlt = "Image description", 
  caption = "default caption", 
  text = "Default text content goes here.",
  title = "Default Title",
  bulletedList = [],
  links = [],  // Array of link objects with href, text, and optionally target properties
  imageWidth = 800,
  imageHeight = 600,
  buttonIcon = ""
}) => {
  
  const isImageRight = imagePosition === 'right';
  const [isClicked, setIsClicked] = useState(false);
  
  //Don't render the image section at all if imageSrc is null or empty
  const hasImage = imageSrc && imageSrc.trim() !== '';
  // Check if bulletedList exists and is not empty
  const hasBulletedList = bulletedList && bulletedList.length > 0;
  // Check if links exist and are not empty
  const hasLinks = links && links.length > 0;
  
  return (
    <div className='container mb-10 md:mb-22 px-4 md:px-0'>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        {/* Text Content */}
        <article className={`w-full ${hasImage ? 'md:w-1/2' : ''} ${isImageRight ? 'md:order-1 order-1' : 'md:order-2 order-1'}`}>
          <div className='w-full max-w-lg mx-auto md:mx-0'>
            <p className='caption green_gradient mt-5 mb-5 max-md:mb-2.5'>
              {caption}
            </p>
            
            {/* Improved title rendering for mobile */}
            {title && (
              <div className="w-full overflow-visible">
                <TypingTitle 
                  title={title} 
                  textStyles="text-white h4 mb-4 max-md:h5 max-md:break-words max-md:hyphens-auto"
                />
              </div>
            )}
            
            <div className='body-3 text-pretty text-p4'>
              {text}
            </div>
            
            {/* Bulleted List - Only render if it exists and is not empty */}
            {hasBulletedList && (
              <ul className="mx-auto space-y-4 mt-6">
                {bulletedList.map((item, index) => (
                  <li
                    key={index}
                    className="relative flex items-center gap-5"
                  >
                    <Image
                      src="/assets/icons/check.svg"
                      alt="check-circle"
                      width={24}
                      height={24}
                      className="size-9 object-contain"
                    />
                    <p className="flex-1 text-p4 body-3">{item}</p>
                  </li>
                ))}
              </ul>
            )}   
            
            {/* Links/CTA Section - Only render if links exist and are not empty */}
            {hasLinks && (
              <div className="flex flex-wrap items-center gap-12 mt-10">
                {links.slice(0, 2).map((link, index) => {
                  if (index === 0) {
                    return (
                      <Button 
                        key={index} 
                        icon={buttonIcon}
                        iconHeight={38}
                        iconWidth={38}
                        textClassName='text-p1 base-bold'
                        className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                        href={link.href} 
                      >
                        {link.text}
                      </Button>
                    );
                  } else {
                    return (
                      <Hyperlink 
                        key={index} 
                        href={link.href} 
                        className='uppercase text-p4'
                      >
                        {link.text}
                      </Hyperlink>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </article>
        
        {/* Image with hover effect - only render if we have an image */}
        {hasImage && (
          <div 
            className={`w-full md:w-1/2 ${isImageRight ? 'md:order-2 order-2' : 'md:order-1 order-2'} relative cursor-pointer`}
            onClick={() => setIsClicked(prev => !prev)}
          >
            <div className="relative">
              {/* Use position absolute to prevent layout shift */}
              <div className="w-full relative" style={{ height: "auto" }}>
                {/* Always render the non-hovered image */}
                <div className={`w-full transition-opacity duration-300 ${isClicked ? 'opacity-0' : 'opacity-100'} absolute top-0 left-0`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="rounded-lg w-full"
                  />
                </div>
                
                {/* Conditionally render the hovered image with border */}
                <div className={`w-full transition-opacity duration-300 ${isClicked ? 'opacity-100' : 'opacity-0'}`}>
                  <MovingBorder rounded="rounded-lg" bgColor="bg-s1" borderSize="p-[4.5px]">
                    <div className="w-full">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="rounded-lg w-full"
                      />
                    </div>
                  </MovingBorder>
                </div>
              </div>
              
              {/* Caption that only appears when hovered */}
              {isClicked && (
                <p className="mt-4 rounded-full text-center italic body-2 text-muted-foreground transition-opacity duration-300">
                  {imageAlt}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TextWithImageSegment