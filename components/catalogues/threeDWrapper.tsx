"use client"
import Link from "@/components/common/Link";
import Image from "@/components/common/Image";
import BaseContainer from "@/components/common/baseContainer";
import ThreeD from "@/components/pdp/threeD";

export default function ThreeDWrapper() {

    return (
        <BaseContainer>
            <div className={"w-full flex items-center"}>
                <div className={"w-1/3 "}><Image className={"object-contain max-h-full !max-w-[90%]"}  width={560} height={400} src={"/img/catalogue4.png"} alt={""}/></div>
                <div className={"w-1/3 p-4"}><ThreeD/></div>
                <div className={"w-1/3 "}>
                    <h2 className={"font-kalamehFa text-xl mb-4 pl-16"}>در این بخش با مشخ صات دیستگاه به صورت کامل آشنا شوید</h2>
                    <p className={"font-iransans text-sm mb-3 pl-16"}>قبل از سفارش با دستگاه HCU آشنا شوید و شیوه کار با آن را بیشتر بشناسید.</p>
                    <ul>
                        <li>
                            <h4 className={"font-shabnam font-bold text-lg mb-1.5"}>کارایی</h4>
                            <p className={"font-shabnam text-sm border-b pb-2.5  mb-2.5"}>ما صفحات جلویی سریع و درخشان را ارائه می دهیم. چه یک دستگاه بیهوشی  یا آیسی یو باشد یا ما نمره کامل را کسب می کنیم.</p>
                        </li>
                        <li>
                            <h4 className={"font-shabnam font-bold text-lg  mb-1.5"}>کارایی</h4>
                            <p className={"font-shabnam text-sm"}>ما صفحات جلویی سریع و درخشان را ارائه می دهیم. چه یک دستگاه بیهوشی  یا آیسی یو باشد یا ما نمره کامل را کسب می کنیم.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </BaseContainer>
    )
}
