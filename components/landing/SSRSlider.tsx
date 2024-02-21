import { FC } from "react";
import { Maybe } from "@/lib/types";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { slide } from "@/lib/types";
import AspectRatio from "@/components/common/aspectRatio";

type SSRContentT = {
    images: Maybe<Maybe<slide>[]>;
    width: number
    height: number
};

const SSRContent: FC<SSRContentT> = ({ images,width,height }) => {
    return (
        <div  className="h-[292px] !w-full overflow-hidden lg:h-[430px]">
            {images &&
                images?.map((image, index) => (
                    <div className="!w-full bg-black" key={"ssr"+image?.image+index}>
                        <Link href={image?.link ?? ""} target="_blank" >
                            <AspectRatio aspect={height/width}>
                                <Image
                                    src={image?.image ?? ""}
                                    alt={image?.description ?? ""}
                                    layout="fill"
                                    style={{ objectFit: "cover" }}
                                    priority={index === 0}
                                />
                            </AspectRatio>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default SSRContent;
