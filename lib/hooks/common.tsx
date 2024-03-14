"use client";
import React, {
    createContext,
    ReactNode,
    useContext, useEffect,
    useRef,
    useState,
} from "react";
import {snackBar} from "@/lib/types";
import RequestBuilder from "@/application/rest-request";
import {Uri} from "@/environment";
import {AxiosResponse} from "axios";
interface CommonCtxInterface {
    snackBar:snackBar,
    setSnackBar :React.Dispatch<React.SetStateAction<snackBar>>,
    loading:{show:boolean},
    setLoading:React.Dispatch<React.SetStateAction<{show: boolean;}>>,
    checkAuth:boolean;
}
export const CommonCtx = createContext<CommonCtxInterface | null>(null);
export default function CommonProvider({ children }: ReactNode | any) {
    const [snackBar, setSnackBarState] = useState<snackBar>({show:false,icon:null,message:null,error:null})
    const [loading, setLoading] = useState<{show:boolean}>({show:false})
    const [checkAuth, setCheckAuth] = useState<boolean>(false)
    const setTimeOutHolder = useRef(null)
    async function setSnackBar(args) {
        setSnackBarState(args)
        if(setTimeOutHolder.current) clearTimeout(setTimeOutHolder.current)
        setTimeOutHolder.current =  setTimeout(()=>setSnackBar({show:false,icon:null,message:null,error:false}),3000);
    }
    async function checkUserAuth() {
        console.log("checkUserAuth>>>>>>>>>>>>>>>>>>>>>")
        const verifyCallback = new RequestBuilder ("GET",Uri.checkAuth).addHeader( "Content-Type","application/json").ExecuteAsync()
        const response:AxiosResponse = await verifyCallback;
        console.log("checkUserAuth>>>>>>>>>>>>>>>>>>>>>2",response)
        setCheckAuth(response?.status === 200??false)
    }
    useEffect(()=>{
        checkUserAuth()
    },[])
    return (
        <CommonCtx.Provider
            value={{snackBar,setSnackBar,loading, setLoading,checkAuth}}
        >
            {children}
        </CommonCtx.Provider>
    );
}
export function useCommon() {
    return useContext(CommonCtx);
}
