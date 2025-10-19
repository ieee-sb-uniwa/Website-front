import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { cn } from "@/lib/utils";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="max-w-xs w-full  group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative h-96 rounded-md border-2 border-s1 hover:border-energy shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
        )}
        style={{ backgroundImage: `url("/assets/images/Reverse Engineering Thumbnail.jpg")` }}
      >
        <div className="absolute inset-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src="/assets/logos/socials/github.svg"
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] text-s1 ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const Projects = ({ projectList }) => {
  return (
    <section className='bg-black-100'>
       <div className='container relative z-2 py-28'>
          <div>
            <h3 className="h3 max-md:h4 max-w-640 max-lg:max-w-lg text-p4 mb-7 font-poppins ">Projects</h3>
          </div>
          <div className='mt-20 flex flex-wrap gap-7'>
            {projectList.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
      </div>
    </section>
  )
}

export default Projects;