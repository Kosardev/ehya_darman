import Image from "@/components/common/Image";
import {breadCrumbsT} from "@/lib/types";
import Visible from "@/components/common/visible";
import Link from "@/components/common/Link";

type HeadBannerT={
    image: string ,
    title: string,
    breadCrumbs?: breadCrumbsT
}

export default async function HeadBanner({ image , title ,breadCrumbs}: HeadBannerT ) {

    return (
        <figure className="w-full bg-gradient-to-b from-transparent to-black relative">
            <Image src={image} layout={"responsive"} alt={title} width={1920} height={430} className={"opacity-60 object-contain !w-full"}/>
            <h2 className={"font-kalamehFa absolute bottom-20 left-1/2 -translate-x-2/4 text-white font-semiBold text-lg xl:text-3xl"}>{title}</h2>
            <Visible visible={!!breadCrumbs?.breadCrumbs?.length}>
                <div className={"absolute w-full bottom-6 flex gap-2.5 px-8"}>
                    {breadCrumbs?.breadCrumbs?.map((item,key)=>
                        <Visible key={key} visible={!!item.title}>
                            <Link className={"bg-white-500 rounded py-0.5 px-2.5 font-shabnam text-sm hover:bg-white hover:text-red-ehya "} href={item?.link??""}>{item.title}</Link>
                            {key!== (breadCrumbs?.breadCrumbs?.length - 2)? <span className={"text-white"}>/</span>:""}
                        </Visible>
                    )}
                </div>
            </Visible>
        </figure>
)}