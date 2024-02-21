import {news} from '@/lib/types'
import SubTitle from "@/components/common/subTitle";
import cn from "classnames";

type ArticleItemT = {
    article?: news;
    className?: string;
};

export default function ArticleItem({ article,className }:ArticleItemT){
    return (
        <div className={cn(className)}>
            <div className='mb-3 2xl:mb-5 flex divide-x divide-x-reverse gap-4 leading-4 items-center divide-red-ehya'>
                <SubTitle className={'text-xs'} title={article?.type??""}/>
                <span className=' pr-4 text-sm leading-4 font-medium text-gray-86'>{article?.createdAt}</span>
            </div>
            <p className=' w-[90%] 2xl:text-lg font-bold text-gray-32'>
                {article?.title}
            </p>
        </div>
    );
};


