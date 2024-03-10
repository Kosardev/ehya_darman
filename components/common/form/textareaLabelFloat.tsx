import React, { FC, ForwardedRef, forwardRef, memo } from "react";
import Visible from "@/components/common/visible";
import TextArea from "@/components/common/form/textare";
import cn from "classnames";
import {ClassName} from "@/lib/types";

type TextAreaLabelFloatT = {
    isRequired?: boolean;
    label: string;
    ref?: ForwardedRef<HTMLTextAreaElement>;
    onChange?: (e: any) => void;
    maxLength?: number;
    value?:any;
    bgColor?: string;
    error?: boolean;
    classname?: { [key in "label" | "textarea"]?: ClassName };
};

const TextAreaLabelFloat = forwardRef(
    ({ isRequired, label, onChange, maxLength , value,error,bgColor,classname}:TextAreaLabelFloatT, ref:ForwardedRef<HTMLTextAreaElement>=null) => {
        return (
            <label className={cn("textarea-label-float rounded-lg border border-gray-300 font-yekanBakh h-28 ", {
                    "!border-red": error,
                },
                classname?.label,
                bgColor
            )}>
                <TextArea
                    className={cn("resize-none !text-xs lg:!text-sm font-semiBold rounded-lg ",classname?.textarea)}
                    ref={ref}
                    placeholder={label}
                    onChange={onChange}
                    maxLength={maxLength}
                    value={value}
                />
                <span className="flex items-center text-xs lg:text-sm font-medium text-gray-500 h-6">
                    <Visible visible={isRequired}>
                        <p className=" text-red-400 absolute -right-1.5">*</p>
                    </Visible>
                    {label}
                </span>
            </label>
        );
    },
);

TextAreaLabelFloat.displayName = "TextAreaLabelFloat"

export default memo(TextAreaLabelFloat);
