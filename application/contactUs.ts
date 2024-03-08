import { Uri } from "@/environment";
import { cache } from 'react'
import { AxiosResponse } from "axios";
import RequestBuilder from "@/application/rest-request";
import {CitiesAndBranches, contactForm, ContactUsType} from "@/lib/types";
export const revalidate = 3600
export const getContactInfo = cache(async ():Promise<ContactUsType|null>=>{
    console.log("GetContact data",Uri.shopServiceIP)
    const verifyCallback = new RequestBuilder ("GET",Uri.contactUsIP).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})
export const getCitiesAndBranches = cache(async ():Promise<CitiesAndBranches|null>=>{
    console.log("CitiesAndBranches data",Uri.shopServiceIP)
    const verifyCallback = new RequestBuilder ("GET",Uri.branchesIP).addHeader( "Content-Type","application/json").ExecuteAsync()
    const response:AxiosResponse = await verifyCallback;
    if(response?.status === 200){
        return response.data;
    }else{
        return null;
    }

})

export async function SubmitContactForm(data:contactForm) {
    try {
        console.log("SignUp data",data)
        const verifyCallback = new RequestBuilder ("POST",Uri.contactFormIP).addHeader( "Content-Type","application/json").setBody({...data}).ExecuteAsync()
        console.log("SignUp data22",verifyCallback)
        return await verifyCallback;
    } catch (e) {
        throw new Error('Failed to create task')
    }
}