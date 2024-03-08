'use client'
import { Form } from "@/components/common/form";
import Button from "@/components/common/button";
import * as yup from "yup";
import {InputLabelFloat} from "@/components/common/form";
import ErrorField from "@/components/common/form/errorField";
import {signUp} from "@/lib/types/account";
import {Scalars} from "@/lib/types";
import {useState} from "react";
type formValues = signUp &{
    confirmPassword: Scalars["String"]
};
const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("وارد کردن  نام  اجباری است")
        .min(2,'حداقل تعداد کاراکتر ها 2 عدد است.'),
    lastName: yup
        .string()
        .required("وارد کردن  نام خانوادگی  اجباری است")
        .min(2,'حداقل تعداد کاراکتر ها 2 عدد است.'),
    phone: yup
        .string()
        .required("وارد کردن شماره همراه اجباری است")
        .matches(
            /^09\d{9}$/,
            "فرمت وارد شده برای شماره همراه نامعتبر است"
        ),
    email: yup
        .string()
        .required("وارد کردن ایمیل اجباری است")
        .email("فرمت ایمیل وارد شده نامعتبر است"),
    password: yup
        .string()
        .required("وارد کردن  رمز عبور اجباری است")
    ,
    confirmPassword: yup
        .string()
        .required("وارد کردن  رمز عبور اجباری است")
        .oneOf([yup.ref('password')], 'تکرار رمز عبور باید با رمز عبور یکسان باشد')
    ,
});
export default function SignupPage() {
    const [form,setForm] = useState<formValues>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error,setError] = useState<formValues>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const submitData =async () => {
        // try {
        //     // const result =
        // }
    }
    const submit =async (e) => {
        e.preventDefault()
        const validation = schema.validate(form,{abortEarly:false}).then(()=>{
            setError({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            console.log("start request")
            submitData()
        }).catch((validationErrors)=>{
            const newErrorState = {};
            validationErrors.inner.forEach((error) => {
                newErrorState[error.path] = error.message;
            });
            setError(newErrorState as formValues);
            console.log("Form data is invalid");
        })
        console.log("onSubmit",form);
    };
    return (
        <>
            <h1 className="flex items-center font-yekanBakh mt-4 mb-[55px] xs:mb-[50px] ">
                <span className="text-base font-medium leading-5 xs:text-[22px] xs:leading-6">ثبت نام</span></h1>
            <Form className=" w-full flex flex-col" onSubmit={submit}>
                <div className={"w-full grid lg:grid-cols-2 gap-x-4 gap-y-8"}>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.firstName?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            autoFocus={true}
                            label="نام خود را وارد کنید"
                            type={"text"}
                            value={form?.firstName??""}
                            onChange={e =>{
                                setForm({...form,firstName:e.target.value})
                                setError({...form,firstName:""})
                            }}

                        />
                        {error?.firstName &&<ErrorField error={error.firstName}/>}
                    </div>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.lastName?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label="نام خانوادگی خود را وارد کنید"
                            type={"text"}
                            value={form?.lastName??""}
                            onChange={e => {
                                setForm({...form, lastName: e.target.value})
                                setError({...form,lastName:""})
                            }}
                        />
                        {error?.lastName &&<ErrorField error={error.lastName}/>}
                    </div>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.phone?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label=" شماره همراه خود را وارد کنید"
                            type={"tel"}
                            inputMode={"numeric"}
                            value={form?.phone??""}
                            onChange={e => {
                                setForm({...form, phone: e.target.value})
                                setError({...form,phone:""})
                            }}

                        />
                        {error?.phone &&<ErrorField error={error.phone}/>}
                    </div>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.email?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label=" ایمیل خود را وارد کنید"
                            type={"text"}
                            value={form?.email??""}
                            onChange={e =>{
                                setForm({...form,email:e.target.value})
                                setError({...form,email:""})
                            }}

                        />
                        {error?.email &&<ErrorField error={error.email}/>}
                    </div>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label: error?.password?"border-red-ehya" :" focus-within:border-primary-200 "}}
                            label="رمز عبور خود را وارد کنید"
                            type="password"
                            value={form?.password??""}
                            onChange={e => {
                                setForm({...form, password: e.target.value})
                                setError({...form,password:""})
                            }}

                        />
                        {error?.password &&<ErrorField error={error.password}/>}
                    </div>
                    <div className="relative mb-[30px]">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.confirmPassword?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label="تکرار رمز عبور خود را وارد کنید"
                            type="password"
                            value={form?.confirmPassword??""}
                            onChange={e => {
                                setForm({...form, confirmPassword: e.target.value})
                                setError({...form,confirmPassword:""})
                            }}
                        />
                        {error?.confirmPassword &&<ErrorField error={error.confirmPassword}/>}
                    </div>
                </div>
                    <div className="fixed inset-x-6 bottom-4 flex flex-col items-center  xs:relative xs:inset-x-[unset] xs:bottom-[unset] xs:mt-[52px] gap-3">
                        {/*<input type="submit"  value={"submit"}/>*/}
                        <Button
                            className="w-full font-medium !font-yekanBakh" fill={"fill"} size={"lg"}
                            type="submit">
                            <span className="pt-1 text-sm xl:text-base">  ثبت نام </span>
                        </Button>
                    </div>
            </Form>
        </>
    )
}
