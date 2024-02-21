'use client'
import { Form } from "@/components/common/form";
import Button from "@/components/common/button";
import { useForm } from "react-hook-form";
import {InputLabelFloat} from "@/components/common/form";
import persianJs from 'persianjs';
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import Icon from "@/components/common/Icon";
type formValues = {
    password: string;
    username: string;
};

export default function Login() {

    return (
        <>
            <h1 className={'text-base font-medium leading-5 xs:text-[22px] xs:leading-6 font-yekanBakh w-full text-right mt-4 mb-[55px] xs:mb-[50px]' }>ورود</h1>

        </>
    )
}
