"use client"
import BaseContainer from "@/components/common/baseContainer";
import {Svgs} from "@/components/common/SVGs";
import Image from "@/components/common/Image";
import Icon from "@/components/common/Icon";
import {useEffect, useRef, useState} from "react";
import {
    branchCityItem,
    branchItem,
    Icons
} from "@/lib/types";
import ContactForm from "@/components/contactUs/contactForm";
import {AboutUsType} from "@/lib/types/aboutUs";

type ContactUsWrapperT = {
    data?:AboutUsType|null;
};

export default function AboutUsComponent({data,citiesBranches}:ContactUsWrapperT) {
    const [branchOpen,setBranchOpen] = useState<boolean>(false)
    const [selectedBranch,setSelectedBranch] = useState<branchCityItem>(null)
    const branchesRef = useRef(null)
    return (
        <BaseContainer>
            <h1 className={"w-full text-black-2 font-shabnam font-bold text-xl my-[60px]"}>با ما در تماس باشید</h1>
            hello world

        </BaseContainer>
    )
}

