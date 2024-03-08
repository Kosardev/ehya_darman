import {useState} from "react";
import Icon from "@/components/common/Icon";
import classNames  from "classnames";


type HeaderT = {
    transparentHeader?:boolean
};
export default function Index({transparentHeader}:HeaderT) {
    const [searchTxt,setSearchTxt] = useState<string|undefined>(undefined)
    const [showSearch,setShowSearch] = useState<boolean>(false)

    const handleToggle = () => {
        setShowSearch((current) => !current);
        setSearchTxt("")
    };

    return (
        <label onClick={handleToggle} htmlFor='search'
               className={classNames('font-yekanBakh font-light flex items-center gap-0.5 lg:gap-1  rounded-full pr-1 lg:pr-2', {
                   'border border-white-500 group-hover:border-red-ehya': !!transparentHeader && showSearch,
                   'border border-black ': !transparentHeader && showSearch,
               })}
        >
            <Icon name='search1' color={transparentHeader ? 'fill-white  group-hover:fill-red-ehya':'fill-black'} size='w-3 h-3 lg:w-6 lg:h-6'/>
            <input id='search'
                   value={searchTxt}
                   onChange={(e)=>setSearchTxt(e.target.value)}
                   onClick={(e)=>e.stopPropagation()}
                   className={classNames(' w-0 text-white group-hover:text-black transition-all duration-300 px-1.5 py-1 lg:py-2 text-sm overflow-hidden text-ellipsis  ',{' !flex !w-[200px] ': showSearch})}
                   type="text"
            />
        </label>
    )
}
