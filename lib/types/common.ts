import {Maybe, Scalars} from "@/lib/types/mainService";

export type linkItem ={
    item:Maybe<Scalars["String"]>,
    link: Maybe<Scalars["String"]>,
}
export type selectorItem ={
    value: string  | null
    label:string | JSX.Element
    name?:string
}
export type snackBar = {
    show:boolean,
    message:string,
    icon:string,
    error:boolean
}
export type searchParamT =  { [key: string]: string | string[] | undefined }