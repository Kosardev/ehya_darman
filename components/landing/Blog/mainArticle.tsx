import {news} from '@/lib/types'
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

type MainArticleT = {
    article?: news | undefined;
};

export default function MainArticle({ article }:MainArticleT){
    return (
        <div className='sticky top-0 w-1/2 h-auto '>
            <figure className='relative w-full h-auto pr-20 '>
                <Link href={''}>
                    <Image src={article?.defaultImage??""} alt={article?.title??"اخبار احیا درمان"}
                           width={500} height={500} className={'!w-full !h-auto object-cover overflow-hidden rounded-lg'}/>
                    <figcaption className='absolute w-[60%] rounded-lg pt-4 pb-2 pr-16 pl-6 bg-white border-r border-red-ehya border-r-[8px] right-24 bottom-[-2%] '>
                        {article?.title}
                    </figcaption>
                </Link>
            </figure>
        </div>
    );
};
// pr-28 pl-8