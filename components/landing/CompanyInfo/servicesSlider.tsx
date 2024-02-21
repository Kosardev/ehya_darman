'use client'
import React, { FC, useMemo, useRef } from "react";
import { Autoplay, Lazy, Navigation } from "swiper";
import { SwiperProps } from "swiper/react";
import { Swiper } from "@/components/common/Swiper";
import Icon from "@/components/common/Icon";
import {servicesSection} from "@/lib/types";
import { Maybe } from "@/lib/types/mainService";
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";
import Visible from "@/components/common/visible";
import {isServer} from "@/lib/utils/utils-functions";
import ServicesSSR from "@/components/landing/CompanyInfo/servicesSSR";

type SliderT = {
    sections: Maybe<Maybe<servicesSection>[]>;
};
const Slider: FC<SliderT> = ({ sections}) => {
    const swiperRef = useRef() as any;
    const swiperConfig: SwiperProps = useMemo(() => {
        return {
            modules: [Autoplay, Lazy, Navigation],
            lazy: true,
            slidesPerView: "auto",
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        };
    }, []);

    return (
        <div className="group relative">
            <Swiper
                SSRContent={isServer ? <ServicesSSR  sections={sections}  /> : null}
                {...swiperConfig}
                className="swiper-pagination-new"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}>
                {sections?.map((item, index) => (
                    <div className="!w-full " key={"services"+index}>
                        <SubTitle title={item?.title??""} icon={'plus'}/>
                        <Title title={item?.shortDescription??""} className='text-2xl' />
                        <p className="pt-1 font-yekanBakh leading-8 pb-12 text-justify">{item?.description}</p>
                    </div>
                ))}
            </Swiper>
            <Visible visible={Number(sections?.length)>1}>
                <div className=" absolute -bottom-8 right-[1%] z-10  items-end gap-2 duration-75 flex ">
                    <Icon
                        name="ArrowRight"
                        color="fill-red-ehya"
                        size=" w-[54px] h-[54px]"
                        className='p-2.5 border border-red-ehya rounded'
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <Icon
                        name="ArrowLeft"
                        color="fill-red-ehya"
                        size=" w-[54px] h-[54px]"
                        className='p-2.5 border border-red-ehya rounded'
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </Visible>
        </div>
    );
};
export default Slider;