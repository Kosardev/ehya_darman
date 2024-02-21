import {Maybe, Scalars} from "@/lib/types/mainService";

export type slide ={
    image: Maybe<Scalars["String"]>,
    title:Maybe<Scalars["String"]>,
    description: Maybe<Scalars["String"]>,
    link: Maybe<Scalars["String"]>
}
export type slider ={
    locale:Maybe<Scalars["String"]>
    slides:[slide]
}
export type bookmarkedProduct ={
    code?: Maybe<Scalars["String"]>;
    smallImage?: Maybe<Scalars["String"]>;
    shortDescription?:  Maybe<Array<Maybe<Scalars["String"]>>>;
    name?: Maybe<Scalars["String"]>;
    defaultImage?: Maybe<Scalars["String"]>;
}
export type info ={
    title:Maybe<Scalars["String"]>,
    defaultImage: Maybe<Scalars["String"]>,
    shortDescription: Maybe<Scalars["String"]>
}
export type news ={
    code:Maybe<Scalars["String"]>,
    createdAt:Maybe<Scalars["String"]>,
    createdBy:Maybe<Scalars["String"]>,
    type:Maybe<Scalars["String"]>,
    defaultImage: Maybe<Scalars["String"]>,
    title: Maybe<Scalars["String"]>
}
export type servicesDetails ={
    images: { url: string}[],
    sections:servicesSection[],
}
export type servicesSection ={
    title:string,
    description: string,
    shortDescription: string
}
export type Landing = {
    slider:slider[],
    bookmarkedProduct:bookmarkedProduct[],
    companyInfo: {
        info: info
    },
    news:news[],
    servicesDetails:servicesDetails

}