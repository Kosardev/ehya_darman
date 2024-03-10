import BaseContainer from "@/components/common/baseContainer";
import {Svgs} from "@/components/common/SVGs";
import Image from "@/components/common/Image";
import React from "react";
import {AboutUsType} from "@/lib/types/aboutUs";
import Link from "@/components/common/Link";
import AspectRatio from "@/components/common/aspectRatio";
import Visible from "@/components/common/visible";
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";

type AboutUsWrapperT = {
    data?:AboutUsType|null;
};

export default function AboutUsComponent({data}:AboutUsWrapperT) {
    return (
        <>
            <div className="group relative">
                <div className="!w-full bg-black relative" >
                    <Link href={data?.banner?.image??""} target="_blank">
                        <AspectRatio aspect={590/1911}>
                            <Image
                                src={data?.banner?.image ?? ""}
                                alt={data?.banner?.title?? ""}
                                title={data?.banner?.title ?? ""}
                                layout="responsive"
                                style={{ objectFit: "cover" }}
                                className="object-cover opacity-60"
                                width={1920} height={590}
                            />
                        </AspectRatio>
                    </Link>
                    <Visible visible={!!data?.banner?.title}>
                        <h2 className="absolute right-[20%] top-[25%] text-white font-kalamehFa font-bold text-4xl max-w-40P drop-shadow max-h-[104px] line-clamp-2 text-ellipsis overflow-hidden">{data?.banner?.title}</h2>
                    </Visible>
                    <Visible visible={!!data?.banner?.subTitle}>
                        <h4 className="absolute right-[20%] top-[45%] text-white font-shabnam leading-8 text-[22px] max-w-40P drop-shadow  max-h-[130px]">{data?.banner?.subTitle}</h4>
                    </Visible>
                </div>
            </div>
            <BaseContainer size={"sm"}>
                <section className='flex gap-10 2xl:gap-20 pb-16 flex-wrap lg:flex-nowrap'>
                    <figure className='relative pt-12 pl-10 grow'>
                        <Image src={data?.aboutUs?.image??""} alt={data?.aboutUs?.title??"aboutUs"} width={800} height={563}
                               className='rounded-lg object-cover object-bottom'/>
                    </figure>
                    <div className='pt-12 w-full lg:w-1/3'>
                        <SubTitle title={data?.aboutUs?.title??""} icon={'plus'}/>
                        <Title title={data?.aboutUs?.subTitle??""} className={'!mt-5 !text-3xl'}/>
                        <p  className={'mt-8 text-gray-79 leading-8 font-shabnam text-justify'}>{data?.aboutUs?.text??""} </p></div>
                </section>
                <section className='flex flex-wrap lg:flex-nowrap gap-10 2xl:gap-20 pb-16'>
                    <div className='pt-12 w-full lg:w-1/3'>
                        <SubTitle title={data?.history?.title??""} icon={'plus'}/>
                        <Title title={data?.history?.subTitle??""} className={'!mt-5 !text-3xl'}/>
                        <p  className={'mt-8 text-gray-79 leading-8 font-shabnam text-justify'}>{data?.history?.text??""} </p></div>
                    <figure className='relative pt-12 lg:pl-10 grow'>
                        <Image src={data?.history?.image??""} alt={data?.history?.title??"history"} width={700} height={400} className='rounded-lg object-cover object-bottom'/>
                    </figure>
                </section>
                <section className='flex flex-wrap lg:flex-nowrap gap-10 2xl:gap-20 pb-16'>
                    <figure className='relative pt-12 lg:pl-10 grow'>
                        <Image src={data?.vision?.image??""} alt={data?.history?.title??"history"} width={640} height={360}
                               className='rounded-lg object-cover object-bottom'/>
                    </figure>
                    <div className='pt-12 w-full lg:w-1/3'>
                        <SubTitle title={data?.vision?.title??""} icon={'plus'}/>
                        <Title title={data?.vision?.subTitle??""} className={'!mt-5 !text-3xl'}/>
                        <ul className={"flex flex-col gap-2 mt-4"}>{
                            data?.vision?.items?.map((item,key)=>
                            <li className={" text-gray-79 leading-8 font-shabnam text-justify list-disc"} key={key}>{item}</li>
                            )
                        }</ul>
                    </div>
                </section>
            </BaseContainer>
        </>
    )
}

