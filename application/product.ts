import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {ProductPageType, QueryGet_Product_PageArgs} from "@/lib/types";

export const revalidate = 3600
export const getProductPage = cache(async (product:QueryGet_Product_PageArgs):Promise<ProductPageType|null>=>{
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/products/singleProduct?productCode='+product?.code??null).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;

    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})