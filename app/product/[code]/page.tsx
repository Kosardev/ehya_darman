import ScreenLayout from '@/app/(content)/layout'
import PdpContent from "@/container/pdp/pdpContent";


export default function Product({ params }: { params: { code: string } }) {
    return (
        <ScreenLayout>
            <PdpContent code={params.code}/>
        </ScreenLayout>
    )
}