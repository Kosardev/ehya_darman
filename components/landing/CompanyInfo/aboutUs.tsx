import {info} from '@/lib/types'
import BaseContainer from "@/components/common/baseContainer";
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";
import Image from "@/components/common/Image";
import {Svgs} from "@/components/common/SVGs";

type AboutUsT={
    aboutUS?: info | undefined
}

export default async function AboutUs({aboutUS}:AboutUsT) {

    return (
        <BaseContainer>
            <section className='flex gap-10 2xl:gap-20 pb-16'>
                <div className='pt-12 w-1/3'>
                    <SubTitle title={'درباره ما'} icon={'plus'}/>
                    <Title title={' درباره شرکت احیا درمان پیشرفته کشور بیشتر بدانید.'} className={'!mt-5 !text-3xl'}/>
                    <p  className={'mt-8 text-gray-79 leading-8 font-shabnam text-justify'}>{aboutUS?.shortDescription}</p>
                </div>
                <figure className='relative pt-12 pl-10 grow'>
                    <span  className='absolute top-0 left-0'>
                        <Svgs name={'aboutUsBg'} width={850} height={568}/>
                    </span>
                    <Image src={aboutUS?.defaultImage??""} alt={aboutUS?.title??""} width={856} height={500}
                           className='rounded-lg object-cover object-bottom'/>
                </figure>
            </section>
        </BaseContainer>
    )
}