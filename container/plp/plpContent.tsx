import {getProductList} from "@/application/list";
import Visible from "@/components/common/visible";
import HeadBanner from "@/components/common/banner/headBanner";
import BaseContainer from "@/components/common/baseContainer";
import SubCategories from "@/components/plp/subCategories";
import Card from "@/components/plp/Card";
import {searchParamT} from "@/lib/types";

export default async function PlpContent({ code,searchParams }:{code: string,searchParams:searchParamT}) {

    const skip = Number(searchParams?.skip)>=0 ? Number(searchParams?.skip):0
    const limit = Number(searchParams?.limit)>=1 ? Number(searchParams?.limit):10
    const data = await getProductList({code,skip,limit})
    return (
        <>
            <Visible visible={!!data?.banner}>
                <HeadBanner title={data?.banner?.title??""} image={data?.banner?.image??""}/>
            </Visible>
            <BaseContainer>
                <SubCategories data={data?.subCategories??[]}/>
                <div className={"w-full flex flex-wrap gap-8 justify-between 3xl:gap-x-[42px] mb-8 "}>
                    {data?.productsData?.[0]?.products?.map((product,index)=><Card data={product??{}} key={index}/>)}
                </div>
            </BaseContainer>
        </>
    )
}
