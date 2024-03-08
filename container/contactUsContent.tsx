import {getCitiesAndBranches, getContactInfo} from "@/application/contactUs";
import BaseContainer from "@/components/common/baseContainer";
import {useState} from "react";
import ContactUsComponent from "@/components/contactUs/ContactUsComponent";


export default async function ContactUsContent() {
    const data =await getContactInfo()
    const citiesBranches =await getCitiesAndBranches()
    return (
        <BaseContainer>
            <ContactUsComponent data={data} citiesBranches={citiesBranches}/>
        </BaseContainer>
    )
}
