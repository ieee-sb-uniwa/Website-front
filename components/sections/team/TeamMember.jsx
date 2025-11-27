"use client"
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { delay, motion } from 'framer-motion'; 
import { socials } from "@constants/constants.js"; 

const TeamMember = ({item, containerClassName}) => {
  const getSocialIcon = (type) => socials.find((social) => social.title.toLowerCase() === type)?.icon;
  return (
    <div className={clsx(
        "relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md",
        containerClassName
    )}>
        <div className='flex items-center max-xl:-mr-8'>
            <div className='mr-4 relative'>
                {/* Circle Animation - positioned relative to this container */}
                <motion.svg 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] xl:w-[320px] xl:h-[320px] max-md:hidden"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253" 
                        r="133" 
                        stroke="#3C52D9"
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate:[120, 360]
                        }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
                
                {/* Image Container */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 0.4, duration: 0.4, ease: "easeInOut"}
                    }}
                    className="size-full relative z-10"
                >
                    <div className="w-[140px] md:w-[120px] xl:w-[160px] h-[140px] md:h-[120px] xl:h-[160px] rounded-full p-1.5">
                        <Image
                            src={`${item?.photo}`}
                            width="800"
                            height="800"
                            alt={item?.name}
                            className='size-full object-cover rounded-full'
                            unoptimized
                        />
                    </div>
                </motion.div>
            </div>
            {/* Member Details */}
            <div>
                <h4 className="body-2 mx-4 mb-1 text-p1">{item?.name}</h4>
                <p className="my-3 mx-4 small-1 uppercase text-p3">{item?.role}</p>
                <ul className="flex flex-1 mt-5 max-md:mt-10 my-3 mx-4 gap-3">
                {item.socials?.map((social) => (
                    <li key={social.id}>
                    <a
                        href={social?.url} // Dynamically set href
                        className="social-icon"
                        target="_blank" // Open in new tab for non-email links
                        rel="noopener noreferrer"
                    >
                        <Image
                        src={getSocialIcon(social?.type)} // Get icon dynamically
                        alt={social?.type}
                        width={30} // Set appropriate width
                        height={30} // Set appropriate height
                        className="size-2/3 z-2 object-contain" // Maintain your existing class
                        />
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TeamMember