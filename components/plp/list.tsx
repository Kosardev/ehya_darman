"use client"
import {useEffect, useState, useRef, useCallback} from "react"
import Card from "@/components/plp/Card";
import {productList, searchParamT} from "@/lib/types";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {getProductList} from "@/application/list";
import {DefaultPagination} from "@/components/plp/pagination";

type plpListT={
    list?: productList[],
    code?: string,
    totalCount?: number
}

export default async function PlpList({ list ,code,totalCount}: plpListT) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [skip, setSkip] = useState(Number(searchParams.get('skip'))??0);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<productList[]>(list??[]);
    const sentinelRef = useRef(null);

    const handlePageChange=async (index:number)=>{
        setLoading(true);
        try {
            const newData = await getProductList({ code:code, skip:index, limit:Number(searchParams.get('limit'))??12 });
            let newList = newData?.productsData?.[0]?.products??[]
            setData(prevData => [...prevData, ...newList]);
            setSkip( index); // Update skip in state
            router.push(pathname + '?' + createQueryString('skip', String(index)))
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    return (
        <>
            <div className={"w-full flex flex-wrap gap-x-4 gap-y-8  justify-center lg:justify-start 3xl:gap-x-[42px] mb-8 px-4 xl:px-1 2xl:px-0 plpContainer"}>
                {data?.map((product,index)=><Card data={product??{}} key={index}/>)}
            </div>
            <DefaultPagination currentPage={skip}  totalCount={totalCount??0} productsPerPage={12} onPageChange={handlePageChange}/>
        </>

    )
}
