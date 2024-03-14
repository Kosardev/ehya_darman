import Image from "@/components/common/Image";
import Infinity from "@/public/img/Infinity-1s-200px.svg";
import {useCommon} from "@/lib/hooks/common";
import className from "classnames";
export default function Loading() {
    const {loading} = useCommon()
    if(loading?.show){
        return (

            <div className={className('flex w-full h-screen flex-col gap-2 justify-center items-center fixed top-0 left-0 bg-black bg-opacity-40 z-[100] ')}>
                <div className={"w-[250px] h-[150px] bg-white shadow-box rounded p-2 flex flex-col justify-center items-center [&>p]:pb-5"}>
                    <Image src={Infinity} alt={'loading'} width={200} height={200}/>
                    <p>لطفا منتظر بمانید...</p>
                </div>
            </div>
        )
    }else{
        return <></>
    }

}