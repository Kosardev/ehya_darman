import { forwardRef } from "react";
import cn from "classnames";

type SwiperLeftArrowT = {
};

const SwiperLeftArrow = forwardRef(({ }: SwiperLeftArrowT, ref) => {
    return <div ref={ref as any} className={cn(`swiper-button-next`)}></div>;
});
SwiperLeftArrow.displayName = "SwiperLeftArrow";
export default SwiperLeftArrow;
