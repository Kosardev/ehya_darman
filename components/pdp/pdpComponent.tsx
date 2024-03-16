"use client"
import Visible from "@/components/common/visible";
import BaseContainer from "@/components/common/baseContainer";
import Card from "@/components/plp/Card";
import Button from "@/components/common/button";
import Image from "@/components/common/Image";
import {ProductPageType} from "@/lib/types";
import Link from "@/components/common/Link";
import ThreeD from "@/components/pdp/threeD";
import PdpTabs from "@/components/pdp/tabs";
import { SocialIcon } from 'react-social-icons'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {useState} from "react";
import Icon from "@/components/common/Icon";
export default function PdpComponent({ data }:ProductPageType) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <BaseContainer>
                <section className={"flex gap-4 2md:gap-8 xl:gap-16 justify-between w-full my-10 xl:my-14 3xl:my-20 4xl:my-[110px]"}>
                    <div className=" max-w-[50%] max-w-50P">
                        <h2 className="font-kalamehFa font-bold text-primary-dark text-xl mb-4">{data?.name}</h2>
                        <h3 className="flex text-red-product mb-3 relative">
                            <span className="bg-white block border-b border-red-product w-full absolute left-0 top-4"/>
                            <strong className={" font-iransans font-bold text-xl 2xl:text-2xl max-h-16 overflow-hidden relative z-[2] pl-4 flex w-[43%] w-43p bg-white "}>
                                {data?.description?.title}</strong>
                        </h3>
                        <p className="font-shabnam pl-14 leading-[30px] leading-30 text-sm text-justify pdpMainDesc">{data?.description?.text}</p>
                        <ul  className="pr-4 mt-6 font-iransans text-sm leading-[30px] leading-30 list-disc">
                            {data?.description?.items?.map((item,index)=> {
                                if (index<3)return <li key={item?._id}>
                                    {item.text}
                                </li>
                            })}
                        </ul>
                        <div className="flex mt-5 gap-3">
                            <Button  onClick={handleOpen} size={"lg"} className={"rounded-[50px] rounded-50 pt-3 font-shabnam "} fill={"fill"}>استعلام قیمت</Button>
                            {/*<Button size={"lg"} onClick={downLoadFile} className={"rounded-[50px] rounded-50 pt-3 font-shabnam "} fill={"outline"}>دانلود کاتالوگ ها</Button>*/}
                            <Visible visible={!!data?.pdfs?.find(item=>item?.isDefault)}>
                                <Link className=' flex w-auto min-w-[50px] border border-2 border-red-ehya text-red-ehya rounded-[50px] rounded-50 p-3 h-12 font-shabnam '
                                      download
                                    // onClick={(e)=>{e.preventDefault()}}
                                      href={data?.pdfs?.find(item=>item?.isDefault)?.image??data?.pdfs?.[0]?.image??""}>دانلود کاتالوگ ها</Link>
                            </Visible>
                        </div>
                    </div>
                    <Visible visible={!!data?.defaultImage}>

                        <figure className="pdpImg grow max-w-[43%] max-w-43P shadow-200 rounded-20 rounded-[20px] p-5 flex justify-center items-center">
                            <img src={data?.defaultImage??""} alt={data?.name??""}/>
                        </figure>
                    </Visible>
                </section>
                <ThreeD/>
            </BaseContainer>
            <PdpTabs data={data}/>
            <Visible visible={!!data?.similarProducts?.length}>
               <BaseContainer>
                   <div className={" py-4 lg:py-8 xl:py-20 3xl:py-24 w-full similarProducts"}>
                       <h3 className={"font-kalamehFa"}>محصولات مشابه</h3>
                       <div className={"w-full flex justify-between pt-4 lg:pt-6 3xl:pt-9"}>
                           {data?.similarProducts?.map(item=><Card hasHover={true} key={item?.code} data={item}/>)}
                       </div>
                   </div>
               </BaseContainer>
            </Visible>

            <Dialog size={"md"} open={open} handler={handleOpen}>
                <DialogHeader  className="justify-between text-base font-kalamehFa">
                    استعلام قیمت {data?.name}
                    <Icon
                        name={"cancel"}
                        color="fill-gray-21"
                        size="w-7 h-7"
                        onClick={handleOpen}
                    />
                </DialogHeader>
                <DialogBody>
                   <div className={"flex gap-2"}>
                       <SocialIcon url="https://linkedin.com/in/couetilc" />
                       <SocialIcon network="twitter"  />
                       {/*bgColor="#ff5a01"*/}
                       <SocialIcon network="whatsapp"  />
                       <SocialIcon network="telegram"  />
                   </div>
                </DialogBody>

            </Dialog>
        </>
    )
}
