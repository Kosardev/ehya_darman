import cn from "classnames";
import { FC, memo, forwardRef, ForwardedRef, TextareaHTMLAttributes } from "react";

interface TextAreaT extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    ref?: ForwardedRef<HTMLTextAreaElement>;
    height?: "xl" | "lg" | "md" | "sm" | "xs";
    disabled?: boolean;
}

const TextArea = forwardRef(({ className, height, disabled, ...props }:TextAreaT, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <textarea
            className={cn([
                "p-4 lg:!p-[22px] w-full h-full outline-none placeholder-gray !caret-primary-200 text-gray-700 font-shabnam ",
                {
                    "!bg-gray-100 !text-gray-600": !!disabled,
                    "cursor-text": !disabled,
                },
                className,
            ])}
            {...props}
            ref={ref}
        />
    );
});
TextArea.displayName = "CustomTextArea";
export default memo(TextArea);
