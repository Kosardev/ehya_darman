'use client'
import BaseContainer from "@/components/common/baseContainer";
import Search from "@/components/common/search";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import logo from "@/public/img/ehyaLogo.png";
import {HeaderT} from "@/lib/types";
import Visible from "@/components/common/visible";
import{useState} from "react";
import className from "classnames";
import ProductMenu from "@/components/common/header/productMenu";
import classNames from "classnames";

interface NavbarProps {
    menu: HeaderT | null;
    transparentHeader?:boolean
}

export default function Navbar({ menu,transparentHeader}: NavbarProps) {
    const [activeMenu,setActiveMenu] = useState<number[]>([])
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false)

    return (
       <div className={'group-hover:bg-white '}>
           <BaseContainer>
               <nav  className={className('flex pt-2 px-2 lg:px-0 lg:pt-4 justify-between lg:justify-start lg:gap-24 items-stretch',{
                   "text-white " : !!transparentHeader
               })}>
                   <Icon onClick={()=>{setShowMobileMenu(true)}}
                         name="hamburger-menu" className='flex items-center justify-center lg:hidden'
                         color={!!transparentHeader ? "fill-white group-hover:fill-red-ehya" : "fill-black"}/>

                   <Link href='#' className={'flex items-center justify-center pb-2 lg:pb-4'}>
                       <Image id='logo' src={logo} width={55} height={50}  alt={"احیا درمان"} className="w-10 lg:w-14 object-contain"/>
                   </Link>
                   <ul  className={className('hidden lg:flex items-stretch gap-0.5 grow',{
                       " text-white  group-hover:text-black-dark": !!transparentHeader
                   })}>
                       {menu?.items?.map((menuItem,key)=>
                           <li key={menuItem._id}
                               onMouseEnter={()=>{
                                    setActiveMenu([key,0])
                               }}
                               onMouseLeave={()=>{
                                   setActiveMenu([])}}
                               // className={classNames('flex justify-center items-center relative after:content-[""] after:w-full after:h-0.5 after:absolute after:bottom-0 px-4 pb-4 hover:after:bg-red-ehya', {
                               //     'text-red': menuItem.item === "RESMED"
                               // })}>
                               className={classNames('flex justify-center items-center relative after:content-[""] after:w-full after:h-0.5 after:absolute after:bottom-0 px-4 pb-4 hover:after:bg-red-ehya', {
                                   'red-tag': menuItem.item === "RESMED" // Add this line
                               })}>
                                {/*className='flex justify-center items-center relative after:content-[""] after:w-full after:h-0.5 after:absolute after:bottom-0 px-4 pb-4 hover:after:bg-red-ehya '>*/}
                               <Link href={menuItem.link??""}>{menuItem.item}</Link>
                               <Visible visible={!!menuItem.children?.length}>
                                   <div className={className('min-w-[200px] bg-white absolute -right-1/2 top-full divide-x divide-x-2 rounded-b-md  z-10 ',{
                                       'flex ' : key===activeMenu[0],
                                       'hidden' : key!==activeMenu[0]
                                   })}>
                                       <Visible visible={key===1}>
                                           <ProductMenu
                                               changeActive={(e:number[])=> {
                                                   setActiveMenu(e)
                                               }}
                                               active={activeMenu}
                                               menuItem={menuItem}
                                           />
                                       </Visible>
                                       <Visible visible={key!==1}>
                                           <ul className={className('flex min-w-[200px] w-max flex-col gap-2 bg-white p-2 divide-y')}>
                                               {menuItem?.children?.map((child,key2)=>
                                                   <li key={child._id}
                                                       onMouseEnter={(e)=>{
                                                           e.stopPropagation()
                                                           setActiveMenu([key,key2])
                                                       }}
                                                       className='flex grow gap-2 justify-between text-black-dark hover:text-red-ehya p-2 text-center relative'>
                                                       <Link href={child.link??""} >{child.item}</Link>
                                                       <Visible visible={!!child?.children?.length}>
                                                           <Icon name='arrow-left' color='fill-black-dark'/>
                                                       </Visible>
                                                       <Visible visible={!!child?.children?.length && activeMenu[1]===key2}>
                                                           <ul className={className('absolute w-full -left-full top-0 flex min-w-[200px] flex-col gap-2 bg-white p-2 divide-y')}>
                                                               {child?.children?.map((child2,key3)=>
                                                                   <li key={child2._id}
                                                                       onMouseEnter={(e)=>{
                                                                           e.stopPropagation()
                                                                           setActiveMenu([activeMenu[0],activeMenu[1],key3])

                                                                       }}
                                                                       className='flex  gap-2 justify-between text-black-dark hover:text-red-ehya p-2 text-center group relative'>
                                                                       <Link href={child2.link??""}>{child2.item}</Link>
                                                                       <Visible visible={!!child2?.children?.length}>
                                                                           <Icon name='arrow-left' color='fill-black-dark'/>
                                                                       </Visible>
                                                                       <Visible visible={!!child2?.children?.length && activeMenu[2]===key3}>
                                                                           <ul className={className('absolute top-0 w-full -left-full flex min-w-[200px] flex-col gap-2 bg-white p-2 divide-y')}>
                                                                               {child2?.children?.map((child3,key4)=>
                                                                                   <li key={child3._id}
                                                                                       className='text-black-dark hover:text-red-ehya p-2 text-center group relative'>
                                                                                       <Link href={child3.link??""}>{child3.item}</Link>
                                                                                   </li>)}
                                                                           </ul>
                                                                       </Visible>
                                                                   </li>)}
                                                           </ul>
                                                       </Visible>
                                                   </li>)}
                                           </ul>

                                       </Visible>
                                   </div>
                               </Visible>
                           </li>
                       )}
                   </ul>
                   <div className='flex items-center gap-3 pb-2 lg:gap-6 lg:pb-4'>
                       <Search transparentHeader={!!transparentHeader}/>
                       <Link className='flex items-center justify-center' href='#'><Icon name="user-bold" size="w-4 h-4 lg:w-8 lg:h-8" color={transparentHeader ? "fill-white group-hover:fill-red-ehya":"fill-black"}/></Link>
                   </div>
               </nav>
           </BaseContainer>
           <div className={className(
               "invisible opacity-0 -right-full fixed w-full bg-white h-screen overflow-auto py-10 lg:hidden top-0 transition-[right] duration-300 ",
               {'!visible !opacity-100 !right-0':showMobileMenu,})}>
               <Icon onClick={()=>{setShowMobileMenu(false)}}
                     name="cancel"
                     className='fixed top-2 left-2'
                     color="fill-red-ehya"/>

               <ul  className={'flex flex-col gap-0.5 text-black-dark group-hover:text-red-ehya '}>
                   {menu?.items?.map((menuItem,key)=>
                       <li key={menuItem._id}
                           onClick={()=>{
                               if(key===activeMenu[0]){
                                   setActiveMenu([])
                               }else{
                                   setActiveMenu([key])
                               }
                           }}
                           className='flex flex-col relative'>
                           <div className='flex justify-between pr-6 pl-4 py-2 '>
                               <Link href={menuItem.link??""}>
                                   {menuItem.item}
                               </Link>
                               <Visible  visible={!!menuItem.children?.length}>
                                   <Icon name='arrow-left' color='fill-black-dark'
                                         className={className({'-rotate-90':key===activeMenu[0]})} size='w-6 h-6'/>
                               </Visible>
                           </div>
                           <Visible visible={!!menuItem.children?.length}>
                               <ul className={className('flex flex-col gap-2 h-0 bg-red-light  overflow-hidden',{
                                   'h-max ' : key===activeMenu[0],
                                   'h-0' : key!==activeMenu[0]
                               })}>
                                   {menuItem?.children?.map((firstIndent,key2)=>
                                       <li key={firstIndent._id}
                                           onClick={(e)=> {
                                               e.stopPropagation()
                                               if(key===activeMenu[0] && key2===activeMenu[1]){
                                                   setActiveMenu([key])
                                               }else{
                                                   setActiveMenu([key,key2])
                                               }
                                           }}
                                           className='text-black-dark hover:text-red-ehya pr-10 pl-8 py-2 relative'>
                                           <div className='flex justify-between  '>
                                               <Link href={firstIndent.link??""} >{firstIndent.item}</Link>
                                               <Visible  visible={!!firstIndent?.children?.length}>
                                                   <Icon name='arrow-left' color='fill-black-dark'
                                                         className={className({'-rotate-90':key===activeMenu[0] && key2===activeMenu[1]})} size='w-6 h-6'/>
                                               </Visible>
                                           </div>
                                           <Visible visible={!!firstIndent?.children?.length}>
                                               <ul className={className(' flex flex-col gap-2 my-2 pr-4 pl-2 border-r border-gray-a5 h-0 overflow-hidden',{
                                                   'h-max' : key===activeMenu[0] && key2===activeMenu[1]  ,
                                                   'h-0' : key2!==activeMenu[1] || key!==activeMenu[0]
                                               })}>
                                                   {firstIndent?.children?.map((secondIndent,key3)=>
                                                       <li key={secondIndent._id}
                                                           className='text-black-dark hover:text-red-ehya pr-6 pl-4 py-1.5 group relative'>
                                                           <Link href={secondIndent.link??""}>{secondIndent.item}</Link>
                                                       </li>)}
                                               </ul>
                                           </Visible>
                                       </li>)}
                               </ul>
                           </Visible>
                       </li>
                   )}
               </ul>
           </div>
       </div>
    )
}
