import cn from "classnames";
import { FC, InputHTMLAttributes, memo, forwardRef, LegacyRef, useEffect, useState } from "react";
import { IVoidFn } from "@/lib/BaseModels";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    ref?: any;
    inputHeight?: "xl" | "lg" | "md" | "sm" | "xs";
    disabled?: boolean;
    autoFocus?: boolean
    onEnterPress?: IVoidFn
    touched?: boolean
}

const Input: FC<IInput> = forwardRef(({ className, inputHeight, disabled, touched, onEnterPress , autoFocus, ...props }, ref) => {

    return (
        <input
            className={cn([
                "xl:py-1 w-full outline-none placeholder-gray !caret-primary-200 text-gray-700 font-shabnam ",
                {
                    "h-12 xl:h-[3.5rem] rounded-lg px-4 lg:!px-[22px]": inputHeight === "xl",
                    "h-12 rounded-lg px-4": inputHeight === "lg",
                    "h-9 rounded-md px-4": !inputHeight || inputHeight === "md",
                    "h-8 rounded-md px-4": inputHeight === "sm",
                    "h-7 rounded px-3": inputHeight === "xs",
                    "!bg-gray-100 !text-gray-600": !!disabled,
                    "cursor-text": !disabled,
                    "bg-transparent": !!touched
                },
                className,
            ])}
            autoFocus={autoFocus}
            {...props}
            disabled={disabled}
            onKeyUp={(e) => {
                if(e.key === "Enter")
                    onEnterPress?.()
            }}
            ref={ref as LegacyRef<HTMLInputElement>}
        />
    );
});

Input.displayName = "CustomInput";

export default memo(Input);
