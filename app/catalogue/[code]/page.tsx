import ScreenLayout from '@/app/(content)/layout'
import CatalogueContent from "@/container/catalogues/catalogueContent";


export default function CataloguePage({ params }: { params: { code: string } }) {
    return (
        <ScreenLayout>
            <CatalogueContent code={params.code}/>
        </ScreenLayout>
    )
}