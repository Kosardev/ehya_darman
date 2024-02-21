import Image from "./Image";
import { Svgs } from "@/lib/types";

type SvgsT = {
    name: Svgs;
    width: number;
    height: number;
    alt?: string
};

export function Svgs({ name, height, width, alt }:SvgsT){
    return <Image width={width} height={height} alt={alt ?? ""}
                  title={alt} layout="fixed"
                  // src={`/public/img/${name}.svg`}
                  src={`/img/${name}.svg`}
    />;
};