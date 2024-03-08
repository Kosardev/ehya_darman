"use client"
import Visible from "@/components/common/visible";
import BaseContainer from "@/components/common/baseContainer";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Image from "@/components/common/Image";
import {ProductPageType} from "@/lib/types";
import Icon from "@/components/common/Icon";
import {useState} from "react";

export default function PdpTabs({ data }:ProductPageType) {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (

            <Visible visible={!!(data?.introduction?.text || data?.expertCheck?.data?.length  || data?.frequentlyAskedQuestions?.length|| data?.videos?.length || data?.technicalData?.length )}>
                <Tabs theme id="custom-animation" value="introduction">
                    <TabsHeader className={"tabHeaders"} indicatorProps={{
                        className: "!hidden",
                    }}>
                        {!!data?.introduction?.text && <Tab activeClassName="bg-gray-e1 text-red-ehya !px-5 text-xl font-bold" key={"Introduction"}  value={"introduction"}>معرفی</Tab>}
                        {!!data?.expertCheck?.data?.length && <Tab activeClassName="bg-gray-e1 text-red-ehya !px-5 text-xl font-bold" key={"ExpertCheck"}  value={"expertCheck"}>بررسی تخصصی</Tab>}
                        {!!data?.technicalData?.length && <Tab activeClassName="bg-gray-e1 text-red-ehya !px-5 text-xl font-bold" key={"TechnicalData"}  value={"technicalData"}>مشخصات فنی</Tab>}
                        {!!data?.videos?.length && <Tab activeClassName="bg-gray-e1 text-red-ehya !px-5 text-xl font-bold" key={"Videos"}  value={"videos"}>ویدئوها</Tab>}
                        {!!data?.frequentlyAskedQuestions?.length && <Tab activeClassName="bg-gray-e1 text-red-ehya !px-5 text-xl font-bold" key={"FrequentlyAskedQuestions"}  value={"frequentlyAskedQuestions"}>پرسش ها</Tab>}
                    </TabsHeader>
                    <TabsBody animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}>
                        {!!data?.introduction?.text && <TabPanel className={"bg-gray-e1"} key={"Introduction"}  value={"introduction"}>
                            <BaseContainer>
                                <div className={"flex gap-5 lg:gap-10 items-center tabContentWrapper"}>
                                    <div
                                        className={!!(data?.introduction?.image || data?.introduction?.video) ? "tabContent" : ""}>
                                        <h3 className={"font-shabnam font-bold text-xl "}>{data?.introduction?.title}</h3>
                                        <p className={"font-shabnam text-sm mt-4 "}>{data?.introduction?.text}</p>
                                        <Visible visible={!!data?.introduction?.items?.length}>
                                            <ul className={"font-shabnam text-sm leading-6 mt-4 "}>
                                                {data?.introduction?.items?.map(item =>
                                                    <li key={item?._id}>{item?.text}</li>
                                                )}
                                            </ul>
                                        </Visible>
                                    </div>
                                    <Visible visible={!!(data?.introduction?.image || data?.introduction?.video)}>
                                        {data?.introduction?.video ?
                                            <div className={"relative "}>
                                                <video controls className={"videoPlayer tabImage "} poster={data?.introduction?.image ?? ""}>
                                                    <source src={data?.introduction?.video ?? ""} type={"video/mp4"}/>
                                                </video>
                                                <span className={"playIcon"}>
                                                <Icon name={"play"} size={"w-9 h-9"} color={"fill-white"}/>
                                           </span>
                                            </div>
                                            :
                                            <Image
                                                layout={"responsive"}
                                                width={560}
                                                height={365}
                                                className={"object-contain tabImage"}
                                                src={data?.introduction?.image ?? ""}
                                                alt={data?.introduction?.title ?? "معرفی احیا درمان"}/>
                                        }
                                    </Visible>
                                </div>
                            </BaseContainer>
                        </TabPanel>}
                        {!!data?.expertCheck?.data?.length && <TabPanel className={"bg-gray-e1"} key={"ExpertCheck"}  value={"expertCheck"}>
                            <BaseContainer>
                                <div className={"w-full  tabContentWrapper"}>
                                    {data?.expertCheck?.data?.map(item => <div key={item?._id}>
                                        <h4>{item?.title}</h4>
                                        <p>{item?.text}</p>
                                    </div>)}
                                </div>
                            </BaseContainer>
                        </TabPanel>}
                        {!!data?.technicalData?.length && <TabPanel className={"bg-gray-e1"} key={"TechnicalData"}  value={"technicalData"}>
                            <BaseContainer>
                                <ul className={"technicalData"}>
                                    {data?.technicalData?.map(item => <li className={"py-6 w-full flex border-b border-white last:border-b-0 gap-4 ltr"} key={item?._id}>
                                        <h4 className={"w-2/12 font-kalamehFa "}>{item?.key} :</h4>
                                        <p className={"grow font-shabnam flex gap-1.5 items-center flex-wrap  "}>{item?.values?.map((value, key) => <span
                                            key={key}>{(key !== 0 ? " , " : "") + value}</span>)}</p>
                                    </li>)}
                                </ul>
                            </BaseContainer>
                        </TabPanel>}
                        {!!data?.videos?.length && <TabPanel className={"bg-gray-e1"} key={"Videos"}  value={"videos"}>
                            <BaseContainer>
                                <div className={"flex gap-5 lg:gap-10 items-center flex-wrap tabContentWrapper"}>
                                    {data?.videos?.map(item => <div className={"tabVideo"}  key={item?._id}>
                                        <video className={" tabImage"} controls>
                                            <source src={item?.image ?? ""} type={"video/mp4"}/>
                                        </video>
                                        <h3>{item?.title}</h3>
                                    </div>)}
                                </div>
                            </BaseContainer>
                        </TabPanel>}
                        {!!data?.frequentlyAskedQuestions?.length && <TabPanel className={"bg-gray-e1"} key={"FrequentlyAskedQuestions"}  value={"frequentlyAskedQuestions"}>
                            <BaseContainer>
                                {data?.frequentlyAskedQuestions?.map((item,key) =>
                                    <Accordion className={"bg-white-500 rounded-xl mb-4"} key={key} open={open === key}>
                                        <AccordionHeader className={"font-shabnam px-4 border-0"}  onClick={() => handleOpen(key)}>{item?.question}</AccordionHeader>
                                        <AccordionBody  className={"font-shabnam px-4 border-t border-black-100"}>
                                            {item?.answer}
                                        </AccordionBody>
                                    </Accordion>
                                )}
                            </BaseContainer>
                        </TabPanel>}
                    </TabsBody>
                </Tabs>
            </Visible>
    )
}
