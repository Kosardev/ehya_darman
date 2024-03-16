'use client'
import {Form, InputLabelFloat} from "@/components/common/form";
import * as yup from "yup";
import Button from "@/components/common/button";
import { useRouter } from 'next/navigation'
import {Paths} from "@/environment";
import ErrorField from "@/components/common/form/errorField";
import {useCommon} from "@/lib/hooks/common";
import {useState} from "react";
import {Login} from "@/application/account";
import {ValidationError} from "yup";
import {TLogin} from "@/lib/types/account";

const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, "حداقل 3 کاراکتر")
        .max(32, "حداکثر 32 کاراکتر")
        .required("فیلد نام کاربری اجباری است"),
    password: yup
        .string()
        .min(3, "حداقل 3 کاراکتر")
        .max(13, "حداکثر 13 کاراکتر")
        .required("فیلد رمزعبور اجباری است"),
});
export default function LoginPage() {
    const {setSnackBar,setLoading} = useCommon()
    const [loginStep,setLoginStep] = useState<number>(0)
    const [form,setForm] = useState<TLogin>({
        username:"",
        password:""
    })
    const [error,setError] = useState<TLogin>({
        username:"",
        password:""
    })
    const router = useRouter()
    const submitData =async () => {
        setLoading({show:true})
        try {
            const result = await Login(form)

            if(result?.status ===200){
                router.replace(Paths.landing)
                // setSnackBar({show:true,message:result?.data?.message??" ثبت نام شما با موفقیت انجام شد",error:false,icon:""})
            }else {
                setSnackBar({show:true,message:result?.data?.message??" عملیات با خطا مواجه شد",error:false,icon:""})
            }
        }catch (error){

            setSnackBar({show:true,message:error?.response?.data?.message??" عملیات با خطا مواجه شد",error:false,icon:""})
            // if (error?.response && error?.response?.status === 401) {
            //     set
            // }
        }
        setLoading({show:false})

    }
    const submit =async (e:any) => {
        e.preventDefault()
        if(loginStep ===0){
            setLoginStep(1)
        }else if(loginStep===1){
            const validation = schema.validate(form,{abortEarly:false}).then(()=>{
                setError({
                    username:"",password:""
                });
                submitData()
            }).catch((validationErrors)=>{
                const newErrorState = {};
                validationErrors.inner.forEach((error:ValidationError) => {
                    if(newErrorState as any)
                        newErrorState[error?.path??'0'] = error.message;
                });
                setError(newErrorState as TLogin);
            })
        }else {

        }


    };
    return (
        <>
            <h1 className="flex items-center font-yekanBakh mt-4 mb-[55px] xs:mb-[50px] ">
                <span className="text-base font-medium leading-5 xs:text-[22px] xs:leading-6"> ورود</span></h1>
            <Form className=" w-full flex flex-col gap-y-8" onSubmit={submit}>
                {loginStep ===0 ?
                    <div className="relative mb-4">
                        <InputLabelFloat
                            classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.username?"border-red-ehya" : " focus-within:border-primary-200 "}}
                            autoFocus={true}
                            label="شماره همراه خود را وارد کنید"
                            type={"text"}
                            value={form?.username??""}
                            onChange={e =>{
                                setForm({...form,username:e.target.value})
                                setError({...error,username:""})
                            }}
                        />
                        {error?.username &&<ErrorField error={error.username}/>}
                    </div> : loginStep===1 ?
                        <div className="relative mb-4">
                            <InputLabelFloat
                                classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.password?"border-red-ehya" : " focus-within:border-primary-200 "}}
                                autoFocus={true}
                                label="رمز عبور را وارد کنید"
                                type={"text"}
                                value={form?.password??""}
                                onChange={e =>{
                                    setForm({...form,password:e.target.value})
                                    setError({...error,password:""})
                                }}

                            />
                            {error?.password &&<ErrorField error={error.password}/>}
                        </div> :
                        <div className="relative mb-4">
                            <InputLabelFloat
                                classname={{input:'leading-[18px] xs:leading-5 !w-full', label:error?.password?"border-red-ehya" : " focus-within:border-primary-200 "}}
                                autoFocus={true}
                                label="رمز عبور را وارد کنید"
                                type={"text"}
                                value={form?.password??""}
                                onChange={e =>{
                                    setForm({...form,password:e.target.value})
                                    setError({...error,password:""})
                                }}

                            />
                            {error?.password &&<ErrorField error={error.password}/>}
                        </div>
                }


                {/*//relative flex w-full items-center justify-center transition-all h-[44px] bg-primary-100 border-2 border-primary-100 rounded-[8px]*/}
                <div className="fixed inset-x-6 bottom-4 flex flex-col items-center  xs:relative xs:inset-x-[unset] xs:bottom-[unset] xs:mt-[52px] gap-3">
                    <Button
                        className="w-full font-medium !font-yekanBakh" fill={"fill"} size={"lg"}
                        type="submit">
                        <span className="pt-1 text-sm xl:text-base">ورود </span>
                    </Button>
                    {loginStep===1 ?
                        <Button fill={"outline"} size={"lg"} className={"mt-3 w-full  font-medium !font-yekanBakh"} onClick={()=>setLoginStep(2)}>
                            <span className="pt-1 text-sm xl:text-base">ورود با رمز یکبارمصرف</span>
                        </Button> : <></>
                    }

                    <Button className=" font-medium !font-yekanBakh" fill={"transparent"} size={"xs"} onClick={() => router.push((Paths.signup))}>
                        <span className="pt-1 text-sm xl:text-base">هنوز ثبت‌نام نکرده ام </span>
                    </Button>
                </div>
            </Form>

        </>
    )
}
