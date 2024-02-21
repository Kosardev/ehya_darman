import ScreenLayout from '@/app/(content)/layout'
import Image from "next/image";
import logo from "@/public/img/ehyaLogo.png";
import Link from "next/link";
import {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
};

export default function LoginLayout({ children }:LayoutProps) {
    return (
        // <ScreenLayout>
            <div className={'w-full h-screen flex items-center justify-center flex-col'}>
                <div className={' w-full md:w-[400px] min-h-[430px] p-4 md:p-6  border border-gray-form rounded-md flex flex-col items-center'}>
                    <Link href='#'>
                        <Image id='logo' src={logo} width={100} height={90}  alt={"احیا درمان"} className="w-14 object-contain"/>
                    </Link>
                    {children}
                </div>
            </div>

        // </ScreenLayout>
    )
}
