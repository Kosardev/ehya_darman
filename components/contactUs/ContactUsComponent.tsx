"use client"
import {getCitiesAndBranches, getContactInfo} from "@/application/contactUs";
import BaseContainer from "@/components/common/baseContainer";
import {Svgs} from "@/components/common/SVGs";
import Image from "@/components/common/Image";
import Icon from "@/components/common/Icon";
import {useEffect, useRef, useState} from "react";
import {
    branchCityItem,
    branchItem,
    CitiesAndBranches,
    ContactUsType,
    Icons
} from "@/lib/types";
import ContactForm from "@/components/contactUs/contactForm";

type ContactUsWrapperT = {
    data?:ContactUsType|null;
    citiesBranches?:CitiesAndBranches|null;
};

export default function ContactUsComponent({data,citiesBranches}:ContactUsWrapperT) {
    const [branchOpen,setBranchOpen] = useState<boolean>(false)
    const [selectedBranch,setSelectedBranch] = useState<branchCityItem>(null)
    const branchesRef = useRef(null)
    // const [cityOpen,setCityOpen] = useState<boolean>(false)
    // const [selectedCity,setSelectedCity] = useState<branchCityItem>(null)
    // const cityRef = useRef(null)

    useEffect(()=>{
        function  handleClickOutside(event){
            if (branchesRef.current && !branchesRef.current.contains(event.target)) {

                setBranchOpen(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[branchesRef])
    const generateContent=()=>{
        let item:branchItem | null = null
        if(selectedBranch){
            item = (data?.branches as Array<branchItem>)?.find(element=>element?.code === selectedBranch?.code)??null
        }else{
            item = (data?.branches as Array<branchItem>)?.find(element=>element?.isDefault)??null
        }
        console.log("generateContent",selectedBranch,item,data?.branches)
        return(
            <div className={"w-full flex flex-wrap lg:flex-nowrap justify-between gap-6 mb-[42px] "}>
                <ul className={"flex flex-col grow gap-4  lg:max-w-[53%]"}>
                    <li className={"w-full flex items-center justify-between gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>آدرس دفتر:</span>
                        <span className={"text-right grow"}>{item?.address??""}</span>
                    </li>
                    <li className={"w-full flex items-center justify-between gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>تلفن:</span>
                        <span  className={"text-right grow flex "}><a href={"tel:"+item?.phone}>
                                            <span className={"text-right grow ltr flex"}>{item?.phone??""}</span></a></span>
                    </li>
                    <li className={"w-full flex items-center justify-between gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>فکس:</span>
                        <span  className={"text-right grow flex "}><a href={"fax:"+item?.fax}>
                                            <span className={"text-right grow ltr flex"}>{item?.fax??""}</span></a></span>
                    </li>
                    <li className={"w-full flex items-center justify-between gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>ایمیل:</span>
                        <span  className={"text-right grow"}>
                                            <a href={"mailto:"+item?.email}><span className={"text-right grow"}>{item?.email??""}</span></a>
                                        </span>
                    </li>
                    <li className={"w-full flex items-center justify-between gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>وب‌سایت:</span>
                        <span  className={"text-right grow"}>
                                            <a href={item?.website??""}><span className={"text-right grow"}>{item?.website??""}</span></a>
                                        </span>
                    </li>
                    <li className={"w-full flex items-center  gap-8 text-black font-shabnam [&>*]:font-regular [&>*]:text-base"}>
                        <span className={"text-[18px] font-regular min-w-[110px]"}>فضای اجتماعی:</span>
                        <ul className={"text-right  border border-black flex items-center"}>
                            {item?.socialMedias?.map((item2,key2)=>
                                <li className={"w-11 h-11 flex items-center justify-center border-l border-black last:border-0"} key={key2}>
                                    <a href={item2?.link??""}>
                                        <Icon name={item2?.icon as Icons??""} color={"stroke-black-2"} size={"h-6 w-6"}/>
                                        {/*<span className={"text-right grow"}>{item2?.icon??""}</span>*/}
                                    </a>
                                </li>
                            )}

                            {/*<li className={"w-11 h-11 flex items-center justify-center border-l-black"}>*/}
                            {/*    <a href={item?.website??""}><span className={"text-right grow"}>test</span></a>*/}
                            {/*</li>*/}
                            {/*<li className={"w-11 h-11 flex items-center justify-center border-l-black"}>*/}
                            {/*    <a href={item?.website??""}><span className={"text-right grow"}>test</span></a>*/}
                            {/*</li>*/}
                            {/*<li className={"w-11 h-11 flex items-center justify-center"}>*/}
                            {/*    <a href={item?.website??""}><span className={"text-right grow"}>test</span></a>*/}
                            {/*</li>*/}
                        </ul>
                    </li>
                </ul>
                <figure className='relative p-[21px]'>
                                <span  className='absolute top-0 right-0'>
                                    <Svgs name={'contactUsBg'} width={335} height={279}/>
                                </span>
                    <Image src={item?.image??""} alt={data?.banner?.title??""} width={400} height={238}
                           className='rounded-lg object-cover object-bottom border'/>
                </figure>
            </div>
        )
    }
    return (
        <BaseContainer>
            <div className={"flex flex-wrap lg:flex-nowrap items-center gap-10  my-10"}>
                <h1 className={" text-black-2 font-shabnam font-bold text-xl"}>با ما در تماس باشید</h1>
                <div className={" md:w-[40%] lg:w-[350px] relative"} ref={branchesRef}>
                    <button className={"w-full border-b border-black pb-2 flex items-center justify-between px-1"} onClick={()=>setBranchOpen(!branchOpen)}>
                        <span className={"text-black-2 font-shabnam font-bold text-lg"}>{selectedBranch?selectedBranch?.title:"شعبه"}</span>
                        <Icon name={"arrow-left"} className={branchOpen?"rotate-90":"-rotate-90"} color={"fill-black-2"}/>
                    </button>
                    {branchOpen &&
                        <ul className={"w-full h-auto max-h-[250px] overflow-auto bg-white shadow-dropDown flex flex-col gap-2 absolute right-0 top-[100%] z-[50] py-2"}>
                            {/*<li>*/}
                            {/*    <button className={"h-10 w-full flex items-center px-4 text-sm font-medium font-shabnam" }*/}
                            {/*            onClick={()=> {*/}
                            {/*                setBranchOpen(false)*/}
                            {/*                setSelectedBranch(null)*/}
                            {/*            }}>همه</button>*/}
                            {/*</li>*/}
                            {citiesBranches?.branches?.map((item,key)=>
                                <li key={key}>
                                    <button className={"h-10 w-full flex items-center px-4 text-sm font-medium font-shabnam" }
                                            onClick={()=> {
                                                setBranchOpen(false)
                                                setSelectedBranch(item)
                                            }}>{item?.title??""}</button>
                                </li>
                            )}
                        </ul>
                    }
                </div>
                {/*<div className={"w-full md:w-[40%] lg:w-[350px] relative"} ref={cityRef}>*/}
                {/*    <button className={"w-full border-b border-black pb-2 flex items-center justify-between px-1"} onClick={()=>setCityOpen(!cityOpen)}>*/}
                {/*        <span className={"text-black-2 font-shabnam font-bold text-lg"}>{selectedCity?selectedCity?.title:"شهر"}</span>*/}
                {/*        <Icon name={"arrow-left"} className={cityOpen?"rotate-90":"-rotate-90"} color={"fill-black-2"}/>*/}
                {/*    </button>*/}
                {/*    {cityOpen &&*/}
                {/*        <ul className={"w-full h-auto max-h-[250px] overflow-auto bg-white shadow-dropDown flex flex-col gap-2 absolute right-0 top-[100%] z-[50] py-2"}>*/}
                {/*            /!*<li>*!/*/}
                {/*            /!*    <button className={"h-10 w-full flex items-center px-4 text-sm font-medium font-shabnam" }*!/*/}
                {/*            /!*            onClick={()=> {*!/*/}
                {/*            /!*                setCityOpen(false)*!/*/}
                {/*            /!*                setSelectedCity(null)*!/*/}
                {/*            /!*            }}>همه</button>*!/*/}
                {/*            /!*</li>*!/*/}
                {/*            {citiesBranches?.cities?.map((item,key)=>*/}
                {/*                <li key={key}>*/}
                {/*                    <button className={"h-10 w-full flex items-center px-4 text-sm font-medium font-shabnam" }*/}
                {/*                            onClick={()=> {*/}
                {/*                                setCityOpen(false)*/}
                {/*                                setSelectedCity(item)*/}
                {/*                            }}>{item?.title??""}</button>*/}
                {/*                </li>*/}
                {/*            )}*/}
                {/*        </ul>*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
            <div className={"w-full bg-gray-f6 px-[78px] py-[54px] mb-10"}>
                <h2 className={"w-full text-black-2 font-shabnam font-bold text-xl mb-[42px] "}>{data?.banner?.title??""}</h2>
                <div className={"w-full "}>
                    {generateContent()}
                </div>
            </div>
            <div className={"w-full mb-[60px]"}>
                <h2 className={"w-full text-black-2 font-shabnam font-bold text-xl mb-8 "}>از طریق فرم زیر با ما در تماس باشید</h2>
                <div className={"flex flex-wrap lg:flex-nowrap items-stretch justify-between gap-20"}>
                    <ContactForm
                        // cities={citiesBranches?.cities?.map((item)=>{return {value:item?.code , label:item?.title}})??[]}
                    />
                    <figure className='relative pr-[30px] pt-[20px]'>
                                <span  className='absolute top-0 right-0'>
                                    <Svgs name={'contactFormBg'} width={313} height={470}/>
                                </span>
                        <Image src={data?.formImage??""} alt={data?.banner?.title??""} width={293} height={440}
                               className='rounded-lg object-cover object-bottom border'/>
                    </figure>
                </div>
            </div>

        </BaseContainer>
    )
}

