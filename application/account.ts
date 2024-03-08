import {Uri} from "@/environment";
import RequestBuilder from "@/application/rest-request";
import {AxiosResponse} from "axios";
import {signUp} from "@/lib/types/account";

export const Login = async (request: {}):Promise<AxiosResponse>=>{
    console.log("Login data",Uri.loginServiceIP,request)
    const verifyCallback = new RequestBuilder ("POST",Uri.loginServiceIP).addHeader( "Content-Type","application/json").setBody({...request}).ExecuteAsync()
    return await verifyCallback;
}

export async function SignUp(dta:signUp) {
    try {
        console.log("SignUp data",Uri.loginServiceIP,dta)
        const verifyCallback = new RequestBuilder ("POST",Uri.signupServiceIP).addHeader( "Content-Type","application/json").setBody({...dta}).ExecuteAsync()
        console.log("SignUp data22",Uri.loginServiceIP,dta)
        return await verifyCallback;
    } catch (e) {
        throw new Error('Failed to create task')
    }
}