'use client'
import {useMemo, useRef, useState} from "react";
import { Navigation } from "swiper";
import { SwiperProps } from "swiper/react";
import { Swiper } from "@/components/common/Swiper";
import { BreakPoints } from "@/lib/constants/breakpoints";
import {bookmarkedProduct, Maybe} from "@/lib/types";
import Product from "@/components/landing/Products/product";
import SwiperLeftArrowNew from "@/components/common/Swiper/SwiperLeftArrowNew";
import SwiperRightArrowNew from "@/components/common/Swiper/SwiperRightArrowNew";



type ProductSliderT = {
    data?:  (bookmarkedProduct[] | undefined)[];
    isMobile?: boolean;
};

export default function ProductSlider({ data, isMobile }:ProductSliderT) {
    const swiperRef = useRef() as any;
    const swiperConfig: SwiperProps = useMemo(() => {
        return {
            modules: [Navigation],
            slidesPerView: 1.5,
            spaceBetween: 40,
            preventClicksPropagation: false,
            dir: "rtl",
            breakpoints: {
                [BreakPoints.lg]: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16
                },
            },
            navigation: {
                nextEl: ".next-button-swiper-new",
                prevEl: ".prev-button-swiper-new",
            },
        };
    }, []);

    const handleNextClick = (e:any) => {
        e.preventDefault()
        // const swiperInstance = swiperRef.current.swiper;
        // console.log("currentIndex",!!swiperInstance)
        // if (swiperInstance) {
        //     const currentIndex = swiperInstance.realIndex;
        //     const nextIndex = (currentIndex + 2) % data?.length;
        //     console.log("currentIndex",currentIndex,data?.length,nextIndex)
        //     swiperInstance.slideTo(nextIndex);
        // }
    };
    const handlePrevClick = (e:any) => {
        e.preventDefault()
        // const currentIndex = swiperRef.current.swiper.realIndex;
        // const nextIndex = currentIndex - 2 < data?.length ? currentIndex - 2 : 0;
        // swiperRef.current.swiper.slideTo(nextIndex, 0, false);
    };

    return ( <div className=" relative">
        <Swiper {...swiperConfig}
            className={"!pl-8 2xl:!pl-20"}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigationElements={
                    <div className=" hidden lg:flex absolute left-1/4 top-1/2 -translate-y-1/2 w-[88px] h-[88px] z-10">
                        <SwiperLeftArrowNew />
                        <SwiperRightArrowNew/>
                    </div>
                }
        >
            {data?.map((item, index) => {
                return (
                    <div key={index ?? ""} className="flex flex-col gap-4 2xl:gap-10">
                        {item?.map((product, index2) => {
                            return(
                                <Product key={index2} product={product} className={{
                                    container: index2 % 2 ? " flex-row-reverse " : "",
                                    desc: index2 % 2 ? " rounded-r-lg " : " rounded-l-lg "
                                }}/>)})}
                    </div>
                )
            })}
        </Swiper>
    </div>);
};