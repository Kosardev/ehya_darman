'use client'
import React from "react";
import classNames from "classnames";
import {Paths} from "@/environment";
import Link from "@/components/common/Link";
import Image from "@/components/common/Image";
import Button from "@/components/common/button";
import {productList} from "@/lib/types";
import {useRouter} from "next/navigation";


type CardT = {
    data: productList,
    hasHover?: boolean
};
export default function Card ({hasHover, data}:CardT){
    const router = useRouter()
    return (
        <div className={classNames("shadow-120 bg-white rounded-3xl min-w-[300px] sm:max-w-[48%] lg:max-w-[22%] xl:max-w-[32%] 2xl:w-[24%] 3xl:w-[19.2%] 3xl:min-w-[320px]",{
            "relative hoverCard":hasHover
        })}  >
            <Link href={Paths?.pdp+data?.code??""} target={"_blank"}  className="pt-4 pb-2.5 px-2 gap2 xl:pt-8 xl:pb-5 xl:px-4 xl:gap-3 3xl:pt-14 3xl:pb-9 3xl:px-8 flex flex-col 3xl:gap-7">
                <Image src={data?.image??""} alt={data?.name??""} layout={"responsive"} className={"!max-w-full !max-h-[195px] object-contain"}/>
                <div className="flex flex-col gap-2.5 items-center">
                    <h2 className={"font-semiBold font-shabnam mb-1 3xl:text-lg"}>{data?.name}</h2>
                    <h6  className={"text-center font-shabnam line-clamp-2 text-ellipsis max-h-[54px]"}>{data?.description}</h6>
                    <Button onClick={()=>{router.push(Paths.pdp+(data?.code??""))}} fill={"outline"} className={"!text-black !rounded-full !pt-2 "} size={"lg"}>جزئیات محصول</Button>
                </div>
            </Link>
        </div>
    );
};
