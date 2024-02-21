import Link from "@/components/common/Link";
import Icon from "@/components/common/Icon";
import {getFooter} from "@/application/footer";
import {Footer, footerLinkItem} from "@/lib/types/footer";
import {Icons} from "@/lib/types";

export default async function FooterLinks() {
    const data : Footer | null = await getFooter()
    return (
        <div className={'w-full px-2 lg:px-0 pt-8 pb-4 3xl:pt-14 3xl:pb-8 flex flex-col lg:flex-row justify-between '}>
            {data?.context?.length&&
                data?.context?.map((item,key)=>
                    <div key={key}>
                        <h6 className={'font-kalamehFa font-bold text-2xl mb-3 lg:text-xl lg:mb-6'}>{item?.title}</h6>
                        <ul className={'flex flex-col gap-1.5 lg:gap-3 font-regular mb-5 lg:mb-0 text-sm max-w-[280px]'}>
                            {item?.items?.map((item2:footerLinkItem,key2)=>
                                <li key={key2}>
                                    <Link href={item2?.link??''} className={'font-iransans text-lg flex gap-1'} title={item2?.title??''}>
                                        {item2?.icon && <Icon name={item2?.name as Icons ??undefined} color={'fill-white'} size={'w-4 h-4'}/>}
                                        {item2?.item}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
