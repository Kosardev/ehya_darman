import {Maybe, Scalars} from "@/lib/types/mainService";
export type footerLinkItem ={
    name: Maybe<Scalars["String"]>,
    title: Maybe<Scalars["String"]>,
    icon:Maybe<Scalars["String"]>,
    link: Maybe<Scalars["String"]>,
    item: Maybe<Scalars["String"]>,
    _id:Maybe<Scalars["ObjectID"]>,
}
export type footerItem ={
    items: footerLinkItem[],
    section: Maybe<Scalars["String"]>,
    title:Maybe<Scalars["String"]>,
    _id:Maybe<Scalars["ObjectID"]>,
}
export type Footer = {
    _id:Maybe<Scalars["ObjectID"]>,
    locale:Maybe<Scalars["String"]>,
    context: footerItem[],
    socialMedias:footerLinkItem[],
    createdAt:Maybe<Scalars["DateTime"]>,
    updatedAt:Maybe<Scalars["DateTime"]>,
    __v:Maybe<Scalars["Int"]>,
}