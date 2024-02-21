import { forwardRef } from "react";

import cn from "classnames";
import SwiperLeftArrow from "@/components/common/Swiper/SwiperLeftArrow";

type SwiperRightArrowT = {
};

const SwiperRightArrow = forwardRef(({ }: SwiperRightArrowT, ref) => {
    return <div ref={ref as any} className={cn(`swiper-button-prev`)}></div>;
});
SwiperRightArrow.displayName = "SwiperRightArrow";
export default SwiperRightArrow;
