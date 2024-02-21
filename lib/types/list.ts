import {InputMaybe, Maybe, Scalars} from "@/lib/types/mainService";

export type QueryGet_Product_ListArgs = {
    code?: InputMaybe<Scalars["String"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};


export type banner ={
    image?: Maybe<Scalars["String"]>,
    title?: Maybe<Scalars["String"]>,
}
export type subCategories ={
    title?: Maybe<Scalars["String"]>
    code?: Maybe<Scalars["String"]>
}
export type productList ={
    code?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["String"]>;
    description?:  Maybe<Array<Maybe<Scalars["String"]>>>;
    name?: Maybe<Scalars["String"]>;
}
export type productsData ={
    count?: Maybe<Scalars["Int"]>;
    products?: productList[],
}
export type List = {
    banner?: banner,
    subCategories?: subCategories[],
    productsData?: productsData[],
}