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
    const onSubmit= async (data:IFormInput) => {
        // try {
            console.log("submit", data);
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
            <h1 className="flex items-center gap-3 xs:gap-[18px] font-yekanBakh mt-4 mb-[55px] xs:mb-[50px] ">
                <span className="text-base font-medium leading-5 xs:text-[22px] xs:leading-6">ورود</span>
                <span className="h-[18px] w-0 border-l border-gray-700 xs:h-[20px] xs:border-l-[1.5px]"/>
                <span className="text-base font-medium leading-5 xs:text-[22px] xs:leading-6">ثبت نام</span></h1>
            <Form className=" w-full flex flex-col " onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, formState: { errors } }) => (
                        <>
                            <InputLabelFloat
                                classname={{input:'leading-[18px] xs:leading-5 !w-full', label: " focus-within:border-secondary "}}
                                autoFocus={true}
                                label="نام کاربری "
                                error={errors?.username??""}
                                errorMessage={errors?.username??""}
                                value={field?.value??""}
                                {...field}
                            />
                        </>
                    )}
                />
                <div className={"mt-[42px]"}>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, formState: { errors } }) => (
                            <>
                                <InputLabelFloat
                                    classname={{input:'leading-[18px] xs:leading-5 !w-full', label: " focus-within:border-secondary "}}
                                    autoFocus={false}
                                    label="رمز عبور"
                                    error={errors?.password??""}
                                    errorMessage={errors?.password??""}
                                    value={field?.value??""}
                                    type={"password"}
                                    {...field}
                                />
                            </>
                        )}
                    />
                </div>
                {/*//relative flex w-full items-center justify-center transition-all h-[44px] bg-primary-100 border-2 border-primary-100 rounded-[8px]*/}
                <div className="fixed inset-x-6 bottom-4 flex flex-col items-center  xs:relative xs:inset-x-[unset] xs:bottom-[unset] xs:mt-[52px] gap-3">
                    <Button
                        className="w-full font-medium !font-yekanBakh" fill={"fill"} size={"lg"}
                        type="submit">
                        <span className="pt-1 text-sm xl:text-base">ورود </span>
                    </Button>
                    <Button fill={"outline"} size={"lg"} className={"mt-3 w-full  font-medium !font-yekanBakh"} >
                        <span className="pt-1 text-sm xl:text-base">ورود با رمز یکبارمصرف</span>
                    </Button>
                    <Button className=" font-medium !font-yekanBakh" fill={"transparent"} size={"xs"} onClick={() => router.push((Paths.signup))}>
                        <span className="pt-1 text-sm xl:text-base">هنوز ثبت‌نام نکرده ام </span>
                    </Button>
                </div>
            </Form>

        </>
    )
}
