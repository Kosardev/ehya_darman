import {bookmarkedProduct,ClassName} from '@/lib/types'
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import cn from 'classnames'

type LandingProductT = {
    product?: bookmarkedProduct;
    className: { [key in Partial<"container" | "desc" >]?: ClassName };
};

export default function Product({ product,className }:LandingProductT){
    return (
        <div className={'w-full h-[270px] rounded-lg overflow-hidden group'}>
            <Link href={product?.code??""} className={cn( ' flex overflow-hidden items-stretch' ,className.container) }>
                <Image src={product?.defaultImage??"../../public/img/DSC_3753.JPG"} width={428} height={268}
                       alt={""}
                       objectFit={'contain'}
                       className={'!w-2/3 grow !h-full object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110 bg-gradient-to-b from-gray-B2 from-10% via-gray-EE via-80% to-transparent'}/>

                <div className={cn('w-1/3 grow bg-gray-a5 py-4 px-1.5 2xl:py-8 2xl:px-2.5 transition-all duration-500 text-white group-hover:bg-red-ehya',className.desc)}>
                    <h6  className={'text-xl mb-1'}>{product?.name}</h6>
                    <p className={'text-sm font-yekanBakh font-regular'}>
                        {product?.shortDescription??''}
                    </p>
                </div>

            </Link>
        </div>
    );
};


