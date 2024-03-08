import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse,Method } from "axios";
import RequestBuilder from "@/application/rest-request";
export const revalidate = 3600
interface request{
    method: Method,
    url: string
}
export const getData = cache(async (request:request):Promise<AxiosResponse>=>{
    console.log("GetLanding data",Uri.shopServiceIP)
    const verifyCallback = new RequestBuilder (request?.method,request?.url).addHeader( "Content-Type","application/json").ExecuteAsync()
    return await verifyCallback;

})