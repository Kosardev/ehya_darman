// import React, { FC, forwardRef, memo } from "react";
// import Select, { components } from "react-select";
// import cn from "classnames";
// import Visible from "@/components/common/visible";
// import Icon from "@/components/common/Icon";
//
// const { ValueContainer, Placeholder } = components;
// const CustomValueContainer = ({ children, ...props }: any) => {
//     return (
//         <ValueContainer {...props}>
//             <Placeholder {...props} isFocused={props.isFocused}>
//                 {props.selectProps.placeholder}
//             </Placeholder>
//             {React.Children.map(children, (child) => (child && child.type !== Placeholder ? child : null))}
//         </ValueContainer>
//     );
// };
// type SelectLabelFloatT = {
//     isRequired?: boolean;
//     label: string;
//     ref?: any;
//     option: { label: string; value: string }[];
//     error?: boolean;
//     errorMessage?: string | null;
//     value?:{label:string; value:string}
//     onChange?: (e: { label: string; value: string }) => void;
//     inputHeight?: "xl" |"lg"
//     className?: { [ket in "select"]?: string }
// };
//
// const SelectLabelFloat: FC<SelectLabelFloatT> = forwardRef(({ className, label, isRequired, option, error, errorMessage , onChange , value, inputHeight , ...props}, ref) => {
//     const placeholder = () => {
//         return (
//             <span className={cn("relative text-gray-500 text-xs lg:!text-sm font-semiBold flex items-center", {
//                 " lg:-!translate-y-2 !text-gray-700" : value
//             })}>
//                 <Visible visible={isRequired}>
//                     <p className="text-red-400 absolute -right-1.5">*</p>
//                 </Visible>
//                 <p className={cn( {
//                     "text-sm font-semiBold text-gray": !value,
//                     "text-gray-600 text-xs xl:text-xs font-medium" :value
//                 })}>{label}</p>
//             </span>
//         );
//     };
//     const displayIcon = () => {
//         return <Icon name="done" color="fill-green-1" />;
//     };
//     return (
//         <>
//             <Select
//                 options={option}
//                 className={cn(
//                     "[&>div]:!h-[48px] lg:[&>div]:!h-[56px] relative [&>div]:rounded-lg [&>div]:border-gray-300 [&>div]:shadow-none lg:[&>div>div>div]:!text-sm lg:[&>div]:px-3.5",
//                     {
//                         " [&>div]:!border-red": error,
//                     },
//                     className?.select
//                 )}
//                 ref={ref}
//                 onChange={(e) => { onChange?.({ label: e?.label ?? "", value: e?.value ?? "" }) }}
//                 placeholder={placeholder()}
//                 components={{
//                     ValueContainer: CustomValueContainer,
//                     IndicatorSeparator: () => null,
//                 }}
//                 styles={{
//                     control: (provided, stat) => ({
//                         ...provided,
//                         borderRadius: "0.5rem",
//                         borderColor: "rgb(215 222 224)"
//                     }),
//                     valueContainer: (provided, state) => ({
//                         ...provided,
//                         overflow: "visible",
//                         height: !inputHeight || inputHeight === "xl" ? "54px" : "46px",
//                         padding: "2px 22px"
//                     }),
//                     singleValue: (provided, state) => ({
//                         ...provided,
//                         fontSize: 12,
//                         fontWeight: 600,
//                         color: "#333333",
//                         overflow: "visible",
//                     }),
//                     placeholder: (provided, state) => {
//                         console.log("select box value", state);
//                         return  {
//                             ...provided,
//                             position: "absolute",
//                             top: state.hasValue || state.selectProps.inputValue ? "-52%" : "30%",
//                             right: "-22px",
//                             fontWeight: "600",
//                             transition: "top 0.2s, font-size 0.2s",
//                             fontSize: (state.hasValue || state.selectProps.inputValue) ? 10 : 14
//                         };
//                     },
//                     option: (provided, state) => ({
//                         ...provided,
//                         direction: "rtl",
//                         borderRadius: "0.5rem",
//                         color: "#333333",
//                         fontSize: 12,
//                         userSelect: "auto",
//                         cursor: "default",
//                         backgroundColor: "#fff",
//                         hover: { background: "#F1F8FF ", cursor: "pointer" },
//                         paddingRight: "38px",
//                         paddingBottom: "12px",
//                     }),
//                     dropdownIndicator: (provided, state) => ({
//                         ...provided,
//                         color: "#333333",
//                     }),
//                     menuList: (provided, state) => ({
//                         ...provided,
//                         boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
//                         borderRadius: "10px",
//                         maxHeight: 200,
//                         position: "absolute",
//                         top: "-80%",
//                         width: "100%",
//                         direction: "rtl",
//                         "::-webkit-scrollbar": {
//                             width: "6px",
//
//                         },
//                         "::-webkit-scrollbar-track": {
//                             background: "#F0F0F1",
//                             borderRadius: 2,
//                             marginLeft: "16px",
//                             marginTop: "20px",
//                             marginBottom: "20px"
//
//                         },
//                         "::-webkit-scrollbar-thumb": {
//                             background: "#ABAFB5",
//                             borderRadius: 13,
//                         },
//                     }),
//                 }}
//                 value={value}
//                 {...props}
//             />
//             <Visible visible={error && errorMessage !== null}>
//                 <div className=" relative">
//                     <Icon name="error" color="fill-red" className={" absolute left-4 -top-9"} />
//                     <p className=" absolute pt-1 lg:pt-1.5 px-4 text-xs lg:text-xs text-red font-bold lg:font-medium">
//                         {errorMessage}
//                     </p>
//                 </div>
//             </Visible>
//         </>
//     );
// });
//
// SelectLabelFloat.displayName = "SelectLabelFloat"
//
// export default memo(SelectLabelFloat);
import React, {useCallback, useMemo} from 'react';
import Select from 'react-select';
import {StateManagerProps} from 'react-select/dist/declarations/src/useStateManager'
import ErrorField from "@/components/common/form/errorField";
import {selectorItem} from "@/lib/types";
import Visible from "@/components/common/visible";
import cn from "classnames";


export const selectorStyle = {
    option: (provided, state) => ({
        ...provided,
        direction: 'rtl',
        borderRadius: 6,
        color:state.isSelected  ? '#196EC0' :state.isFocused ? '#000' :  "#666666",
        // fontFamily: "yekanb-faNum-m",
        // fontSize: 14,
        userSelect: "auto",
        marginBottom: 13,
        //   padding:'6px 12px',
        cursor: "pointer",
        backgroundColor: '#fff ',
        "hover": {background: "#F1F8FF ", cursor: "pointer"},
    }),
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        border: '1px solid',
        borderColor:'#FF6E77',
        borderRadius: 8,
        minHeight: 56,
        background: state.isDisabled ? '#F6F6F6' : 'transparent',
        "hover": {boxShadow: "none "},
        boxShadow: "none"

    }),

    menu: (provided) => ({

        ...provided,
        padding: '25px 12px 12px 12px',
        //   paddingBottom :0,
        //   top:'calc(100% - 45px)',
        width: 'calc(100% + 2px)',
        right: -1,
        zIndex: 99
    }),
    menuList: (provided) => ({

        ...provided,
        //   padding:'0 6px 0 10px',
        maxHeight: 300,
        direction: 'ltr',
        "::WebkitScrollbar": {
            width: "6px",
        },
        "::WebkitScrollbar-track": {
            background: "#F0F0F1",
            marginBottom: 10,
            borderRadius: 2
        },
        "::WebkitScrollbar-thumb": {
            background: "#9C761F",
            borderRadius: 13
        },
    }),
    singleValue: (provided, state) => {
        // const opacity = state.isDisabled ? 0.5 : 1;
        const color = state.isDisabled ? '#666666' : '#333333'
        const transition = 'opacity 300ms';
        return {
            ...provided,
            // opacity,
            transition,
            // fontFamily: "yekanb-faNum-b",
            color,
            fontSize: 14,
        };
    },
    multiValue: (provided) => {
        return {
            ...provided,
            borderRadius: '6px',
            backgroundColor: '#F1F8FF',
            // fontFamily: "yekanb-faNum-b",
            color: "#333333",
            fontSize: 16.5,
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px 0 6px',
            "svg": {color: "#666666 "},
        };
    },
    placeholder: (provided) => ({
        ...provided,
        color: '#9C9D9E ',
        fontSize: 14,
        // fontFamily: 'yekanb-faNum-m',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    })
}

export type InputSelectProps =
    {title?:string , error?:string ,isMulti: boolean,isRequired?:boolean,isFloat?:boolean, maxHeight?: number, designType?: "cargo", placeholder?: string, options: selectorItem[] | any, name?: string, hasLabel?: boolean, selectedValue?: any, manualOptions?: boolean, onStateChange: (arg: any) => void }
    & StateManagerProps
// eslint-disable-next-line react/display-name
export const Selector = React.forwardRef(({
                                              noOptionsMessage,
                                              isMulti,
                                              selectedValue,
                                              options,
                                              manualOptions = false,
                                              onStateChange,
                                              name,
                                              title='',
                                              error=null,
                                              hasLabel=false,
                                              placeholder,
                                              designType,
                                              maxHeight,
                                              isRequired=false,
                                              isFloat=false,
                                              ...props
                                          }:InputSelectProps,ref:any)=>{
    const customFilter = useCallback((option, searchText) => {
        return option.data.label?.toLowerCase()?.includes(searchText?.toLowerCase())
    }, [])
    const tempSelectorStyle = useMemo(() => {
        selectorStyle.control= (provided, state) => ({
            ...provided,
            width: '100%',
            borderColor: error ? '#FF6E77' : '#D7DEE0',
            borderRadius: 8,
            minHeight: 56,
            background: state.isDisabled ? ' #F6F6F6' : 'transparent',
            "hover": {boxShadow: "none ",borderColor:'#196EC0'},
            boxShadow: "none"

        })
        if (maxHeight) {
            selectorStyle.menuList = (provided) => ({

                ...provided,
                //   padding:'0 6px 0 10px',
                maxHeight: maxHeight,
                direction: 'ltr',
                "::WebkitScrollbar": {
                    width: "6px",
                },
                "::WebkitScrollbar-track": {
                    background: "#F0F0F1",
                    marginBottom: 10,
                    borderRadius: 2
                },
                "::WebkitScrollbar-thumb": {
                    background: "#9C761F",
                    borderRadius: 13
                },
            })
        }


        return {...selectorStyle}
    }, [maxHeight, selectorStyle,error])
    return(
        <>
            <div className={'w-full relative'}>
                <Select
                    ref={ref}
                    name={name}
                    styles={tempSelectorStyle}
                    value={selectedValue}
                    onChange={(e) => onStateChange(e)}
                    filterOption={customFilter}
                    placeholder={""}
                    // menuIsOpen
                    options={options ?? []}
                    className='w-full rounded-lg '
                    isMulti={isMulti}
                    noOptionsMessage={noOptionsMessage}
                    {...props}
                />
                {isFloat&&
                    <span className={cn("flex items-center text-xs lg:text-sm font-medium text-gray-500 h-6",(selectedValue ?  'selector-label' : 'selector-label-float'))}>
                    {/*<Visible visible={!!isRequired}>*/}
                    {/*    <p className=" text-red-400 absolute -right-1.5">*</p>*/}
                    {/*</Visible>*/}
                        {title}
                </span>}
            </div>
            {error ? <ErrorField error={error}/> : <></> }
        </>
    )
})
