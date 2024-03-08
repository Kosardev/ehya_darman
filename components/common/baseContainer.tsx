"use client"
import {ReactNode,ReactElement,useMemo} from "react";
import {Size} from "@/lib/types";
import cn from "classnames";

type BaseContainerT = {
    children: ReactNode | ReactElement;
    size?: Size;
}

export default function BaseContainer({ size, children }:BaseContainerT) {
    const containerWidth = useMemo(
        () =>
            size === "lg"
                ? "max-w-screen-3xl"
                : size === "xl"
                    ? "max-w-screen-4xl"
                    : size === "md"
                        ? "max-w-screen-2xl"
                        : size === "sm"
                            ? "max-w-screen-xl"
                            : "xl:max-w-[1200px] 2xl:max-w-[1300px] 3xl:max-w-[1450px] xl:mx-auto",
        [size],
    );
    return (
        <div className={cn(
            `w-full 2lg:px-4 2xl:px-8 3xl:px-6 4xl:px-0 mx-auto`,
            containerWidth,
        )}>
            {children}
        </div>
    )
}
