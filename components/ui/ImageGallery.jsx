"use client";
import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";
import {useTranslations} from 'next-intl';

const ImageGallery = ({ imageList, themeClass }) => {
    const splideRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const t = useTranslations("ProjectIdPage");
    const [selectedImage, setSelectedImage] = useState(null);
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
            className="bg-black-100 py-20"
        >
            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="mb-12">
                    <h3 className="h3 max-md:h5 uppercase text-p4 lg:hidden">{t('images')}</h3>
                    <div className="flex justify-center items-center gap-12 z-2 max-lg:hidden">
                        <h3 className="h3 max-md:h5 uppercase text-p4 ">{t('images')}</h3>
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
                            className={`p-2 transition-colors border-[1px]  border-${themeClass}/35 hover:border-gradient-${themeClass} duration-300`}
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
                                <div className={`cursor-pointer overflow-hidden relative border-transparent border-[2px] hover:border-gradient-${themeClass} shadow-xl h-96 max-w-sm mx-auto flex flex-col justify-between p-4`}>
                                    <Image
                                        src={img}
                                        alt={`image-${index}`}
                                        fill
                                        className="object-cover absolute rounded-[22px] inset-0 bg-cover bg-center transition-transform duration-500 cursor-pointer hover:scale-110"
                                        onClick={() => setSelectedImage(img)}
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
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-5xl w-full p-4">
                            <Image
                                src={selectedImage}
                                alt="Selected"
                                width={1200}
                                height={800}
                                className="rounded-[22px] object-contain"
                            />

                            {/* Close button */}
                            <button
                                className={`absolute top-4 rounded-[22px] -right-14 z-50 size-10 border-2 border-${themeClass} bg-black/60 flex items-center justify-center`}
                                onClick={() => setSelectedImage(null)}
                            >
                                <Image
                                    src="/assets/icons/close.svg"
                                    alt="close"
                                    width={18}
                                    height={18}
                                    className="object-contain"
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageGallery;