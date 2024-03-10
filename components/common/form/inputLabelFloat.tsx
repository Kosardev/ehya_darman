"use client"
import React, { ChangeEvent, FC, ForwardedRef, InputHTMLAttributes, forwardRef, memo, useState } from "react";
import Input from "./input";

import cn from "classnames";
import { ClassName } from "@/lib/types";
import Icon from "../Icon";
import Visible from "@/components/common/visible";

type InputLabelFloatT = InputHTMLAttributes<HTMLInputElement> & {
    isRequired?: boolean;
    label: string;
    ref?: ForwardedRef<HTMLInputElement>;
    error?: boolean;
    touched?: boolean;
    errorMessage?: string | null;
    bgColor?: string;
    borderColor?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    autoFocus?:boolean;
    classname?: { [key in "label" | "input"]?: ClassName };
    savedPassword?: boolean;
    hide?:boolean
};

const InputLabelFloat = forwardRef(
    ({ isRequired, label, error, errorMessage, bgColor, onChange, maxLength ,touched, savedPassword, autoFocus , classname,hide,type, ...props }:InputLabelFloatT, ref: ForwardedRef<HTMLInputElement>) => {


        const [showContent, setShowContent] = useState(false);
        const handleClickShowPassword = () => {
            setShowContent(!showContent);
        }

        return (
            <label className={cn("input-label-float rounded-lg border border-gray-300 font-shabnam", {
                    "!border-red": error,
                },
                classname?.label,
                bgColor
            )}>
                <Input
                    inputHeight='xl'
                    ref={ref}
                    placeholder="نام کاربری"
                    autoFocus={autoFocus}
                    onChange={onChange}
                    touched={touched}
                    {...props}
                    className={cn(
                        "h-[46px] lg:h-[56px] !text-xs lg:!text-sm font-semiBold",
                        {
                            "bg-gray-100" : savedPassword,
                            "bg-transparent": !savedPassword
                        },
                        classname?.input
                    )}
                    maxLength={maxLength}
                    type={type?  (showContent? "text" :type): "text"}

                />
                <span className="flex items-center text-xs lg:text-sm font-medium text-gray-500 h-6">
                    <Visible visible={isRequired}>
                        <p className=" text-red-400 absolute -right-1.5">*</p>
                    </Visible>
                    {label}
                </span>
                <Visible visible={error && errorMessage !== null}>
                    <div>
                        <Icon name="error" color="fill-red" size="w-5 h-5 xl:w-6 xl:h-6" className={" absolute left-4 top-1/2 -translate-y-1/2"} />
                        <p className=" absolute px-4 pt-1 lg:pt-1.5 text-xs font-semiBold text-red  lg:font-medium">
                            {errorMessage}
                        </p>
                    </div>
                </Visible>
                <Visible visible={type ==='password'}>
                    <div className="absolute left-0 w-[52px] h-full z-50 top-0 flex justify-center items-center" onClick={handleClickShowPassword}>
                        <Icon name={showContent?"eye": 'eye-slash'} color="fill-gray-800" size='w-5 h-5' className={cn("block",{"!hidden":error})} />
                    </div>
                </Visible>
            </label>
        );
    },
);

InputLabelFloat.displayName = "InputLabelFloat"

export default memo(InputLabelFloat);
