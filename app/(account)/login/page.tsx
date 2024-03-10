'use client'
import {Form, InputLabelFloat} from "@/components/common/form";

type formValues = {
    password: string;
    username: string;
};
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/common/button";
import Link from "@/components/common/Link";
import { useRouter } from 'next/navigation'
import {Paths} from "@/environment";
import ErrorField from "@/components/common/form/errorField";

interface IFormInput {
    username: string;
    password: string;
}

const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, "حداقل 3 کاراکتر")
        .max(32, "حداکثر 32 کاراکتر")
        .required("فیلد نام کاربری اجباری است"),
    password: yup
        .string()
        .min(11, "حداقل 11 کاراکتر")
        .max(13, "حداکثر 13 کاراکتر")
        .required("فیلد رمزعبور اجباری است"),
});
export default function Login() {
    const router = useRouter()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });
    const submit= async () => {
        // try {
        //     console.log("submit", data);
            // const response = await addCompany({
            //     name: data.name,
            //     phone: data.phone,
            // });
            // console.log(response);
            // if (!response.error) {
            //     success(response.msg);
            //     dispatch(
            //         fetchCompanyList({ filter: {
            //                 limit: paginationCtx?.limit ?? Constants.Limit,
            //                 skip: paginationCtx?.skip ?? 0,
            //             } })
            //     );
            //     handleClose();
        //     } else {
        //         toast(response.msg);
        //     }
        // } catch (e) {
        //     console.log(e);
        //     toast((e as IError).message);
        // }
        // LoadEnd()
    };
    return (
        <>


        </>
    )
}
