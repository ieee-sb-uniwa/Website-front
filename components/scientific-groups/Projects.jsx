"use client"
import React, { useState, useRef} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from '@i18n/navigation';
import { cn } from "@/lib/utils";
import { LuArrowBigLeftDash,LuArrowBigRightDash } from "react-icons/lu";
import StatusBadge from "@/components/ui/StatusBadge";
import TechnologyTag from "@/components/ui/TechnologyTag";
import Image from "next/image";

const ProjectCard = ({
  _id,
  name,
  description,
  technologies,
  thumbnail,
  status,
  links,
  themeClass,
}) => {
  return (
    <div className="max-w-xs w-full group/card">
       <Link
         key={_id}
         href={`/projects/${_id}`}
       >
      <div
        className={cn(
          `cursor-pointer overflow-hidden relative h-96 border-transparent border-[2px] hover:border-gradient-${themeClass} shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4`
        )}
      >
      {/* Status Badge */}
        {status && (
            <div className="absolute top-3 left-3 z-10">
              <StatusBadge status={status} />
            </div>
        )}
        {/* Background image */}
        <div
          className="absolute rounded-[22px] inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black-100/90 via-black-100/70 to-transparent"></div>

        {/* Links */}
        {links && links[0] && (
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(links[0], "_blank")}
              className="bg-black border-[1px] border-white/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/assets/icons/link.svg"
                alt="resources"
                className="object-contain"
                width={18}
                height={18}
              />
            </div>
          </div>
        )}

        <div className="mt-auto z-1">
          <div className="project-tags">
            {technologies.map((technology) => (
                <TechnologyTag
                    key={technology}
                    technology={technology}
                    themeClass={themeClass}
                />
            ))}
          </div>
          <h3 className="text-p4 font-bold text-[22px] my-3">{name}</h3>
        </div>
      </div>
     </Link>
    </div>
  );
};
const Projects = ({ projectList, themeClass }) => {
  const splideRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const splideOptions = {
    type: 'splide',
    perPage: 3,
    perMove: 1,
    gap: '1.75rem',
    pagination: false,
    rewind: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
  };

  return (
    <section className="bg-black-100 py-20" id="projects">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12">
          <h6 className="text-4xl font-bold text-p4 font-poppins lg:hidden">PROJECTS</h6>
          <div className="flex justify-center items-center gap-12 z-2 max-lg:hidden">
            <h6 className="text-4xl font-bold text-p4 font-poppins">PROJECTS</h6>

            {/* Progress Bar */}
            <div className="flex-1 h-[2px] bg-gray-800">
              <div
                className={`h-full transition-all duration-300 bg-gradient-${themeClass}`}
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            {/* Arrows */}
            <button
              onClick={() => splideRef.current?.splide?.go('<')}
              className={`p-2 transition-colors border-[1px] border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
              aria-label="Previous"
            >
              <LuArrowBigLeftDash size={30} className={`text-${themeClass}/75`} />
            </button>
            <button
              onClick={() => splideRef.current?.splide?.go('>')}
              className={`p-2 transition-colors border-[1px] border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
              aria-label="Next"
            >
              <LuArrowBigRightDash size={30} className={`text-${themeClass}/75`} />
            </button>
          </div>
        </div>

        <Splide ref={splideRef} options={splideOptions} aria-label="Focus Cards Carousel"
          onMove={(splide) => {
          const current = splide._id;
          const total = splide.length;
          setProgress((current + 1) / total);
          }}>
          {projectList && projectList.length > 0 ? (
            projectList.map((project, _id) => (
              <SplideSlide key={`project-${_id}`}>
                <ProjectCard index={_id} {...project} themeClass={themeClass} />
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <div className="p-4 bg-red-200 text-red-800">No cards available</div>
            </SplideSlide>
          )}
        </Splide>
      </div>
    </section>
  );
};


export default Projects;