import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {List,QueryGet_Product_ListArgs} from "@/lib/types";

export const revalidate = 3600
export const getProductList = cache(async (filter:QueryGet_Product_ListArgs):Promise<List|null>=>{
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/products/list?code='+(filter?.code??null)+"&skip="+(filter?.skip??0)+"&limit="+(filter?.limit??12)).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})