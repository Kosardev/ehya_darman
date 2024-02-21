import TopHeader from './topHeader'
import Navbar from './navbar'
import {HeaderT} from "@/lib/types";
import {getHeader} from "@/application/header";
import cn from "classnames"

interface IHeader {
    transparentHeader?:boolean
};

export default async function Header({transparentHeader}:IHeader) {
    const data : HeaderT | null = await getHeader()
    return (
        <header className={cn('w-full font-iransans font-regular group  ',{
            ' absolute z-10 bg-gradient-to-b from-black-850  to-transparent ': !!transparentHeader
        })}>
            <TopHeader transparentHeader={!!transparentHeader}/>
            <Navbar menu={data}  transparentHeader={!!transparentHeader}/>
        </header>
    )
}