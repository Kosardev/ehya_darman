import {getProductPage} from "@/application/product";
import PdpComponent from "@/components/pdp/pdpComponent";

export default async function PdpContent({ code }:{code: string}) {
    const data = await getProductPage({code})

    return (
        <>
            <PdpComponent data={data}/>
        </>
    )
}
