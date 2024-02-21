"use client"
import { isServer } from "@/lib/utils/utils-functions";
import { Children, FC, forwardRef, Fragment, memo, ReactNode } from "react";
import { Swiper as ReactSwiper, SwiperSlide as ReactSwiperSlide, SwiperProps } from "swiper/react";

type SwiperT = {
    children: ReactNode;
    SSRContent?: ReactNode;
    navigationElements?: JSX.Element;
    ref?: any;
} & SwiperProps;

const Swiper: FC<SwiperT> = forwardRef(({ children, navigationElements, SSRContent, ...props }, ref) => {
    if (isServer) {
        return <>{SSRContent}</>;
    } else {
        return (
            <ReactSwiper {...props} preloadImages={false} ref={ref as any}>
                {Children.map(children, (child, index) => (
                    <Fragment key={index}>
                        <ReactSwiperSlide>
                            {({ isActive }) => (
                                <div className="w-full" style={{ height: isActive ? "auto" : "0px" }}>
                                    {child}
                                </div>
                            )}
                        </ReactSwiperSlide>
                    </Fragment>
                ))}
                {navigationElements}
            </ReactSwiper>
        );
    }
});

Swiper.displayName = "Swiper";
export default memo(Swiper);
