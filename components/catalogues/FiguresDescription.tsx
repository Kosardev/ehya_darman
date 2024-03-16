"use client"
import Visible from "@/components/common/visible";
import BaseContainer from "@/components/common/baseContainer";
import Image from "@/components/common/Image";
import Button from "@/components/common/button";

export default function FiguresDescription({ data }:any) {

    return (
        <BaseContainer>
            {data?.map((item,key)=><div key={key} className={"flex flex-col items-end mt-10 xl:mt-20 3xl:mt-36 gap-4 lg:gap-8 mb-10 xl:mb-20 3xl:mb-44"}>
                <h2 className={"max-w-40P font-kalamehFa text-lg xl:text-2xl 3xl:text-3x pl-8 lg:pl-12"}>{item?.title}</h2>
                    <div className={"flex gap-8 w-full"}>
                        <div className={"grow max-w-[40%] flex flex-col justify-center"}>
                            <p className={"max-w-[80%] leading-7 text-sm font-iransans mb-5 lg:mb-11"}>{item?.description}</p>
                            <Visible visible={!!item?.link}>
                                <Button fill={"fill"} size={"lg"} className={"!w-fit px-8 font-shabnam !rounded-full"} >راه حل های حمل و نقل و ذخیره سازی (PDF) </Button>
                            </Visible>
                        </div>
                        <div className={"grow max-w-[60%] 2xl:max-h-[400px] 3xl:max-h-[465px] relative"} >
                            <Image className={"object-contain max-h-full !max-w-[90%]"}  width={560} height={400} src={item?.image} alt={item?.title}/>
                        </div>
                    </div>
            </div>)}
        </BaseContainer>
    )
}
