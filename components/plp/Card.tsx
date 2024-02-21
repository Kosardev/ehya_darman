'use client'
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {Paths} from "@/environment";
import Icon from "@/components/common/Icon";
import Link from "@/components/common/Link";
import { Maybe } from "@/lib/types/mainService";
import ScrollableContent from "@/components/common/ScrollableContent";
import Visible from "@/components/common/visible";
import Image from "@/components/common/Image";
import Button from "@/components/common/button";
import {productList} from "@/lib/types";


type CardT = {
    data: productList,
};
export default function Card ({ data}:CardT){
    return (
        <div className="shadow-120 rounded-3xl min-w-[300px] 3xl:min-w-[320px] max-w-[20%] 3xl:max-w-[24%]"  >
            <Link href={Paths?.pdp+"/"+data?.code??""}  className="xl:pt-8 xl:pb-5 xl:px-4 3xl:gap-7 3xl:pt-14 3xl:pb-9 3xl:px-8 flex flex-col 3xl:gap-7">
                <Image src={data?.image??""} alt={data?.name??""} layout={"responsive"} className={"!max-w-full !max-h-[195px] object-contain"}/>
                <div className="flex flex-col gap-2.5 items-center">
                    <h2 className={"font-semiBold font-shabnam mb-1 3xl:text-lg"}>{data?.name}</h2>
                    <h6  className={"text-center font-shabnam line-clamp-2 text-ellipsis max-h-[54px]"}>{data?.description}</h6>
                    <Button fill={"outline"} className={"!text-black !rounded-full !pt-2 "} size={"lg"}>استعلام محصول</Button>
                </div>
            </Link>
        </div>
    );
};
