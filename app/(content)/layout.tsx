import React, { ReactNode } from "react";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer";
import CFooter from "@/components/common/footer";


type ScreenLayoutT = {
    children?: ReactNode;
    transparentHeader?:boolean
};

export default function ScreenLayout({ children,transparentHeader }:ScreenLayoutT){

    return (
        <>
          <Header transparentHeader={!!transparentHeader} />
            <main
                className={'w-full '}>
                {children}
            </main>
          <CFooter />
        </>
    );
};


