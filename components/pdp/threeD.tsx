"use client"
import {animate} from "@/lib/utils/threeD";
import {useEffect} from "react";
import {isBrowser} from "@/lib/utils/utils-functions";

export default function ThreeD() {
    useEffect(()=>{
        if (isBrowser){
            console.log("wwwwwwwwwwwwwwwwww",window?.innerWidth)
            // animate();
        }
    },[])
    return(
        <div className={"w-full h-screen border border-red-DEFAULT-700 "}>
            <div id="container3D"/>
        </div>
    )
}