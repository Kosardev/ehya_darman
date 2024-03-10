'use client'
import {Form, TextAreaLabelFloat} from "@/components/common/form";
import Button from "@/components/common/button";
import * as yup from "yup";
import {InputLabelFloat} from "@/components/common/form";
import ErrorField from "@/components/common/form/errorField";
import {contactForm} from "@/lib/types";
import {useState} from "react";
import {SubmitContactForm} from "@/application/contactUs";
const schema = yup.object().shape({
    fullName: yup
        .string()
        .required("وارد کردن  نام و نام خانوادگی اجباری است")
        .min(4,'حداقل تعداد کاراکتر ها 4 عدد است.'),
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
    companyName: yup
        .string()
        .required("وارد کردن نام شرکت اجباری است")
    ,
    description: yup
        .string()

    ,
});
export default function ContactForm() {
    const [form,setForm] = useState<contactForm>({
        fullName: "",
        phone: "",
        email: "",
        companyName: "",
        description: "",
    })
    const [error,setError] = useState<contactForm>({
        fullName: "",
        phone: "",
        email: "",
        companyName: "",
        description: "",
    })
    const submitData=async ()=>{
        const result = await SubmitContactForm(form)
        console.log("result",result)
        if(!result?.data?.error){

        }else{

        }
    }
    const submit =async (e) => {
        e.preventDefault()
        const validation = schema.validate(form,{abortEarly:false}).then(()=>{
            setError({
                fullName: "",
                phone: "",
                email: "",
                companyName: "",
                description: "",
            });
            console.log("start request",validation)
            submitData()
        }).catch((validationErrors)=>{
            const newErrorState = {};
            validationErrors.inner.forEach((error) => {
                newErrorState[error.path] = error.message;
            });
            setError(newErrorState as contactForm);
            console.log("Form data is invalid");
        })
        console.log("onSubmit",form);
    };
    return (
        <>
            <Form className="flex flex-col mt-[40px]" onSubmit={submit}>
                <div className={"w-full grid lg:grid-cols-2 gap-x-4 gap-y-8"}>
                    <div className="relative w-[300px] mb-4">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.fullName?"border-red-ehya" : " focus-within:border-primary-200 "}}

                            label="نام و نام خانوادگی خود را وارد کنید"
                            type={"text"}
                            value={form?.fullName??""}
                            onChange={e =>{
                                setForm({...form,fullName:e.target.value})
                                setError({...error,fullName:""})
                            }}

                        />
                        {error?.fullName &&<ErrorField error={error.fullName}/>}
                    </div>
                    <div className="relative w-[300px] mb-4">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.email?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label=" ایمیل خود را وارد کنید"
                            type={"text"}
                            value={form?.email??""}
                            onChange={e =>{
                                setForm({...form,email:e.target.value})
                                setError({...error,email:""})
                            }}

                        />
                        {error?.email &&<ErrorField error={error.email}/>}
                    </div>
                    <div className="relative w-[300px] mb-4">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.phone?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label=" شماره همراه خود را وارد کنید"
                            type={"tel"}
                            inputMode={"numeric"}
                            value={form?.phone??""}
                            onChange={e => {
                                setForm({...form, phone: e.target.value})
                                setError({...error,phone:""})
                            }}

                        />
                        {error?.phone &&<ErrorField error={error.phone}/>}
                    </div>
                    <div className="relative w-[300px] mb-4">
                        {/*<Selector*/}
                        {/*    onChange={(e) => {*/}
                        {/*        setForm({...form, city: e?.value??""})*/}
                        {/*        setError({...form,city:""})*/}
                        {/*    }}*/}
                        {/*    value={form?.city && cities?.length? cities?.find(element=>element?.value === form?.city)??null : null}*/}
                        {/*    title="شهر مورد نظر خود را انتخاب کنید"*/}
                        {/*    error={error?.city??""}*/}
                        {/*    options={cities}*/}
                        {/*    className={{ select: "!w-full" }}*/}
                        {/*    isRequired*/}
                        {/*    isFloat={true}*/}
                        {/* isMulti={false}/>*/}
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.companyName?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            label=" نام شرکت خود را وارد کنید"
                            type={"text"}
                            value={form?.companyName??""}
                            onChange={e => {
                                setForm({...form, companyName: e.target.value})
                                setError({...error,companyName:""})
                            }}

                        />
                        {error?.companyName &&<ErrorField error={error.companyName}/>}
                    </div>
                </div>
                <div className="relative mb-4 mt-8 w-full">
                    <TextAreaLabelFloat
                        classname={{textarea:'leading-[18px] xs:leading-5 !w-full', label:error?.description?"border-red-ehya" : " focus-within:border-primary-200 "}}
                        label="توضیحات خود را وارد کنید"
                        value={form?.description??""}
                        onChange={e => {
                            setForm({...form, description: e.target.value})
                            setError({...error,description:""})
                        }}
                    />
                    {/*<InputLabelFloat*/}
                    {/*    classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.description?"border-red-ehya" : " focus-within:border-primary-200 "}}*/}
                    {/*    label="توضیحات خود را وارد کنید"*/}
                    {/*    type="text"*/}
                    {/*    value={form?.description??""}*/}
                    {/*    onChange={e => {*/}
                    {/*        setForm({...form, description: e.target.value})*/}
                    {/*        setError({...error,description:""})*/}
                    {/*    }}*/}
                    {/*/>*/}
                    {error?.description &&<ErrorField error={error.description}/>}
                </div>
                <div className="xs:mt-8 gap-3 flex items-center justify-end">
                    <Button
                        className="!w-[200px] min-w-[200px]  font-medium !font-yekanBakh" fill={"fill"} size={"lg"}
                        type="submit">
                        <span className="pt-1 text-sm xl:text-base"> ارسال </span>
                    </Button>
                </div>
            </Form>
        </>
    )
}
