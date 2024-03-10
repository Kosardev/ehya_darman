"use client"
import BaseContainer from "@/components/common/baseContainer";
import {imageListType} from "@/lib/types";
import { Pagination } from "swiper";
import { SwiperProps } from "swiper/react";
import { Swiper } from "@/components/common/Swiper";
import {useMemo, useRef} from "react";
import {BreakPoints} from "@/lib/constants/breakpoints";

type VideoTabType={
    videos?:  imageListType[]
}

export default function VideoTab({ videos }:VideoTabType) {
    const swiperRef = useRef() as any;
    const swiperConfig: SwiperProps = useMemo(() => {
        return {
            modules: [Pagination],
            slidesPerView: 4,
            spaceBetween: 40,
            preventClicksPropagation: false,
            dir: "rtl",
            breakpoints: {
                [BreakPoints.xxl]: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                [BreakPoints.lg]: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                [BreakPoints.md]: {
                    slidesPerView: 2.35,
                    spaceBetween: 25
                },
                0: {
                    slidesPerView: 1.3,
                    spaceBetween: 16
                },
            },
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return "<span class=" + className + "></span>";
                },
            },
        };
    }, []);
    return (

        <BaseContainer>
            <div className=" relative">
                <Swiper className="pb-7" {...swiperConfig}>
                    {videos?.map((item,key) =>
                        <div key={"video"+key} >
                            <video controls>
                                <source src={item?.image ?? ""} type={"video/mp4"}/>
                            </video>
                            <h3>{item?.title}</h3>
                        </div>)}
                </Swiper>
            </div>
        </BaseContainer>
    )
}
