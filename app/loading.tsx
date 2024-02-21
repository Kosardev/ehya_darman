// export default function Loading() {
//     // Or a custom loading skeleton components
//     return <p>Loading...</p>
// }

import Image from "@/components/common/Image";
import Infinity from "@/public/img/Infinity-1s-200px.svg";
export default function Loading() {
    // Or a custom loading skeleton components
    return <div className='flex w-full h-screen flex-col gap-2 justify-center items-center'>
        <Image src={Infinity} alt={'loading'} width={200} height={200}/>
        <p>لطفا منتظر بمانید...</p>
    </div>
}