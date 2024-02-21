import {servicesDetails} from '@/lib/types'
import BaseContainer from "@/components/common/baseContainer";
import ServicesSlider from "@/components/landing/CompanyInfo/servicesSlider";


type ServicesT={
    data?: servicesDetails | undefined
}

export default async function Services({data}:ServicesT) {

    return (
        <BaseContainer>
            <section className='flex flex-col px-4 lg:flex-row gap-6 2lg:gap-10 2xl:gap-20 py-16 2xl:py-20'>
                <div className='grow grid gap-2.5 2xl:gap-8 grid-cols-3 '>
                    {data?.images?.map((image,key)=> {
                        if(key<5){
                            return <figure  className={'max-h-[250px] last:col-span-2'} key={key}>
                                <img src={image?.url} alt="" className={'w-full h-full object-cover rounded-lg '}/>
                            </figure>
                        }
                    })}
                </div>
                <div className='w-full lg:w-1/2 2xl:w-1/3 relative flex items-center'>
                    <ServicesSlider sections={data?.sections??[]}/>
                </div>

            </section>
        </BaseContainer>
    )
}
