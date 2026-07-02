import React from 'react'
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import retypeRaw from "rehype-raw";
import {notFound} from "next/navigation";
import {getProjectById} from "@actions/projects/getProjectById";
import StatusBadge from "@/components/ui/StatusBadge";
import TechnologyTag from "@/components/ui/TechnologyTag";
import ImageGallery from "@/components/ui/ImageGallery";
import Hyperlink from "@components/ui/Hyperlink";
import {getTranslations} from 'next-intl/server';
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "@components/ui/Button";
import {MdOutlineWork} from "react-icons/md";
const scrollToImages = () => {
    const imagesSection = document.getElementById("images");

    if (imagesSection) {
        imagesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
const Page = async ({params}) => {
    const { id, locale } = await params;
    const project = await getProjectById(id, locale);
    const t = await getTranslations("ProjectIdPage");
    if (!project) return notFound();
    const content = project?.description || "";
  return ( 
   <>
    <section className="flex justify-center pt-36 max-md:pt-24 bg-contain flex-col items-center">
        <section className='container'>
            {/* Background Image */}
            <div className="absolute inset-0 h-1/3 sm:h-1/2">
                <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    priority
                    className="object-cover opacity-30"
                />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Banner Image */}
                <div className={`relative border-${project.sg.toLowerCase()} border-[2px] border-w-full aspect-[16/9] overflow-hidden`}>
                    <Image
                        src={project.thumbnail}
                        alt="project Thumbnail"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="mt-10 text-center">
                    <h2 className="h2 max-md:h4 font-bold text-p4">
                        {project.name}
                    </h2>
                    <hr className={`my-10 max-sm:my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-p5 to-transparent opacity-75`}/>

                    <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                        {project.status && (
                            <StatusBadge status={project.status} />
                        )}
                        {project.status && project.technologies?.length > 0 && (
                            <div className="dot" />
                        )}
                        {project.technologies.map((technology) => (
                            <TechnologyTag
                                key={technology}
                                technology={technology}
                                themeClass={project.sg.toLowerCase()}
                            />
                        ))}
                        {project.images?.length > 0 && (
                            <>
                                <div className="dot" />
                                <Hyperlink
                                    href="#project-images"
                                    arrow={false}
                                    className="scroll-smooth text-md text-p4"
                                >
                                    {t('view_images')}
                                </Hyperlink>
                            </>
                        )}
                    </div>
                    {/* Project Description */}
                    <div className="flex flex-col mt-6 gap-4 py-20 text-left">
                        {content ? (
                            <article className="prose prose-invert max-w-none body-1 max-md:body-2">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[retypeRaw]}
                                    components={{
                                        h2: ({ children }) => <h2 className="h4 mt-8 mb-4">{children}</h2>,
                                        h3: ({ children }) => <h3 className="h5 mt-6 mb-3">{children}</h3>,
                                    }}
                                >

                                    {content}
                                </ReactMarkdown>
                            </article>
                        ) : (
                            <p className="no-result">No details provided</p>
                        )}
                    </div>
                    {/* Useful Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="flex flex-col gap-6 pb-20">
                            <h3 className="h3 max-md:h5 text-p4">{t('links')}</h3>
                            <ul className="list-disc pl-6 space-y-6">
                                {project.links.map((link, idx) => (
                                    <li key={idx} className='flex items-center gap-4'>
                                        <FaExternalLinkAlt className="text-p4" size={24} />
                                        <Hyperlink
                                            href="#"
                                            arrow={false}
                                            className="body-2 text-p4"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToImages();
                                            }}
                                        >
                                            {link}
                                        </Hyperlink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div id="project-images" className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-black-100">
                        <ImageGallery
                            imageList={project.images}
                            themeClass={project.sg.toLowerCase()}
                        />
                    </div>
                </div>
            </div>
        </section>
    </section>
   </>
  );
};

export default Page;