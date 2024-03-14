"use client"
import Image from "next/image";
import logo from "@/public/img/ehyaLogo.png";
import Link from "next/link";
import {ReactNode} from "react";
import {useCommon} from "@/lib/hooks/common";
import classNames from "classnames";
import Icon from "@/components/common/Icon";
import Visible from "@/components/common/visible";
import Loading from "@/components/common/loading";
import * as Path from "path";
import {Paths} from "@/environment";

type LayoutProps = {
    children: ReactNode;
};

export default function LoginLayout({ children }:LayoutProps) {
    const {snackBar} = useCommon()
    return (
        <>
            <div className={classNames("snackbar", { "snackbar-show":snackBar?.show })}>
                <p className="text-xs lg:text-base font-semiBold text-white">{snackBar?.message}</p>
                <Visible visible={snackBar?.icon !== undefined}>
                    <Icon name={snackBar?.icon} color="fill-white" />
                </Visible>
            </div>
            <div className={'w-full min-h-screen flex items-center justify-center flex-col'}>
                <div className={' w-full md:min-w-[400px] md:w-fit min-h-[430px] p-4 md:p-6  lg:border border-gray-form rounded-md flex flex-col items-center md:my-8'}>
                    <Link href={Paths.landing}>
                        <Image id='logo' src={logo} width={100} height={90}  alt={"احیا درمان"} className="w-14 object-contain"/>
                    </Link>
                    {children}
                </div>
            </div>
            <Loading/>
        </>
    )
}
