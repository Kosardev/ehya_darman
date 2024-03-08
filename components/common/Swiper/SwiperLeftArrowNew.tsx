import cn from "classnames";
import { forwardRef } from "react";
import Icon from "../Icon";
import { ClassName } from "@/lib/types";

type SwiperLeftArrowNewT = {
    className?:ClassName
};
const SwiperLeftArrowNew =forwardRef(({className}:SwiperLeftArrowNewT ,ref) => {
    return <div className={cn(`group next-button-swiper-new` , className)} ref={ref as any}>
        <Icon name="arrowPrev" color={'fill-red-ehya group-hover:fill-white'} className={"bg-white group-hover:bg-red-ehya"} size={'w-10 h-10 3xl:w-16 3xl:h-16'}/>
    </div>;
});
SwiperLeftArrowNew.displayName = "SwiperLeftArrowNew";
export default SwiperLeftArrowNew;
