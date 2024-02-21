import {ReactNode,ReactElement} from "react";

type BaseContainerT = {
    children: ReactNode | ReactElement;
}

export default function BaseContainer({ children }:BaseContainerT) {
    return (
        <div className={"xl:max-w-[1200px] 2xl:max-w-[1300px] 3xl:max-w-[1450px] xl:mx-auto"}>
            {children}
        </div>
    )
}
