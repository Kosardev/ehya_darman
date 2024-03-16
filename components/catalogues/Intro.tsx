"use client"
import Visible from "@/components/common/visible";
import BaseContainer from "@/components/common/baseContainer";
import { SwiperProps } from "swiper/react";
import { Swiper } from "@/components/common/Swiper";
import {useMemo, useRef} from "react";
import {Pagination} from "swiper";
import {BreakPoints} from "@/lib/constants/breakpoints";
import ReactPlayer from "react-player";
import Image from "@/components/common/Image";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/button";

export default function Intro({ data }:any) {
    const swiperRef = useRef() as any;
    const swiperConfig: SwiperProps = useMemo(() => {
        return {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 10,
            preventClicksPropagation: false,
            dir: "rtl",
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return "<span class=" + className + "></span>";
                },
            },
        };
    }, []);
    return (
        <div className={"flex gap-2"}>
          <div className={"max-w-[50%] grow px-8 2xl:px-28 3xl:px-44 pt-6 2xl:pt-12 3xl:pt-20 "}>
            <h2  className={"font-kalamehFa text-lg 2xl:text-2xl 3xl:text-3xl  pr-3 2xl:pr-8 3xl:pr-10 mb-10 xl:mb-20 "}>{data?.title}</h2>
              <p className={"  pr-2 2xl:pr-5 3xl:pr-8 pl-4 2xl:pl-10 3xl:pl-14 leading-7 text-sm font-iransans"}>{data?.description}</p>
              <div className={"flex gap-2 xl:gap-5  pr-2 2xl:pr-5 3xl:pr-8 pt-4 xl:pt-8 "}>
                  <Button fill={"fill"} size={"lg"} className={"px-8 font-shabnam !rounded-full"} >تماس با ما</Button>
                  <Button fill={"outline"} size={"lg"} className={"px-8 font-shabnam !rounded-full"} > دانلود کاتالوگ </Button>
              </div>
          </div>
          <div className={"grow max-w-[50%] "}>
              <Swiper className="pb-7 catalogueSwiper" {...swiperConfig}>
                  {data?.images?.map((item,key) =>
                      <div key={key} className={"w-full min-h-[200px] xl:min-h-[420px] 3xl:min-h-[550px]"}>
                          <Image
                              layout="fill"
                              style={{ objectFit: "contain" }}
                              className="object-contain w-full "
                              src={item??""}
                              alt={data?.title}
                              />
                      </div>
                  )}
              </Swiper>
          </div>
        </div>
    )
}
