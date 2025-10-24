import React, { useState, useRef} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { cn } from "@/lib/utils";
import { LuArrowBigLeftDash,LuArrowBigRightDash } from "react-icons/lu";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  themeClass,
}) => {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          `cursor-pointer overflow-hidden relative h-96 border-transparent border-[2px] hover:border-gradient-${themeClass} shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4`
        )}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black-100/90 via-black-100/70 to-transparent"></div>

        {/* Links */}
        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/assets/icons/link.svg"
                alt="resources"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}

        <div className="mt-auto z-1">
          <div className="project-tags">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`tag bg-${themeClass} text-[14px]`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <h3 className="text-p4 font-bold text-[22px] my-3">{name}</h3>
          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>
      </div>
    </div>
  );
};
const Projects = ({ projectList, themeClass }) => {
  const splideRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const splideOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1.75rem',
    pagination: false,
    rewind: true,
    arrows: false,
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 2 },
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
            <div className="flex-1 h-[3px] bg-gray-700 overflow-hidden">
              <div
                className={`h-full bg-${themeClass} transition-all duration-300`}
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            {/* Arrows */}
            <button
              onClick={() => splideRef.current?.splide?.go('<')}
              className={`p-2 bg-black-100 transition-colors border-[1px] border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
              aria-label="Previous"
            >
              <LuArrowBigLeftDash size={30} className={`text-${themeClass}/75`} />
            </button>
            <button
              onClick={() => splideRef.current?.splide?.go('>')}
              className={`p-2 bg-black-100 transition-colors border-[1px] border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
              aria-label="Next"
            >
              <LuArrowBigRightDash size={30} className={`text-${themeClass}/75`} />
            </button>
          </div>
        </div>

        <Splide ref={splideRef} options={splideOptions} aria-label="Focus Cards Carousel">
          {projectList && projectList.length > 0 ? (
            projectList.map((project, index) => (
              <SplideSlide key={`project-${index}`}>
                <ProjectCard index={index} {...project} themeClass={themeClass} />
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