'use client'

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import {Paths} from "@/environment";
import Icon from "@/components/common/Icon";
import Link from "@/components/common/Link";
import { Maybe } from "@/lib/types/mainService";
import ScrollableContent from "@/components/common/ScrollableContent";
import Visible from "@/components/common/visible";
import {subCategories} from "@/lib/types";


type SubCategoriesT = {
    data?: subCategories[]
};
const SubCategories: FC<SubCategoriesT> = ({ data}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [ showArrows, setShowArrows ] = useState<boolean>(true)
    const handleNextSlide = (offset: number) => {
        if (sliderRef.current?.parentElement) {
            sliderRef.current.parentElement.classList.add("scroll-smooth")
            sliderRef.current.parentElement.scrollLeft += offset;
            sliderRef.current.parentElement.classList.remove("scroll-smooth")
        }
    };

    useEffect(() => {
        if((data?.length ?? 0) > 0 && !!sliderRef.current && sliderRef.current) {
            const containerWidth: number = sliderRef.current.offsetWidth
            let width: number = 0
            for (let i = 0; i < sliderRef.current.children?.length; i++) {
                const tableChild = sliderRef.current.children[i];
                width += tableChild.clientWidth
            }
            if(containerWidth < width) {
                setShowArrows(true)
            } else {
                setShowArrows(false)
            }
        } else{
            setShowArrows(false)
        }

    }, [data])
    return (
        <div className="shadow-100 rounded-[10px] font-kalamehFa m-4 xl:mx-8  3xl:mx-11 xl:mt-10 2xl:mt-12 3xl:mt-16 xl:mb-14 2xl:mb-[72px] 3xl:mb-24 ">
            <ScrollableContent>
                <div className={classNames(" flex gap-6 xl:gap-12 scroll-smooth h-[60px] justify-center ")}
                     ref={sliderRef}>
                {data?.map((sub,index)=>
                    <Link key={index}
                        href={Paths.plp+"/"+sub?.code??null}
                        className="text-green-dark w-fit h-full flex items-center p-2">
                        {sub.title}
                    </Link>
                )}
                </div>
                <Visible visible={showArrows}>
                    <div
                        className={classNames(
                            " absolute -left-8 top-[3px] flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full shadow-[0px_0px_14px_-3px_rgba(0,0,0,0.22)] ",
                        )}
                        onClick={() => handleNextSlide(-100)}>
                        <Icon name="arrow-left" size=" w-[18px] h-[18px]" />
                    </div>
                    <div
                        className={classNames(
                            "  absolute -right-8 top-[3px] flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full shadow-[0px_0px_14px_-3px_rgba(0,0,0,0.22)]",
                        )}
                        onClick={() => handleNextSlide(100)}>
                        <Icon name="arrowPrev" size=" w-[18px] h-[18px]" />
                    </div>
                </Visible>
            </ScrollableContent>
        </div>
    );
};
export default SubCategories;