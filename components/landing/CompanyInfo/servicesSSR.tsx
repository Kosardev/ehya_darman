import React, { FC } from "react";
import {Maybe, servicesSection} from "@/lib/types";
import SubTitle from "@/components/common/subTitle";
import Title from "@/components/common/title";

type ServicesSSRT = {
    sections: Maybe<Maybe<servicesSection>[]>;
};

const ServicesSSR: FC<ServicesSSRT> = ({sections }) => {
    return (
        <div  className="h-[292px] !w-full overflow-hidden lg:h-[430px]">
            {sections?.map((item, index) => (
                <div className="!w-full " key={"servicesSSr"+index}>
                    <SubTitle title={item?.title??""} icon={'plus'}/>
                    <Title title={item?.shortDescription??""} className='text-2xl' />
                    <p className="pt-1 font-yekanBakh leading-8 pb-12 ">{item?.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServicesSSR;