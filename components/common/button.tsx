import { ButtonHTMLAttributes ,ReactNode } from "react";
import classNames from "classnames";

interface ButtonT extends ButtonHTMLAttributes<HTMLButtonElement> {
    fill?: "fill" | "outline";
    children: ReactNode | string;
    size?: "xl" | "lg" | "md" | "sm" | "xs";
    disabled?: boolean;
}

export default function Button({ fill = "outline",children,size ,disabled,className,...props}:ButtonT){
    return (
        <button className={classNames('w-auto min-w-[50px] font-kalamehFa  ',{
            ' border border-2 border-red-ehya text-red-ehya ': fill==='outline',
            ' bg-red-ehya text-white ': fill==='fill',
            " h-[3.25rem] rounded-xl p-4": !size || size === "xl",
            " h-12 rounded-lg p-3": size === "lg",
            " h-10 rounded-md py-2 px-4": size === "md",
            " h-9 rounded-md py-2 px-4": size === "sm",
            " h-8 rounded py-1 px-3": size === "xs",
            grayscale: disabled,
            "cursor-pointer": !disabled,
            }, className,)}

            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};