"use client"
import Link from "@/components/common/Link";
import Image from "@/components/common/Image";

export default function Goals({ data }:any) {

    return (
         <div className={"relative bg-[url('/img/catalogueBg.png')] bg-cover bg-no-repeat py-8 flex flex-col items-center justify-center gap-8 mb-14 lg:mb-32 3xl:mb-80"}>
             {data?.map((item,key)=>
                 <div key={key} className={"relative bg-gray-800 rounded-full py-5 pl-12 xl:pl-20 3xl:pl-32 pr-14 xl:pr-24 3xl:pr-36 text-white max-w-[40%] even:ml-96"}>
                     <h4 className={"font-bold font-shabnam text-lg lg:text-xl 3xl:text-2xl"}>{item?.title}</h4>
                     <p className={"mt-2 font-shabnam text-sm lg:text-base 3xl:text-lg leading-5 lg:leading-7 3xl:leading-9"}>{item?.description}</p>
                     <Link href={item?.link?.url} className={"flex items-center gap-2.5 mt-2 font-bold font-shabnam  lg:text-lg 3xl:text-xl"}>{item?.link?.title} <span className={"inline-block w-4 h-4 rounded-full bg-red-ehya"}/></Link>
                     <div className={"rounded-full absolute bottom-0 left-16 translate-y-[50%] overflow-hidden bg-gray-300"}>
                         <Image className={"object-contain "}  width={137} height={137} src={item?.image} alt={item?.title}/>

                     </div>
                 </div>
             )}
         </div>
    )
}
