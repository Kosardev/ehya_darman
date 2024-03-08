import BaseContainer from "@/components/common/baseContainer";
import {getAboutUsInfo} from "@/application/aboutUs";
import AboutUsComponent from "@/components/aboutUs/AboutUsComponent";


export default async function AboutUsContent() {
    const data =await getAboutUsInfo()
    return (
        <BaseContainer>
            <AboutUsComponent data={data}/>
        </BaseContainer>
    )
}
