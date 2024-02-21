import {Maybe, Scalars} from "@/lib/types/mainService";

export type linkItem ={
    item:Maybe<Scalars["String"]>,
    link: Maybe<Scalars["String"]>,
}

export type searchParamT =  { [key: string]: string | string[] | undefined }