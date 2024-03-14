import {Uri} from "@/environment";
import RequestBuilder from "@/application/rest-request";
import {AxiosResponse} from "axios";
import {signUp, TLogin} from "@/lib/types/account";

export const Login = async (data:TLogin):Promise<AxiosResponse>=>{
    console.log("Login data",Uri.loginServiceIP,data)
    const verifyCallback = new RequestBuilder ("POST",Uri.loginServiceIP).addHeader( "Content-Type","application/json").setBody({...data}).ExecuteAsync()
    return await verifyCallback;
}

export async function SignUp(data:signUp) {
    try {
        console.log("SignUp data",Uri.loginServiceIP,data)
        const verifyCallback = new RequestBuilder ("POST",Uri.signupServiceIP).addHeader( "Content-Type","application/json").setBody({...data}).ExecuteAsync()
        console.log("SignUp data22",Uri.loginServiceIP,data)
        return await verifyCallback;
    } catch (e) {
        throw new Error('Failed to create task')
    }
}