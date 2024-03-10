import BaseContainer from "@/components/common/baseContainer";
import Link from 'next/link';
import Icon from "@/components/common/Icon";
import cn from "classnames"
import {Paths} from "@/environment";

interface IHeader {
    transparentHeader?:boolean
};
export default function TopHeader({transparentHeader}:IHeader) {
    return (
        <div className={cn('w-full  py-2.5 lg:pt-3.5 lg:pb-4 border-b border-black  ',{
            "!text-white !border-white-500  group-hover:!bg-red-ehya" : !!transparentHeader
        })}>
            <BaseContainer>
                <ul className={cn('text-xs flex justify-end items-center divide-x divide-x-reverse [&>li]:px-2 lg:[&>li]:px-4 ',{
                    ' !divide-white-500' :  !!transparentHeader
                })}>
                    <li><Link href={`#`}>
                        ویدیوهای آموزشی
                    </Link></li>
                    <li><Link href={Paths.contactUs}>
                        تماس با ما
                    </Link></li>
                    <li><Link href={`#`}  className='flex  items-center gap-2 lg:gap-4'>
                        <Icon name={"globe"} color={transparentHeader? "fill-white ": "fill-black"} size={"w-3 h-3 lg:w-4 lg:h-4"}/>
                        انتخاب زبان
                    </Link></li>
                </ul>
            </BaseContainer>
        </div>
    )
}
