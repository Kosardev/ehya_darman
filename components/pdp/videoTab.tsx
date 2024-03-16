"use client"
import BaseContainer from "@/components/common/baseContainer";
import {imageListType} from "@/lib/types";
import { Pagination } from "swiper";
import { SwiperProps } from "swiper/react";
import { Swiper } from "@/components/common/Swiper";
import {useMemo, useRef} from "react";
import {BreakPoints} from "@/lib/constants/breakpoints";
import Icon from "@/components/common/Icon";
import ReactPlayer from 'react-player'
import Image from "@/components/common/Image";

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
                        <div className={"relative player-wrapper h-60 rounded-lg flex justify-center items-center overflow-hidden "} key={"video"+key}>
                                <ReactPlayer
                                    light={<Image src={"/img/videoPoster.jpg"} layout={"fill"} width={"100%"} height={"100%"} alt={item?.title}/>}
                                    controls={true}
                                    className='react-player'
                                    url={item?.image ?? ""}
                                    width='100%'
                                    height='100%'
                                    playIcon={<Icon name={"play"} size={"w-14 h-14 p-3"} className={'z-10 bg-red-ehya rounded-full'} color={"fill-white"}/>}
                                />
                            {/*<video controls className={"videoPlayer "}>*/}
                            {/*    <source src={item?.image ?? ""} type={"video/mp4"}/>*/}
                            {/*</video>*/}
                            {/*<span className={"playIcon"}>*/}
                            {/*     <Icon name={"play"} size={"w-9 h-9"} color={"fill-white"}/>*/}
                            {/*</span>*/}
                            <h3>{item?.title}</h3>
                        </div>)}
                </Swiper>
            </div>
        </BaseContainer>
    )
}
