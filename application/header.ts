import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {HeaderT} from "@/lib/types/header";
export const revalidate = 3600
export const getHeader = cache(async ():Promise<HeaderT|null>=>{
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/general/menu').addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})