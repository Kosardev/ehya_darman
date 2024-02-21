import ScreenLayout from '@/app/(content)/layout'
import PlpContent from "@/container/plp/plpContent";
import {searchParamT} from "@/lib/types";


export default function Products({ params,searchParams}: { params: { code: string}, searchParams:searchParamT}) {

    return (
        <ScreenLayout>
            <PlpContent code={params.code} searchParams={searchParams}/>
        </ScreenLayout>
    )
}