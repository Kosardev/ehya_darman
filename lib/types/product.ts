import {InputMaybe, Maybe, Scalars} from "@/lib/types/mainService";

export type QueryGet_Product_PageArgs = {
    code?: InputMaybe<Scalars["String"]>;
};

export type imageListType = {
    image?: Maybe<Scalars["String"]>;
    isDefault?: Maybe<Scalars["Boolean"]>;
    title?: Maybe<Scalars["String"]>;
}
export type descriptionType = {
    title?: Maybe<Scalars["String"]>;
    text?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["String"]>;
    video?: Maybe<Scalars["String"]>;
    items?: Maybe<Array<Maybe<descriptionItemType>>>;
}
export type descriptionItemType = {
    text?: Maybe<Scalars["String"]>;
    _id?: Maybe<Scalars["ObjectID"]>;
}
export type expertCheckDataType = {
    title?: Maybe<Scalars["String"]>;
    text?: Maybe<Scalars["String"]>;
    index?: Maybe<Scalars["Int"]>;
    _id?: Maybe<Scalars["ObjectID"]>;
}
export type expertCheckType = {
    locale?: Maybe<Scalars["String"]>;
    data?: Maybe<Array<Maybe<expertCheckDataType>>>;
    _id?: Maybe<Scalars["ObjectID"]>;
}
export type technicalDataType = {
    key?: Maybe<Scalars["String"]>;
    values?: Maybe<Array<Maybe<Scalars["String"]>>>;
    _id?: Maybe<Scalars["ObjectID"]>;
}
export type fAQType = {
    question?: Maybe<Scalars["String"]>;
    answer?: Maybe<Array<Maybe<Scalars["String"]>>>;
    _id?: Maybe<Scalars["ObjectID"]>;
}
export type SimilarProductType = {
    image?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
}
export type ProductPageType = {
    code?: Maybe<Scalars["String"]>;
    defaultImage?: Maybe<Scalars["String"]>;
    smallImage?: Maybe<Scalars["String"]>;
    images?: Maybe<Array<Maybe<imageListType>>>;
    videos?: Maybe<Array<Maybe<imageListType>>>;
    pdfs?: Maybe<Array<Maybe<imageListType>>>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<descriptionType>;
    introduction?: Maybe<descriptionType>;
    expertCheck?: Maybe<expertCheckType>
    technicalData?: Maybe<Array<Maybe<technicalDataType>>> 
    frequentlyAskedQuestions?: Maybe<Array<Maybe<fAQType>>>
    similarProducts?: Maybe<Array<Maybe<SimilarProductType>>>
    specializedExamination?: Maybe<Array<Maybe<descriptionType>>>
};