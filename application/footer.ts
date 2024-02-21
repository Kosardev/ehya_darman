import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {Footer} from "@/lib/types/footer";
export const revalidate = 3600
export const getFooter = cache(async ():Promise<Footer|null>=>{
    const verifyCallback = new RequestBuilder ("GET",Uri.shopServiceIP+'/general/footer').addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})