import ProductsWrapper from '@/components/landing/Products/productsWrapper'
import BlogWrapper from '@/components/landing/Blog/blogWrapper'
import AboutUs from '@/components/landing/CompanyInfo/aboutUs'
import Services from '@/components/landing/CompanyInfo/services'
import {getLanding} from "@/application/landing";
import Slider from "@/components/landing/slider";
import {slider} from "@/lib/types";


export default async function LandingContent() {
    const data =await getLanding()

    return (
        <>
            <Slider
                width={1911} height={850}
                images={(data?.slider as slider[])?.[0]?.slides??[]}
            />
            <ProductsWrapper products={data?.bookmarkedProduct??[]} />
            <BlogWrapper articles={data?.news??[]}/>
            <AboutUs aboutUS={data?.companyInfo?.info}/>
            <Services data={data?.servicesDetails}/>

        </>
    )
}
