import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {breadCrumbsT,QueryGet_BreadCrumbsArgs} from "@/lib/types";

export const revalidate = 3600
export const getBreadCrumbs = cache(async (filter:QueryGet_BreadCrumbsArgs):Promise<breadCrumbsT|null>=>{
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/products/getBreadCrumbs?code='+(filter?.code??null)+"&type="+(filter?.type??"plp")).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})