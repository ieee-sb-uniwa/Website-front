"use client"
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { delay, motion } from 'framer-motion'; 
import { socials } from "../../constants/constants.js"; 

const TeamMember = ({item, containerClassName}) => {
  const getSocialIcon = (type) => socials.find((social) => social.title.toLowerCase() === type)?.icon;
  return (
    <div className={clsx(
        "relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md",
        containerClassName
    )}>
        <div className='flex items-center max-xl:-mr-8'>
            <div className='mr-4 size-50 shrink-0 rounded-half p-1.5'>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity:1,
                        transition: {delay: 0.4, duration: 0.4},
                    }}
                    className="w-[140px] md:w-[120px] xl:w-[160px] h-[140px] md:h-[120px] xl:h-[160px]"
                >
                    <Image
                        src={item.photo}
                        width="800"
                        height="800"
                        alt={item.name}
                        className='size-full object-cover rounded-full'
                    />
                    {/*circle*/}
                    <motion.svg 
                        className="absolute -top-1.5 -left-0 xl:-top-6 xl:-left-5 w-[233px] xl:w-[310px] h-[233px] xl:h-[310px] max-md:hidden"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253" 
                            r="150" 
                            stroke="#2EF2FF"
                            strokeWidth="3" 
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
                </motion.div>
            </div>
            {/* Member Details */}
            <div>
                <h4 className="body-2 mx-4 mb-1 text-p1">{item.name}</h4>
                <p className="my-3 mx-4 small-1 uppercase text-p3">{item.role}</p>
                <ul className="flex flex-1 max-md:mt-10 gap-3">
                {item.socials?.map((social) => (
                    <li key={social.id}>
                    <a
                        href={social.type === "email" ? `mailto:${social.url}` : social.url} // Dynamically set href
                        className="social-icon"
                        target={social.type !== "email" ? "_blank" : undefined} // Open in new tab for non-email links
                        rel="noopener noreferrer"
                    >
                        <Image
                        src={getSocialIcon(social.type)} // Get icon dynamically
                        alt={social.type}
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