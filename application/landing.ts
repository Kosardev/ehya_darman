import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {Landing} from "@/lib/types";

export const revalidate = 3600
export const getLanding = cache(async ():Promise<Landing|null>=>{
    console.log("GetLanding data",Uri.shopServiceIP)
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/general/landingPage').addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})