import Image from "@/components/common/Image";

type HeadBannerT={
    image: string , title: string
}

export default async function HeadBanner({ image , title }: HeadBannerT ) {

    return (
        <figure className="w-full bg-gradient-to-b from-transparent to-black relative">
            <Image src={image} layout={"responsive"} alt={title} width={1920} height={430} className={"opacity-60 object-contain !w-full"}/>
            <h2 className={"font-kalamehFa absolute bottom-20 left-1/2 -translate-x-2/4 text-white font-semiBold text-lg xl:text-3xl"}>{title}</h2>
        </figure>
)}