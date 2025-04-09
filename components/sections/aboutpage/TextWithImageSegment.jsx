"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MovingBorder from '@components/ui/MovingBorder';
import {TypingTitle} from './TypingTitle';

const TextWithImageSegment = ({ 
  imagePosition = 'right', 
  imageSrc = "/assets/photos/IEEE_LOGO_OFFICE.jpg",
  imageAlt = "Photo of the IEEE Master Brand logo, taken from our office (ΖΒ006)", 
  text = "The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization, focused on advancing technology for the benefit of humanity.It was founded in 1963 through the merger of the American Institute of Electrical Engineers and the Institute of Radio Engineers.",
  title = "What is IEEE?",
  imageWidth = 6016,
  imageHeight = 4000
}) => {
  
  const isImageRight = imagePosition === 'right';
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='container my-8 md:my-16'>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        {/* Text Content */}
        <article className={`w-full md:w-1/2 order-2 ${isImageRight ? 'md:order-1' : 'md:order-2'}`}>
          <div className='max-w-lg mx-auto md:mx-0'>
            <p className='caption green_gradient mt-5 mb-5 mx-md:mb-2.5 '>The world’s largest technological organization</p>
            {title && <TypingTitle title={title} textStyles="text-p4 h4 mb-4" />}
            <div className='body-1 text-pretty'>
              {text}
            </div>
          </div>
        </article>
        
        {/* Image with hover effect */}
        <div 
          className={`w-full md:w-1/2 order-1 ${isImageRight ? 'md:order-2' : 'md:order-1'} relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <>
            <MovingBorder rounded="rounded-md" bgColor="bg-s1" borderSize="p-[3px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="rounded-lg w-full transition duration-300 ease-in-out"
              />
            </MovingBorder>
            <p className="mt-2 text-center text-p4 italic body-2 text-muted-foreground transition-opacity duration-300">
              {imageAlt}
            </p>
          </>
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg w-full transition duration-300 ease-in-out"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextWithImageSegment