import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {AboutUsType} from "@/lib/types/aboutUs";
export const getAboutUsInfo = cache(async ():Promise<AboutUsType|null>=>{
    console.log("GetContact data",Uri.shopServiceIP)
    const verifyCallback = new RequestBuilder ("GET",Uri.aboutIP).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})