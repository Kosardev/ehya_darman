import {getProductList} from "@/application/list";
import Visible from "@/components/common/visible";
import HeadBanner from "@/components/common/banner/headBanner";
import BaseContainer from "@/components/common/baseContainer";
import SubCategories from "@/components/plp/subCategories";
import {searchParamT} from "@/lib/types";
import PlpList from "@/components/plp/list";

export default async function PlpContent({ code,searchParams }:{code: string,searchParams:searchParamT}) {

    const skip = Number(searchParams?.skip)>=0 ? Number(searchParams?.skip):0
    const limit = Number(searchParams?.limit)>=1 ? Number(searchParams?.limit):12
    let data = await getProductList({code,skip,limit})

    return (
        <>
            <Visible visible={!!data?.banner}>
                <HeadBanner title={data?.banner?.title??""} image={data?.banner?.image??""}/>
            </Visible>
            <BaseContainer>
                <Visible visible={!!data?.subCategories?.length}>
                    <SubCategories data={data?.subCategories??[]}/>
                </Visible>
                <PlpList list={data?.productsData?.products??[]} totalCount={data?.productsData?.count??0} code={code}/>
            </BaseContainer>
        </>
    )
}
