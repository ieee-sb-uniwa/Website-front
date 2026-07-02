"use client";
import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";

const ImageGallery = ({ imageList, themeClass }) => {
    const splideRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const splideOptions = {
        type: "splide",
        perPage: 3,
        perMove: 1,
        gap: "1.75rem",
        pagination: false,
        arrows: false,
        breakpoints: {
            1024: { perPage: 3 },
            640: { perPage: 1 },
        },
    };

    return (
        <section
            className="py-20"
            id="images"
        >
            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="mb-12">
                    <h6 className="text-4xl font-bold text-p4  lg:hidden">IMAGES</h6>
                    <div className="flex justify-center items-center gap-12 z-2 max-lg:hidden">
                        <h6 className="text-4xl font-bold text-p4 ">IMAGES</h6>

                        {/* Progress */}
                        <div className="flex-1 h-[2px] bg-gray-800">
                            <div
                                className={`h-full transition-all duration-300 bg-gradient-${themeClass}`}
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                        {/* Arrows */}
                        <button
                            onClick={() => splideRef.current?.splide?.go("<")}
                            className={`p-2  transition-colors border-[1px]  border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
                        >
                            <LuArrowBigLeftDash size={30} className={`text-${themeClass}/75`} />
                        </button>

                        <button
                            onClick={() => splideRef.current?.splide?.go(">")}
                            className={`p-2 transition-colors border-[1px] border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
                        >
                            <LuArrowBigRightDash size={30} className={`text-${themeClass}/75`}  />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <Splide
                    ref={splideRef}
                    options={splideOptions}
                    aria-label="Focus Cards Carousel"
                    onMove={(splide) => {
                        const current = splide.index;
                        const total = splide.length;
                        setProgress((current + 1) / total);
                    }}
                >
                    {imageList && imageList?.length > 0 ? (
                        imageList.map((img, index) => (
                            <SplideSlide key={index}>
                                <div className="relative h-80 w-full overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`image-${index}`}
                                        fill
                                        className="object-cover transition-transform duration-500"
                                    />
                                </div>
                            </SplideSlide>
                        ))
                    ) : (
                        <SplideSlide>
                            <div className="p-4 text-red-500">
                                No images available
                            </div>
                        </SplideSlide>
                    )}
                </Splide>
            </div>
        </section>
    );
};

export default ImageGallery;