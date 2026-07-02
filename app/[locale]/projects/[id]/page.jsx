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

const Page = async ({params}) => {
    const { id, locale } = await params;
    const project = await getProjectById(id, locale);
    if (!project) return notFound();
    const content = project?.description || "";
  return ( 
   <>
    <section className="flex justify-center pt-36 max-md:pt-24 bg-contain flex-col items-center">
        <section className='container'>
            {/* Background Image */}
            <div className="absolute inset-0 h-1/2">
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
                    <h1 className="h1 md:h3 font-bold text-p4">
                        {project.name}
                    </h1>
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
                    </div>
                    {/* Project Description */}
                    <div className="flex flex-col mt-6 gap-4 text-left">
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
                        <ImageGallery
                            imageList={project.images}
                            themeClass={project.sg.toLowerCase()}
                        />
                </div>
            </div>
        </section>
    </section>
   </>
  );
};

export default Page;