type TitleT = {
    title ?: string;
    className ?: string;
};

export default function Title({ title,className }:TitleT){
    return (
        <h2 className={className + ' text-lg mt-4 3xl:text-[28px] 3xl:leading-[38px] text-black-dark font-yekanBakh font-bold'}>
            {title}
        </h2>
    );
};


