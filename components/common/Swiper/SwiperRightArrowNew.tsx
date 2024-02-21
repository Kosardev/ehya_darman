import cn from "classnames";
import { forwardRef } from "react";
import Icon from "../Icon";
import { ClassName } from "@/lib/types";
import SwiperLeftArrow from "@/components/common/Swiper/SwiperLeftArrow";
type SwiperRightArrowNewT = {
    className?:ClassName
}
const SwiperRightArrowNew = forwardRef(({className}:SwiperRightArrowNewT , ref) => {
    return <div className={cn(`group prev-button-swiper-new` , className)} ref={ref as any}>
        <Icon name="arrowPrev2" color={'fill-red-ehya group-hover:fill-white'}  className={"bg-white group-hover:bg-red-ehya rotate-180"} size={'w-10 h-10 3xl:w-16 3xl:h-16'} />
    </div>;
});
SwiperRightArrowNew.displayName = "SwiperRightArrowNew";

export default SwiperRightArrowNew;
