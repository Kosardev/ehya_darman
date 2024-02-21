// import {getLanding} from "@/application/landing";
import Visible from "@/components/common/visible";
import HeadBanner from "@/components/common/banner/headBanner";
import BaseContainer from "@/components/common/baseContainer";
import SubCategories from "@/components/plp/subCategories";
import Card from "@/components/plp/Card";

export default async function PlpContent({ code }:{code: string}) {
    const data ={
        title:"ماشین بیهوشی Drager مدل Primus",
        subTitle:"ویژگی‌های ماشین بیهوشی Drager مدل Primus",
        mainDescription:"ماشین بیهوشی یکی از تجهیزات پزشکی اساسی و حیاتی اتاق جراحی بشمار می‌رود. این محصول علاوه‌بر اتاق جراحی گاهاً در مراقبت ویژه نیز مورد استفاده قرار می‌گیرد. ماشین بیهوشی یا دستگاه بویل به طور کلی جهت ایجاد بی‌حسی و جریان بیهوشی عمومی مورد استفاده قرار می‌گیرد.",
        mainProperty:[
            "تهویه اضطراری در صورت قطع کامل گاز",
            "مجهز به باتری با ظرفیت کار ۹۰ دقیقه پس از قطع جریان برق",
            "مجهز به تکنولوژی راه اندازی اضطراری",
        ],
        mainImage:"http://45.159.208.49/docs/products/02-EDP-Neptune/pictures/default.png",
    }

    return (
        <>
            <BaseContainer>
                <section className={"flex gap-4 2md:gap-8 xl:gap-16 justify-between w-full mt-20 3xl:mt-[110px]"}>
                    <div className="grow ">
                        <h2 className="font-kalamehFa font-bold text-primary-dark text-xl mb-4">{data?.title}</h2>
                        <h3 className="flex font-iransans font-bold text-red-product text-xl mb-3 relative max-w-[50%]">
                            <strong className={"flex w-[36%] "}>                            {data?.subTitle}</strong>
                            <span className="bg-white p-3 pl-0 border-b border-red-product w-[64%] absolute left-0 top-4"/>
                        </h3>

                    </div>
                    <Visible visible={!!data?.mainImage}>
                        <figure className="w-1/3 shadow-200 rounded-[20px] p-4 flex justify-center items-center">
                            <img src={data?.mainImage??""} alt={data?.title??""}/>
                        </figure>
                    </Visible>
                </section>
            </BaseContainer>
        </>
    )
}
