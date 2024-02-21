import Icon from "@/components/common/Icon";
import {Icons} from "@/lib/types";
import cn from "classnames";

type SubTitleT = {
    title ?: string;
    className ?: string;
    icon ?: Icons;
};

export default function SubTitle({ title,icon,className }:SubTitleT){
    return (
        <div className={cn(className,'flex items-center gap-2 text-sm text-red-ehya font-yekanBakh font-medium')}>
            {icon?<Icon name={icon} size={'w-4 h-4'} color={'fill-red-ehya'}/>:null}
            {title}
        </div>
    );
};


