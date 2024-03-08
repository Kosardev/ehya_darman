'use client'
import {useRef,useState,useEffect} from 'react'
import {bookmarkedProduct} from '@/lib/types'
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";
import Product from "@/components/landing/Products/product";
import Button from "@/components/common/button";
import Icon from "@/components/common/Icon";
import className from "classnames";
import ProductSlider from "@/components/landing/Products/productSlider";
import cn from "classnames";



type LandingProductsWrapperT = {
    products?: bookmarkedProduct[];
};

export default function ProductsWrapper({ products }:LandingProductsWrapperT){
    let chunkedProducts = [];
    for (let i = 0; i < Number(products?.length); i += 2) {
        chunkedProducts.push(products?.slice(i, i + 2));
    }
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef() as any;
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef?.current);
        return () => observer.unobserve(domRef?.current);
    }, []);


    return (
        <section  ref={domRef} className={cn('w-full pt-16 pr-12 4xl:pt-32 4xl:pr-64 flex gap-10 4xl:gap-20 overflow-hidden aos-item',{"aos-fade-up":isVisible})}>
            <div className={'w-1/4'}>
                <SubTitle title={'محصولات و خدمات'} icon={'plus'}/>
                <Title title={'محصولات شرکت دانش بنیان احیا درمان پیشرفته '} className={'!max-w-[80%]'}/>
                <p className={'text-gray-79 leading-8 font-yekanBakh font-regular text-justify'}>
                    شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و دستگاه های ماشین بیهوشی، تنها تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و همچنین تولید کننده دستگاه CT Scan در ایران می باشد که در حال حاضر تمامی این محصولات دارای گواهی دانش بنیان نیز می باشند.  این شرکت ضمن دریافت تاییدیه از مراجع داخلی و همچنین متخصصین کمپانی اروپایی در خصوص کیفیت مطلوب و مناسب تولیدات خود موفق به کسب استاندارد بین المللی CE اروپا برای سه محصول خود شد.
                </p>
                <Button fill={'fill'} size={'lg'} className={'px-9 mt-10'} onClick={()=>{}}>نمایش همه</Button>

            </div>
            <div className=" grow max-w-[75%]">
                <ProductSlider
                    data={chunkedProducts ?? []}
                />
            </div>
        </section>
    );
};


