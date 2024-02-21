import BaseContainer from "@/components/common/baseContainer";
import logo from "@/public/img/ehyaLogo.png";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import Icon from "@/components/common/Icon";
import FooterLinks from "@/components/common/footer/footerLinks";
import {getFooter} from "@/application/footer";
import {Footer, footerLinkItem} from "@/lib/types";
import AspectRatio from "@/components/common/aspectRatio";
import {Icons} from "@/lib/types";

export default async function Footer() {
    const data : Footer | null = await getFooter()
    return (
        <footer className={'w-full bg-gray-2 font-iransans text-white '}>
            <BaseContainer>
                <div className={'w-full border-b border-b-white px-2 lg:px-0 py-6 3xl:py-11 flex flex-col lg:flex-row items-center '}>
                    <figure className={'w-full lg:w-fit justify-center lg:justify-start flex items-center gap-1 ml-1 lg:ml-7'}>
                        {/*<AspectRatio aspect={60 / 70}>*/}
                            <Image
                                layout="fixed"
                                className={'!max-w-[78px] object-fit'}
                                src={logo} width={78} height={69} alt={'احیا درمان پیشرفته'}
                            />
                        {/*</AspectRatio>*/}
                        <figcaption className={'flex flex-col gap-0.5 font-iransans font-medium text-xs grow lg:grow-0 lg:text-sm'} >
                            <p>احیا درمان پیشرفته</p>
                            <p>Ehya Darman Pishrafte</p>
                        </figcaption>
                    </figure>
                    <p className={'my-2 lg:my-0 lg:max-w-[50%] text-xs 2xl:text-sm font-shabnam font-regular '} >شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و دستگاه های ماشین بیهوشی، تنها تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و همچنین تولید کننده دستگاه CT Scan در ایران می باشد.
                    </p>
                    {data?.socialMedias?.length &&
                    <div className={'mr-auto flex w-full lg:w-fit justify-center gap-2 lg:justify-start lg:gap-5 items-center'}>
                        {
                            data?.socialMedias?.map((item:footerLinkItem,key)=>
                                <Link href={item?.link??""} key={key} title={item?.title??''}>
                                    <Icon name={item?.name as Icons ??undefined} size={'w-5 h-5'} color={'fill-white'}/>
                                </Link>
                            )
                        }
                    </div>}
                </div>
                <FooterLinks/>
            </BaseContainer>
            <p className={'bg-black w-full flex items-center justify-center font-iransans py-2 text-xs 2xl:text-sm '}>
                ۱۴۰۲ - 1391 تمامی حقوق مادی و معنوی این سایت متعلق به احیا درمان می‌باشد.
            </p>
        </footer>
    )
}
