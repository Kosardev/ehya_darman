"use client"
import Visible from "@/components/common/visible";
import BaseContainer from "@/components/common/baseContainer";
import Intro from "@/components/catalogues/Intro";
import FiguresDescription from "@/components/catalogues/FiguresDescription";
import Goals from "@/components/catalogues/goals";
import ThreeDWrapper from "@/components/catalogues/threeDWrapper";


export default function CatalogueComponent({ data }:any) {

    return (
        <>
            <BaseContainer size={"xl"}>
                <Intro data={data?.intro}/>
                <FiguresDescription data={data?.figures}/>
                <Visible visible={!!data?.goals}>
                    <Goals data={data?.goals}/>
                </Visible>
                <ThreeDWrapper/>
            </BaseContainer>
        </>
    )
}
