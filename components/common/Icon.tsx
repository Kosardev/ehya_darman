import { ClassName, Icons } from "@/lib/types";
import cn from "classnames";

type IconT ={
    name?: Icons;
    className?: ClassName;
    color?: string;
    size?: string;
    onClick?: () => void;
}

export default function Icon({ name = "plus", className, color, size, onClick }:IconT){
    return (
        <svg
            onClick={onClick}
            className={cn(
                `icon icon-${name} ${color === undefined ? "fill-gray-700" : color} ${
                    size === undefined ? "w-6 h-6" : size
                }`,
                className,
            )}>
            <use xlinkHref={`/assets/icons/symbol-defs.svg#icon-${name}`}></use>
        </svg>
    );
};
