"use client"
import {news} from '@/lib/types'
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";
import Button from "@/components/common/button";
import BaseContainer from "@/components/common/baseContainer";
import MainArticle from './mainArticle'
import ArticleItem from './articleItem'
import {Svgs} from "@/components/common/SVGs";
import {useEffect, useRef, useState} from "react";
import cn from "classnames";

type LandingBlogWrapperT = {
    articles?: news[];
};

export default function BlogWrapper({ articles }:LandingBlogWrapperT){
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef() as any;
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef?.current);
        return () => observer?.unobserve(domRef?.current);
    }, []);

    return (
        <BaseContainer>
            <section className={'relative w-full pt-10 pb-14 3xl:pt-28 3xl:pb-28  font-yekanBakh  flex flex-col justify-center items-center'}>
                <SubTitle title={'اخبار و مقالات'} icon={'plus'}/>
                <Title title='جدیدترین اخبار و مقالات در خبرنامه ما دنبال کنید' className='max-w-[22%] text-center'/>
                <div ref={domRef} className={cn('absolute pt-10 3xl:pt-28 top-20  w-1/2 h-full right-0 aos-item aos-itemX',{"aos-fade-left":isVisible})}>
                    <Svgs  name={'newsBG'} width={530} height={530}/>
                </div>
                <div  className={'w-full relative flex justify-center gap-16 mt-8 2xl:mt-[72px] max-h-[68vh] overflow-y-visible'}>
                    {/*overflow-y-auto hidden-scroll*/}
                    <MainArticle article={articles?.[0]}/>
                    <div className={'grow flex flex-col justify-start divide-y divide-gray-divider gap-4 2xl:gap-8'}>
                        {articles?.map((article,key)=>{
                            if(key!==0){
                                return(<ArticleItem key={key} className={key!==1? "pt-4 2xl:pt-8 ":""} article={article}/>)
                            }
                        })}
                        <div className='flex gap-2.5 items-center pt-4 2xl:pt-8 pb-1'>
                            <Button fill='fill' size='lg' className='px-8'>همه مقالات</Button>
                            <Button fill='outline' size='lg' className='px-8'>نمایشگاه ها</Button>
                        </div>
                    </div>
                </div>
            </section>
        </BaseContainer>
    );
};


