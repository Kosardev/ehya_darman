'use client'
import Link from "next/link";
import Icon from "@/components/common/Icon";
import {menuItem} from "@/lib/types";
import Visible from "@/components/common/visible";
import className from "classnames";
import {Paths} from "@/environment";

interface ProductMenuProps {
    menuItem:  menuItem | null
    changeActive: (e:number[])=>void
    active: number[]
}

export default function ProductMenu({  menuItem,changeActive,active}: ProductMenuProps) {

    return (
       <>
           <ul className={className('flex min-w-[200px] w-max flex-col gap-2 bg-white p-2 divide-y')}>
               {menuItem?.children?.map((child,key2)=>
                   <li key={child._id}
                       className='flex flex-col grow text-red-ehya p-2 relative'>
                       {/*<Link href={child.link??""} className=''>{child.item}</Link>*/}
                       <span className={"cursor-pointer text-xs"}>
                             {child.code?<Link href={ Paths.plp+child.code}>{child.item}</Link> : child.item}
                       </span>
                       <Visible visible={!!child?.children?.length}>
                           <ul className={className('flex w-full min-w-[200px] flex-col gap-2 py-2 divide-y')}>
                               {child?.children?.map((child2,key3)=><li
                                   key={key3}
                                   onMouseEnter={(e)=>{
                                       e.stopPropagation()
                                       changeActive([1,key2,key3])
                                   }}
                                   className='flex  gap-2 justify-between text-black-dark hover:text-red-ehya p-2 text-center group relative'>
                                   {/*<Link href={child2.link??""}>{child2.item}</Link>*/}
                                   <span className={"cursor-pointer"}>
                                        {child2.code?<Link href={ Paths.plp+child2.code}>{child2.item}</Link> : child2.item}
                                   </span>
                                   <Visible visible={!!child2?.children?.length}>
                                       <Icon name='arrow-left' color='fill-black-dark'/>
                                   </Visible>
                                   <Visible visible={!!child2?.children?.length && active[1]===key2 && active[2]===key3}>
                                       <ul className={className('absolute top-0 -left-full flex min-w-[200px] w-full flex-col gap-1 bg-white px-2 divide-y')}>
                                           {child2?.children?.map((child3,key4)=>
                                               <li key={child3._id}
                                                   className='text-black-dark text-sm hover:text-red-ehya pt-2 pb-1 px-2 last:pb-2 text-center group relative'>
                                                   {/*<Link href={child3.link??""}>{child3.item}</Link>*/}
                                                   <span className={"cursor-pointer text-xs"}>
                                                       {child3.code?<Link href={ Paths.plp+child3.code}>{child3.item}</Link> : child3.item}
                                                   </span>
                                               </li>)}
                                       </ul>
                                   </Visible>
                               </li>)}
                           </ul>
                       </Visible>

                   </li>)}
           </ul>




       </>
    )
}
